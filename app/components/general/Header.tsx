import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
	return (
		<header>
			<div className='container'>
				<nav>
					<Link href='/' className='logoBox'>
						<Image src='/img/logo.jpg' className='logo' width={32} height={32} alt='logo' />
						Developer DAO
					</Link>
					<Link href={'/submit'} className='button'>
						Submit Project
					</Link>
				</nav>
			</div>
		</header>
	)
}
