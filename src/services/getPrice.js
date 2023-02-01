import { env } from 'next.config'

export default async function getPrice() {
	try {
		const response = await fetch(process.env.URL)
		return await response.json()
	} catch (er) {}
}
