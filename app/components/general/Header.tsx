import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/img/logo.jpg'

export default function Header() {
	return (
		<header>
			<div className='container'>
				<nav>
					<Link href='/' className='logoBox'>
						<Image src={logo} className='logo' width={32} height={32} alt='logo' priority={true} />
						<span>Developer DAO</span>
					</Link>
					<Link href={'/submit'} className='button'>
						Submit Project
					</Link>
				</nav>
			</div>
		</header>
	)
}
