import './style/home.scss'
import {Inter} from 'next/font/google'
import Footer from './components/general/Footer'
import Header from './components/general/Header'
import {ReactNode} from 'react'
import {Metadata} from 'next'

const font = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Developer DAO Ecosystem',
	description: 'Explore Developer DAO ecosystem',
	themeColor: 'black',
	openGraph: {
		title: 'Developer DAO Ecosystem',
		description: 'Explore Developer DAO ecosystem',
		url: 'https://developer-dao-ecosystem.vercel.app',
		siteName: 'Developer DAO Ecosystem',
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Developer DAO Ecosystem',
		description: 'Explore Developer DAO ecosystem',
		siteId: '1654564851425869826',
		creator: '@zwergdev',
		creatorId: '1654564851425869826'
	}
}

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
