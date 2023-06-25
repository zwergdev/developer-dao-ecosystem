import {MouseEvent, useContext} from 'react'
import {HomeContext} from '@/services/contextAPI'
import {Status} from '@/services/types'

const buttons = [{value: 'Sub-DAO'}, {value: 'Project'}, {value: 'Celebrity'}]
export default function Filters() {
	let {filter, setFilter, setStatus} = useContext(HomeContext)
	const onChangeFilter = (e: MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.value === filter) {
			setFilter('')
		} else {
			setFilter(e.currentTarget.value)
		}
		setStatus(Status.filter)
	}
	return (
		<div className='filtersBox'>
			<div className='filters container'>
				{buttons.map((button, idx) => (
					<button
						key={idx}
						className={filter === button.value ? 'button active' : 'button'}
						value={button.value}
						onClick={(e: MouseEvent<HTMLButtonElement>) => onChangeFilter(e)}>
						{button.value}
					</button>
				))}
			</div>
		</div>
	)
}
