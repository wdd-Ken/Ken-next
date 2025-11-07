'use client'

import { Cards } from "@/components/cards"
import { cn } from "@/lib/utils"

export default function Motion() {

	const datas = [
		"ken",
		"cora",
		"sue",
		"ash",
	]

	return (
		<>
			<div className={cn(
				'p',
				'grid',
				'grid-cols-[50px_repeat(24,1fr)_50px]',
				// 'h-screen'
			)}>
				<div className={cn(
					'col-[5/-5]',
					'flex',
					'flex-wrap',
					'gap-[30]',
				)}>
					{
						datas.map((el, i) => {
							return (
								<div className={cn(
									'p-[30px]',
									'w-[calc((100%-90px)/4)]',
									// 'h-[100px]',
								)} key={i}>
									<Cards name={el} />
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}