import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function ProductDetail() {
  const { closeProductDetail, isProductDetailOpen, productShow } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-80 h-[calc(100vh-40px)] flex-col fixed bg-gray-400 right-0 border border-gray-500 rounded-l-lg top-10`}
    >
      <div className="flex justify-between items-center p-2">
        <h2 className="text-xl font-medium">Detail</h2>
        <button
          className="w-6 h-6 bg-white rounded-full flex justify-center items-center"
          onClick={() => closeProductDetail()}
        >
          <HiOutlineX />
        </button>
      </div>
      <figure className="w-full h-2/6 rounded-lg bg-white">
        <img
          className="w-full h-full rounded-lg object-contain"
          src={productShow.image}
          alt={productShow.title}
        />
      </figure>
      <p className="flex flex-col gap-2 px-2 mt-2">
        <span className="text-gray-900 font-medium text-2xl">
          ${productShow.price}
        </span>
        <span className="text-gray-900 font-medium text-lg leading-5">
          {productShow.title}
        </span>
        <span className="text-gray-900 font-light text-sm leading-5">
          {productShow.description}
        </span>
      </p>
    </aside>
  );
}

export default ProductDetail;
