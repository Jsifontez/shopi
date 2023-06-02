import { useState, useEffect, useContext } from 'react'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../context'

function Home () {
  const [products, setProducts] = useState(null)
  const { isProductDetailOpen } = useContext(ShoppingCartContext)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <main>
      <h1>Home</h1>

      <section className='grid gap-5 grid-cols-4 w-full max-w-screen-lg'>
        {products?.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </section>

      {isProductDetailOpen &&
        <ProductDetail />
      }
    </main>
  )
}

export default Home
