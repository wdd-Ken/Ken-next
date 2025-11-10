import { cn } from "@/lib/utils"
import Image from "next/image"
import * as motion from "motion/react-client"

interface CardProps {
	name: string,
	src: string,
	classs?: string[],
	texts?: string,
	isvisiable?: boolean
}

export const Cards = ({
	name,
	src,
	classs,
	texts,
	isvisiable
}: CardProps) => {
	return (
		<>
			{isvisiable && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					whileHover={{ scale: 1.1 }}
					transition={{
						duration: 1,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<div className={cn(
						'text-main-blue',
						'text-4xl',
						classs
					)}>
						<div className={cn(
							'relative',
							'w-full',
							'aspect-780/480'
						)}>
							<Image
								src={src}
								alt='next'
								fill={true}
							/>

						</div>
						<div className={cn(
							'pt-[15px]',
						)}>
							<h3 className={cn(
								'pl-[10px]',
								'pr-[10px]',
							)}>
								{name}
							</h3>
							<div className={cn(
								'pt-[10px]',
								'text-[18px]',
								'text-black',
							)}>
								{texts}
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</>
	)
}