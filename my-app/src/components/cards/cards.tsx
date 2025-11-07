import { cn } from "@/lib/utils"

interface CardProps {
	name: string
}

export const Cards = ({
	name
}: CardProps) => {
	return (
		<>
			<div className={cn(
				'text-main-blue',
			)}>
				{name}
			</div>
		</>
	)
}