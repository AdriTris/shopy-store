import { createContext, useState, useEffect } from "react";
import { data } from "autoprefixer";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  //shopping cart contador
  const [count, setCount] = useState(0);

  //product detail open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //product detail mostrar producto a detalle
  const [productShow, setProductShow] = useState({});

  //shopping card agregar productos al carrito
  const [cartProducts, setCartProducts] = useState([]);

  //shopping card mis ordenes
  const [order, setOrder] = useState([]);

  //my order open/close
  const [isMyOrderOpen, setIsMyOrderOpen] = useState(false);
  const openMyOrder = () => {
    setIsMyOrderOpen(true);
  };
  const closeMyOrder = () => setIsMyOrderOpen(false);

  //get products
  const [products, setProducts] = useState(null);

  //get filtered products
  const [filteredProducts, setFilteredProducts] = useState(null);

  //get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  //get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function filteredProductsByTitle(products, searchByTitle) {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  }

  function filteredProductsByCategory(products, searchByCategory) {
    return products?.filter((product) =>
      product.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  }

  function filterBy(searchType, products, searchByTitle, searchByCategory) {
    if (searchType === "BY_TITLE") {
      return filteredProductsByTitle(products, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory).filter(
        (product) =>
          product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return products;
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredProducts(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          products,
          searchByTitle,
          searchByCategory
        )
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredProducts(
        filterBy("BY_TITLE", products, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && searchByCategory) {
      setFilteredProducts(
        filterBy("BY_CATEGORY", products, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && !searchByCategory) {
      setFilteredProducts(
        filterBy(null, products, searchByTitle, searchByCategory)
      );
    }
  }, [products, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productShow,
        setProductShow,
        cartProducts,
        setCartProducts,
        isMyOrderOpen,
        openMyOrder,
        closeMyOrder,
        order,
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        setFilteredProducts,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
