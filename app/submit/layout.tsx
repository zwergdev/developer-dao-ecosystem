import '../style/submit.scss'
import {ReactNode} from 'react'

export default function SubmitLayout({children}: {children: ReactNode}) {
	return (
		<main>
			<div className='submitBox'>{children}</div>
		</main>
	)
}
