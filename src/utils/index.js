/**
 * Esta funcion calcula el precio total de una nueva orden
 * @param {Array} products CardProducts: Array of Object
 * @returns {Number} Total price
 */

export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
