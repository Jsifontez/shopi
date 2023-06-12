/**
 * This function calculates the total price of a new order
 * @param {Array} products cartProducts: Array of objects
 * @returns {Number} Total price
 */
export const totalPice = (products) => (
  products.reduce((sum, prod) => sum + prod.price * prod.quantity, 0)
)
