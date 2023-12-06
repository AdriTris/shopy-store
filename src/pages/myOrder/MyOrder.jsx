import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import CardOrder from "../../components/Cards/CardOrder";

function MyOrder() {
  const { order, cartProducts } = useContext(ShoppingCartContext);
  const pathSplitted = window.location.pathname.split("/");
  let orderId = pathSplitted[pathSplitted.length - 1];

  if (orderId === "last") {
    orderId = order?.length - 1;
  }
  const latestOrderProducts = order?.[orderId]?.products || [];
  return (
    <>
      <div className="w-[450px] flex relative justify-center items-center my-2">
        <Link to={"/my-orders"}>
          <button className="absolute left-0 top-0.5 w-8 h-8 text-gray-900">
            <HiChevronLeft className=" w-8 h-8" />
          </button>
        </Link>
        <h1 className="text-2xl text-center font-bold">My Order</h1>
      </div>

      <div className="flex flex-col w-[450px]">
        {latestOrderProducts.map((product) => {
          return (
            <CardOrder
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          );
        })}
        <p className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-gray-900">
            ${order[orderId].total}
          </span>
        </p>
      </div>
    </>
  );
}

export default MyOrder;
