import getPrice from '@/services/getPrice'

export default function Home({ price }) {
	let eth = price.ethereum.usd
	let gods = price['gods-unchained'].usd
	////---
	return (
		<>
			<div>price eth: {eth}</div>
			<div>price gods:{gods}</div>
		</>
	)
}

export async function getStaticProps() {
	try {
		const price = await getPrice()
		return {
			props: { price },
			revalidate: 3,
		}
	} catch (er) {}
}
