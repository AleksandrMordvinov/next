import React, { useEffect, useState } from 'react'

export const useGetCountries = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos')
				.then(res => res.json())
				.catch(err => console.log(err))

			setData(response)
		}
		fetchData()
	}, [])
	return { data }
}

// import React from 'react'
// import { useEffect, useState } from 'react'

// export function useFetch(url) {
// 	const [data, setData] = useState(null)
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [error, setError] = useState('null')

// 	useEffect(() => {
// 		try {
// 			const fetchData = async () => {
// 				const res = await fetch(url)
// 				const data = await res.json()
// 				setData(data)
// 			}
// 			fetchData()
// 		} catch (error) {
// 			setError(error)
// 		} finally {
// 			setIsLoading(true)
// 		}
// 	}, [])

// 	return { data, isLoading, error }
// }
