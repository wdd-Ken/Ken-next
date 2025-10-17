import { cn } from "@/lib/utils"
import { useState } from "react"

interface DialogsProps {
  open: boolean
  children: string
  onOpenChange: (open: boolean) => void
  defaultOpen?: boolean
}

export const Dialogs = ({ 
  open,
  children,
  onOpenChange,
  defaultOpen
}: DialogsProps) => {

  const [innerOpen, setInnerOpen] = useState(defaultOpen)

  const isControlled = open !== undefined
  const openState = isControlled ? open : innerOpen
  
  const handleChange = (next: boolean) => {
    if (!isControlled) setInnerOpen(next)
    onOpenChange?.(next)
  }

  if (!openState) return null

  return (
    <>
      <div className={cn(
        'p-5',
        'w-2xl',
        'h-96',
        'shadow-2xl',
        'rounded-3xl',
        'absolute',
        'bg-violet-300',
        'text-stone-50'
      )}>
        {children}
        <div className={cn(
          'p-0.5',
          'w-6',
          'rounded-xs',
          'flex',
          'justify-center',
          'items-center',
          'bg-violet-100',
          'text-stone-950',
          'cursor-pointer',
          'absolute',
          'top-2',
          'right-2'
        )}
          onClick={() => {handleChange(false)}}
        >x</div>
      </div>
    </>
  )
}