import {Link} from 'react-scroll'

export default function BannerButtons() {
	return (
		<>
			<Link to='projects' className='button explore' smooth={true} offset={-80} duration={500}>
				Explore
			</Link>
			<a href='https://guild.xyz/dd' className='button join'>
				Join
			</a>
		</>
	)
}
