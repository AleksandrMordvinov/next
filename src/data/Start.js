import { useGetCountries } from '../hooks/useFetch'

export default function Start() {
	const { data } = useGetCountries()
	console.log(data)
	return (
		<div>
			<h1>Countries</h1>
		</div>
	)
}

// import React, { useEffect, useState } from 'react'
// import { useFetch } from '../hooks/useFetch'
// import { GetPrice } from './GetPrice'

// export const Start = () => {
// 	const [startItem, setStartItem] = useState(0)
// 	//const [data, setData] = useState(undefined)
// 	// const { data, error, isLoading } = useFetch(url)
// 	//console.log(data)

// 	function letsGo() {
// 		//console.log('123')
// 	}

// 	useEffect(() => {
// 		const { data, error, isLoading } = useFetch(url)
// 		console.log(data)
// 		if (startItem > 0) {
// 			letsGo()

// 			//setData(data)
// 		}
// 	}, [startItem])

// 	//console.log(data)
// 	//console.log(error)
// 	//console.log(isLoading)

// 	return (
// 		<div className='container'>
// 			<div className='flex'>
// 				<button
// 					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-[20px]'
// 					onClick={() => setStartItem(prev => prev + 1)}
// 				>
// 					Подготовка к работе
// 				</button>
// 				<button
// 					className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-[20px]'
// 					onClick={() => setStartItem(prev => prev + 1)}
// 				>
// 					Начало работы
// 				</button>
// 				<div className='grid content-center ml-8'>
// 					{/* {data && <div>${data['ethereum'].usd}</div>}
// 					{data && <div>${data['gods-unchained'].usd}</div>} */}
// 					<GetPrice start={startItem} />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
