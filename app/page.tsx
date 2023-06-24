'use client'
import Home from '@/app/components/home/Home'
import Image from 'next/image'
import banner from '../public/img/banner.png'
import BannerButtons from '@/app/components/home/BannerButtons'

export default function () {
	return (
		<main>
			<section className='container mainBanner'>
				<div className='textBox'>
					<h1>Developer DAO ecosystem.</h1>
					<p>
						Developer DAO is a community of thousands of web3 builders creating a better internet. Explore D_D ecosystem
						and join.
					</p>
					<div className='buttonsBox'>
						<BannerButtons />
					</div>
				</div>
				<Image src={banner} width={788} height={610} alt='banner' />
			</section>
			<section className='projects' id='projects'>
				<Home />
			</section>
		</main>
	)
}
