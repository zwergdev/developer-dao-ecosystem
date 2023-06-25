'use client'
import Link from 'next/link'

export default function () {
	return (
		<div className='miscPage'>
			<h1>
				<span>E</span>
				<span>r</span>
				<span>r</span>
				<span>o</span>
				<span>r</span>!
			</h1>
			<p>Something went wrong!</p>
			<Link className='button' href='/'>
				Home
			</Link>
		</div>
	)
}
