import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

  const openProductDetail = () => {
    console.log('opening')
    setIsProductDetailOpen(true)
  }
  const closeProductDetail = () => setIsProductDetailOpen(false)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }
