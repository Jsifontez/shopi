import { useState, useEffect } from 'react'

const useFetchProducts = (url) => {
  // Get Products
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setIsLoading(false)
      })
      .catch(err => {
        setIsError(true)
        setIsLoading(false)
        console.log('ERROR: ', err)
      })
  }, [url, isLoading])

  return { products, isLoading, isError }
}

export default useFetchProducts
