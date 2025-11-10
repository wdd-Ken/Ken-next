'use client'

import { Cards } from "@/components/cards"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function Motion() {

	const datas = [
		{
			name: '1914 translation by H. Rackham',
			pic: '/motion/motion_pic_01_1170x720.jpg',
			classs: [
				'rounded-[10px]',
				'overflow-hidden',
				'border',
				'',
				'',
			]
		},
		{
			name: 'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
			pic: '/motion/motion_pic_02_1170x720.jpg',
			classs: ['text-3xl']
		},
		{
			name: '1914 translation by H. Rackham',
			pic: '/motion/motion_pic_03_1170x720.jpg',
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			name: 'The standard Lorem Ipsum passage, used since the 1500s',
			pic: '/motion/motion_pic_01_1170x720.jpg'
		},
		{
			name: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
			pic: '/motion/motion_pic_03_1170x720.jpg'
		},
	]

	const [isVisiable, setVisiable] = useState(true)

	return (
		<>
			<div className={cn(
				'p-[10px]',
				'rounded-[5px]',
				'w-fit',
				'bg-main-blue',
				'text-white',
				'cursor-pointer'
			)}
				onClick={() => setVisiable(prev => !prev)}
			>BUTTOM</div>
			<div className={cn(
				'pt-[60px]',
				'pb-[60px]',
				'grid',
				'grid-cols-[50px_repeat(24,1fr)_50px]',
				'font-(family-name:--font-jost)',
			)}>
				<div className={cn(
					'col-[5/-5]',
					'flex',
					'flex-wrap',
					'gap-x-[7.8125vw]',
					'gap-y-[1.5625vw]'
				)}>
					{
						datas.map(({
							name,
							pic,
							classs,
							text
						}, i) => {
							return (
								<div className={cn(
									'w-[calc((100%-15.625vw)/3)]',
								)} key={i}>
									<Cards name={name} src={pic} classs={classs} texts={text} isvisiable={isVisiable} />
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}