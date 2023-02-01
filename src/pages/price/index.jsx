import { getPrice } from '@/services/getPrice'

const price = ({ price }) => {
	let eth = price.ethereum.usd
	let gods = price['gods-unchained'].usd

	return (
		<>
			<div>price eth: {eth}</div>
			<div>price gods:{gods}</div>
		</>
	)
}

export async function getStaticProps() {
	const price = await getPrice()
	return {
		props: { price },
		revalidate: 3,
	}
}

export default price
