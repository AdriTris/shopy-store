import { useContext } from "react";
import { HiPlusSm, HiOutlineCheck } from "react-icons/hi";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function CardProduct({ product }) {
  const {
    count,
    setCount,
    openProductDetail,
    setProductShow,
    cartProducts,
    setCartProducts,
    openMyOrder,
  } = useContext(ShoppingCartContext);

  function showProduct(productDetail) {
    openProductDetail();
    setProductShow(productDetail);
  }

  function addProductsToCart(productData) {
    openMyOrder();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
  }

  function renderIcon(id) {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <button className="absolute top-0 right-0 m-2 flex justify-center items-center bg-red-400 w-6 h-6 rounded-full">
          <HiOutlineCheck />
        </button>
      );
    } else {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Evita que el evento se propague hacia el div principal
            addProductsToCart(product);
          }}
          className="absolute top-0 right-0 m-2 flex justify-center items-center bg-gray-300 w-6 h-6 rounded-full"
        >
          <HiPlusSm />
        </button>
      );
    }
  }

  return (
    <div
      className="bg-gray-300 w-60 h-72 cursor-pointer shadow-md rounded-lg"
      onClick={() => showProduct(product)}
    >
      <figure className="relative w-full h-4/6 bg-white">
        <span className="absolute bg-white/25 px-3 py-0.5 rounded-md bottom-0 m-2 text-xs">
          {product.category}
        </span>
        <img
          className="w-full h-full object-contain rounded-t-lg"
          src={product.image}
          alt={product.title}
        />
        {renderIcon(product.id)}
      </figure>
      <p className="h-2/6 flex justify-between items-center gap-1 mx-2">
        <span className="text-gray-700 font-light text-xs ">
          {product.title}
        </span>
        <span className="text-gray-700 font-semibold ">${product.price}</span>
      </p>
    </div>
  );
}

export default CardProduct;
