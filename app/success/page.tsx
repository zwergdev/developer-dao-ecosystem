import Link from 'next/link'

export default function () {
	return (
		<div className='miscPage'>
			<h1>
				The <span>f</span>
				<span>o</span>
				<span>r</span>
				<span>m</span> has been submitted.
			</h1>
			<p>Your project will soon appear on the website after verification.</p>
			<Link href='/' className='button'>
				OK
			</Link>
		</div>
	)
}
