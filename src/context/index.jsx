import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Shopping Cart · Show detail
  const [productToShow, setProdcutToShow] = useState({})

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  const addProductToCart = (product) => {
    // before set cart Products we need to check if the products
    // is already added. If is in cart, we add 1 to quantity
    // if not, we add the products to cart with quantity of 1
    const productCartIndex = cartProducts.findIndex(
      cartProduct => cartProduct.id === product.id
    )

    if (productCartIndex >= 0) {
      const newCart = [...cartProducts]
      newCart[productCartIndex].quantity++
      setCartProducts([...newCart])
    } else {
      setCartProducts(products => [...products, { ...product, quantity: 1 }])
    }
  }

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProdcutToShow,
      cartProducts,
      setCartProducts,
      addProductToCart,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export { ShoppingCartContext, ShoppingCartProvider }
