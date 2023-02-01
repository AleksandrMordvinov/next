let url =
	'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=ethereum%2Cgods-unchained'

export default async function getPrice() {
	const response = await fetch(url)
	return await response.json()
}
