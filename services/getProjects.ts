//export const SITE_URL = 'http://localhost:3000'
export const SITE_URL = 'https://developer-dao-ecosystem.vercel.app'

export const getProjects = async (size: string) => {
	const response = await fetch(`${SITE_URL}/api/projects?s=${size}`, {next: {revalidate: 3600}})
	if (!response.ok) {
		throw new Error('Unable to fetch projects.')
	}

	return response.json()
}

export const getProjectsBySearch = async (name: string) => {
	const response = await fetch(`${SITE_URL}/api/projects?q=${name}`, {next: {revalidate: 3600}})
	if (!response.ok) {
		throw new Error('Unable to fetch current project.')
	}

	return response.json()
}

export const getProjectsByFilter = async (value: string) => {
	const response = await fetch(`${SITE_URL}/api/projects?v=${value}`, {next: {revalidate: 3600}})
	if (!response.ok) {
		throw new Error('Unable to fetch current filter.')
	}

	return response.json()
}
