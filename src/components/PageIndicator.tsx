import { cn } from '@/lib/utils';

interface PageIndicatorProps {
	pageIndex: number;
	pageCount: number;
	classNames: string;
}

export const PageIndicator = ({
	pageIndex,
	pageCount,
	classNames,
}: PageIndicatorProps) => {
	return (
		<section className='absolute bottom-[8%] flex gap-1 place-self-center'>
			{Array(pageCount)
				.fill(0)
				.map((_, index) => {
					return (
						<div
							key={index}
							className={cn(classNames, {
								'bg-secondary': index === pageIndex,
							})}
						/>
					);
				})}
		</section>
	);
};
