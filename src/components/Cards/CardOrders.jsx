import { useContext } from "react";
import { HiOutlineCalendar, HiShoppingCart } from "react-icons/hi";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function CardOrders({ totalPrice, totalProducts, date }) {
  const { count, setCount } = useContext(ShoppingCartContext);

  return (
    <div className="w-full h-24 gap-2 flex justify-between items-center shadow-md p-4 rounded-md mb-2 border-b-2 border-r-2 border-gray-800 cursor-pointer hover:bg-gray-300">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <HiOutlineCalendar className="w-6 h-6 text-gray-800" />
            <span className="text-md font-semibold text-gray-900">{date}</span>
          </div>
          <div className="flex items-center gap-2 ">
            <HiShoppingCart className="w-6 h-6 text-gray-800" />
            <span className="text-md font-semibold text-gray-900">
              {totalProducts} articles
            </span>
          </div>
        </div>
        <span className="text-2xl font-bold text-gray-900">${totalPrice}</span>
      </div>
    </div>
  );
}

export default CardOrders;
