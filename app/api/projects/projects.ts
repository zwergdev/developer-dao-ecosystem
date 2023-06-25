export type Project = {
	name: string
	image: string
	sector: 'Sub-DAO' | 'Project' | 'Celebrity'
	rating: 'Low' | 'Middle' | 'High'
	socials: {
		twitter: `https://${string}`
		discord?: `https://${string}`
		medium?: `https://${string}`
		gitbook?: `https://${string}`
		site?: `https://${string}`
		youtube?: `https://${string}`
		github?: `https://${string}`
	}
	desc: string
}
export const projects: Project[] = [
	{
		name: 'DeForm',
		image: '/img/projects/deForm.jpg',
		sector: 'Project',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/deformapp',
			site: 'https://www.deform.cc/',
			gitbook: 'https://contributionlabs.notion.site/DeForm-Overview-d704d1f4974a45abb067419a541db3b0'
		},
		desc: 'Web3 forms and surveys for your token-enabled community. The most powerful survey creation tool that helps you identify your audience and understand your community with ease.'
	},
	{
		name: 'DevNTell',
		image: '/img/projects/devNTell.jpg',
		sector: 'Project',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/devntellxyz',
			youtube: 'https://www.youtube.com/c/DeveloperDAO/featured',
			medium: 'https://blog.developerdao.com/series/devntell',
			site: 'https://www.notion.so/DevNTell-e0513133df974ff09e1b5bf4fedc2225'
		},
		desc: 'DevNTell is a 30-minute window for builders to showcase something they are passionate about or have been working on in web3. This could be an awesome project you’ve been working on, demonstrating unit-testing best practices, automation goodies, smart contracts, how to structure a project, etc… Basically, if you’ve got a passion for something, this is your opportunity to share it with the web3 community.'
	},
	{
		name: 'Kay',
		image: '/img/projects/kay.jpg',
		sector: 'Celebrity',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/K4y1s',
			site: 'https://kay.is/',
			github: 'https://github.com/kay-is'
		},
		desc: 'Meet Kay, a developer, blogger, teacher, and author from Stuttgart, Germany. He specialize in software development, with a focus on cloud computing, serverless technology, security, API development, and Web3. Kay offers services such as creating blog articles, books, and documentation. Currently, they serve as the editor-in-chief for the Developer DAO blog, a global community dedicated to teaching and learning about Web3. With over 15 years of experience, Kay has written hundreds of articles, attracting over 15,000 followers and half a million views on their blog.'
	},
	{
		name: 'D_D Women',
		image: '/img/projects/ddWomen.jpg',
		sector: 'Sub-DAO',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/devdaowomen'
		},
		desc: 'Representing women and nonbinary folks building and hacking together.'
	},
	{
		name: 'Papi Billy',
		image: '/img/projects/papiBilly.jpg',
		sector: 'Celebrity',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/wc49358',
			site: 'https://www.billyjitsu.xyz/'
		},
		desc: 'Billy is a software developer, project manager, and crypto enthusiast. He is passionate about blockchain technology and contributes to the Developer DAO community through workshops and technical articles. Billy is experienced in Developer Relations and hosts online workshops on "Web3" topics. He is driven and actively contributes to the blockchain community.'
	},
	{
		name: 'vibesIRL',
		image: '/img/projects/vibesIRL.jpg',
		sector: 'Sub-DAO',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/vibesIRL'
		},
		desc: 'Vibe with frens IRL all over the world. Get Devs Dancing!'
	},
	{
		name: 'Web3 Afrika',
		image: '/img/projects/web3afrika.jpg',
		sector: 'Project',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/web3afrika',
			site: 'https://www.web3afrika.com/',
			github: 'https://github.com/Web3Afrika',
			youtube: 'https://www.youtube.com/@web3afrika',
			medium: 'https://blog.web3afrika.com/',
			discord: 'https://discord.com/invite/YMJ49PDTym'
		},
		desc: 'Web3 Afrika exists to accelerate the education and opportunities of a new wave of builders and bring diversity into web3 conversations globally by fostering communities in Africa, Africans in diaspora, and persons of African descent from across the world.'
	},
	{
		name: 'D_D Academy',
		image: '/img/projects/ddAcademy.jpg',
		sector: 'Sub-DAO',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/devdao_academy',
			site: 'https://academy.developerdao.com/',
			github: 'https://github.com/developer-dao/academy'
		},
		desc: 'D_D Academy is on a mission to educate coders to the exciting possibilities of building web3 Open Source.'
	},
	{
		name: 'WBW3',
		image: '/img/projects/wbw3.jpg',
		sector: 'Project',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/womenbuildweb3'
		},
		desc: 'BUIDL Accelerator. Education, opportunities and funding to cultivate top engineering talent. Membership opening soon.'
	},
	{
		name: 'Raisin Labs',
		image: '/img/projects/raisinLabs.jpg',
		sector: 'Project',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/Raisin_Labs',
			github: 'https://github.com/crypdoughdoteth/Raisin-CLI'
		},
		desc: 'Building the protocols that shape the world of DeFi, starting with Raisin, the modular fundraising stack.'
	},
	{
		name: 'Woop Pay',
		image: '/img/projects/woopPay.jpg',
		sector: 'Project',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/woop_pay',
			site: 'https://www.wooppay.xyz/'
		},
		desc: 'Cryptocurrency payment requests.'
	},
	{
		name: 'kempsterrrr',
		image: '/img/projects/kempsterrrr.jpg',
		sector: 'Celebrity',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/kempsterrrr'
		},
		desc: 'Growth Ops Lead & Foundation Director of Developer DAO'
	},
	{
		name: 'TalentLayer',
		image: '/img/projects/talentLayer.jpg',
		sector: 'Project',
		rating: 'Middle',
		socials: {
			twitter: 'https://twitter.com/TalentLayer',
			site: 'https://www.talentlayer.org/',
			gitbook: 'https://docs.talentlayer.org/',
			medium: 'https://medium.com/talentlayer'
		},
		desc: 'TalentLayer is infrastructure for open service markets; backend tooling for building interoperable marketplaces that leverage an on-chain liquidity pool of users and services.'
	},
	{
		name: 'P3RKS',
		image: '/img/projects/p3rks.jpg',
		sector: 'Project',
		rating: 'Low',
		socials: {
			twitter: 'https://twitter.com/getP3RKS',
			site: 'https://p3rks.xyz/'
		},
		desc: 'Rewards for DAO Contributors '
	},
	{
		name: 'Patrick Skinner',
		image: '/img/projects/pSkinnerTech.jpg',
		sector: 'Celebrity',
		rating: 'High',
		socials: {
			twitter: 'https://twitter.com/PSkinnerTech',
			site: 'https://patrickskinner.tech/',
			github: 'https://github.com/PSkinnerTech'
		},
		desc: 'Software Engineer, web3 developer, technical writer. DevRel at Developer DAO'
	}
]
