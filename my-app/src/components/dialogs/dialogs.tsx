import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { useState } from "react"

interface DialogsProps {
	open?: boolean
	onOpenChange?: (open: boolean) => void
	defaultOpen?: boolean
	children: string
}

export const Dialogs = ({
	open: controlledOpen,
	onOpenChange,
	defaultOpen = false,
	children,
}: DialogsProps) => {

	const [innerOpen, setInnerOpen] = useState(defaultOpen)

	const isControlled = controlledOpen !== undefined

	const actualOpen = isControlled ? controlledOpen : innerOpen

	const handleClose = () => {
		if (isControlled) {
			// 若父層控制 → 通知父層關閉
			onOpenChange?.(false)
		} else {
			// 若沒父層控制 → 自行關閉
			setInnerOpen(false)
		}
	}

	useEffect(() => {
		if (!isControlled && defaultOpen) {
			setInnerOpen(true)
		}
	}, [defaultOpen, isControlled])

	if (!actualOpen) return null

	return (
		<>
			<div className={cn(
				'p-5',
				'absolute',
				'w-2xl',
				'h-96',
				'rounded-3xl',
				'shadow-2xl',
				'bg-violet-300',
				'text-stone-50'
			)}>
				{children}
				<div className={cn(
					'p-0.5',
					'absolute',
					'top-2',
					'right-2',
					'flex',
					'justify-center',
					'items-center',
					'w-6',
					'rounded-xs',
					'cursor-pointer',
					'bg-violet-100',
					'text-stone-950',
				)}
					onClick={() => { handleClose() }}
				>x</div>
			</div>
		</>
	)
}