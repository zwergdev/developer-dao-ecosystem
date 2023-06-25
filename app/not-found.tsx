import Link from 'next/link'

export default function () {
	return (
		<div className='miscPage'>
			<h1>
				Not <span>f</span>
				<span>o</span>
				<span>u</span>
				<span>n</span>
				<span>d</span>
			</h1>
			<p>Could not find requested resource</p>
			<Link className='button' href='/'>
				Home
			</Link>
		</div>
	)
}
