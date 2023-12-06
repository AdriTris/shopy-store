import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import CardOrder from "../Cards/CardOrder";
import { totalPrice } from "../../utils/index";

function CheckoutSideMenu() {
  const {
    isMyOrderOpen,
    closeMyOrder,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setCount,
    searchByTitle,
    setSearchByTitle,
  } = useContext(ShoppingCartContext);

  function handleDelete(id) {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  }

  function handleCheckout() {
    const date = new Date();
    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      total: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setCount(0);
    closeMyOrder();
    setSearchByTitle(null);
  }
  return (
    <aside
      className={`${
        isMyOrderOpen ? "flex" : "hidden"
      } w-[450px] h-[calc(100vh-40px)] flex-col gap-3 fixed bg-gray-400 right-0 border border-gray-500 rounded-l-lg top-10`}
    >
      <div className="flex justify-between items-center p-2">
        <h2 className="text-xl font-medium">My Order</h2>
        <button
          className="w-6 h-6 bg-white rounded-full flex justify-center items-center"
          onClick={() => closeMyOrder()}
        >
          <HiOutlineX />
        </button>
      </div>
      <div className="px-2 overflow-y-auto flex-1">
        {cartProducts.map((product) => {
          return (
            <CardOrder
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="px-2">
        <p className="flex justify-between items-center">
          <span className="text-xl text-gray-900 font-semibold">Total: </span>
          <span className="text-2xl text-gray-800 font-semibold">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full h-10 bg-gray-700 text-white text-lg font-semibold hover:bg-red-500 rounded-lg my-2"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
