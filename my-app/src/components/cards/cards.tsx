import { cn } from "@/lib/utils"
import Image from "next/image"
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import { useRef } from "react"

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

	const hasMounted = useRef(false)

	return (
		<>
			<AnimatePresence>
				{isvisiable && (
					<motion.div
						initial={
							hasMounted.current
								? { opacity: 0, y: 20 }
								: false
						}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
						exit={{
							opacity: 0,
							y: -20,
							transition: {
								duration: 1
							}
						}}
						onAnimationComplete={() => {
							hasMounted.current = true
						}}
						whileHover={{
							scale: 1.1,
							transition: {
								duration: 0.5,
							}
						}}
						transition={{
							duration: 3,
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
									fill={true}
									alt='next'
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
					</motion.div >
				)}
			</AnimatePresence>
		</>
	)
}