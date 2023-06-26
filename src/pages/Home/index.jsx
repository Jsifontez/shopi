import { useContext, useState } from 'react'
import useFetchProducts from '../../utils/useFetchProducts'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../context'

function Home () {
  const { isProductDetailOpen } = useContext(ShoppingCartContext)
  const { products } = useFetchProducts('https://api.escuelajs.co/api/v1/products')

  const [filterInput, setFilterInput] = useState('')
  const filteredProducts = products?.filter(product => {
    const title = product.title.toLowerCase()
    const inputText = filterInput.toLowerCase()

    return title.includes(inputText)
  })

  return (
    <>
      <header className='flex items-center justify-center flex-col relative w-80 mb-4'>
        <h1 className='font-medium text-xl mb-4'>Exclusive Products</h1>
        <input
          type='text'
          placeholder='Search a product'
          value={filterInput}
          onChange={(ev) => setFilterInput(ev.target.value)}
          className='w-full rounded-lg border border-black p-4'
        />
      </header>

      <section className='grid gap-5 grid-cols-4 w-full max-w-screen-lg'>
        {filteredProducts.length > 0
          ? (
              filteredProducts?.map(product => (
                <Card key={product.id} product={product} />
              ))
            )
          : (
            <div className='col-span-4'>
              <p className='text-lg mb-4'>
                Sorry, We did not find any products.
              </p>
              <p className='text-lg'>Try Another Search</p>
            </div>
            )
        }
      </section>

      {isProductDetailOpen &&
        <ProductDetail />
      }
    </>
  )
}

export default Home
