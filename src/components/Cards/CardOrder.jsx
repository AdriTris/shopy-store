import { useContext } from "react";
import { HiTrash, HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function CardOrder({ id, title, imageUrl, price, handleDelete }) {
  const { count, setCount } = useContext(ShoppingCartContext);
  let renderDelete;
  if (handleDelete) {
    renderDelete = (
      <button
        onClick={() => {
          handleDelete(id);
          setCount(count - 1);
        }}
        className="w-6 h-6 rounded-full shadow-sm shadow-gray-900 bg-gray-200 flex justify-center items-center"
      >
        <HiTrash />
      </button>
    );
  }

  return (
    <div className="w-full h-28 flex gap-2 justify-around items-center shadow-md p-2 rounded-md mb-2">
      <figure className="w-3/12 h-24 bg-white rounded-md">
        <img
          className="w-full h-full object-contain rounded-md"
          src={imageUrl}
          alt={title}
        />
      </figure>
      <p className="w-7/12 flex flex-col gap-2 ">
        <span className="text-sm font-light text-gray-900">{title}</span>
        <span className="text-sm font-medium text-gray-900">${price}</span>
      </p>
      {renderDelete}
    </div>
  );
}

export default CardOrder;
