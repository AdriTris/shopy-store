import { useContext } from "react"; //usamos useEffect para la API
import CardProduct from "../../components/Cards/CardProduct";
import ProductDetail from "../../components/productDetail/ProductDetail";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { data } from "autoprefixer";

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
  } = useContext(ShoppingCartContext);

  function renderView() {
    if (filteredProducts?.length > 0) {
      return filteredProducts?.map((product) => (
        <CardProduct key={product.id} product={product} />
      ));
    } else {
      return <p>No Results Found</p>;
    }

    // if (searchByTitle?.length >= 0) {
    //   if (filteredProducts?.length >= 0) {
    //     return filteredProducts?.map((product) => (
    //       <CardProduct key={product.id} product={product} />
    //     ));
    //   } else {
    //     <p>Not found articles</p>;
    //   }
    // } else {
    //   return products?.map((product) => (
    //     <CardProduct key={product.id} product={product} />
    //   ));
    // }
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
      <div className="grid grid-cols-4 gap-5 mt-4">{renderView()}</div>
      <ProductDetail />
    </section>
  );
}

export default Home;
