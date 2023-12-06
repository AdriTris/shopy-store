import { useContext } from "react"; //usamos useEffect para la API
import CardProduct from "../../components/Cards/CardProduct";
import ProductDetail from "../../components/productDetail/ProductDetail";
import Skeleton from "../../components/Skeleton/Skeleton";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Home() {
  const {
    products,
    setProducts,
    searchByTitle,
    setSearchByTitle,
    filteredProducts,
    setFilteredProducts,
    searchByCategory,
    setSearchByCategory,
    loading,
  } = useContext(ShoppingCartContext);

  function renderView() {
    if (loading) {
      // Muestra el esqueleto mientras se cargan los productos
      return Array.from({ length: 12 }, (_, index) => <Skeleton key={index} />);
    }

    if (filteredProducts?.length > 0) {
      return filteredProducts?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ));
    } else {
      return <p>No Results Found</p>;
    }
  }

  return (
    <section>
      <h1 className="text-2xl text-center font-bold">Exclusive Products</h1>
      <div className="w-full flex justify-center items-center">
        <input
          type="text"
          placeholder="Search a Product"
          className="rounded-lg p-4 shadow-md w-80 mt-4 focus:outline-none border-2 border-gray-500"
          onChange={(e) => {
            setSearchByTitle(e.target.value);
          }}
        />
      </div>
      <div className="w-full grid grid-cols-4 gap-5 mt-4">{renderView()}</div>
      <ProductDetail />
    </section>
  );
}

export default Home;
