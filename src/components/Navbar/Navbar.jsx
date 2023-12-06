import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Navbar() {
  const activeStyle = "underline underline-offset-4 text-red-400";

  const handleActive = ({ isActive }) => (isActive ? activeStyle : undefined);

  const { count, searchByCategory, setSearchByCategory } =
    useContext(ShoppingCartContext);

  return (
    <nav className="w-full h-10 flex justify-between items-center px-4 fixed z-10 text-sm font-light bg-gray-700 text-white top-0">
      <ul className="flex items-center gap-4 ">
        <li className="font-semibold text-lg">
          <NavLink to="/" onClick={() => setSearchByCategory()}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => setSearchByCategory()}
            className={handleActive}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women-clothing"
            onClick={() => setSearchByCategory("women's clothing")}
            className={handleActive}
          >
            Women's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men-clothing"
            onClick={() => setSearchByCategory("men's clothing")}
            className={handleActive}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => setSearchByCategory("electronics")}
            className={handleActive}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => setSearchByCategory("jewelery")}
            className={handleActive}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>

      <ul className="flex gap-4">
        <li className="text-gray-300">user@example.com</li>
        <li>
          <NavLink to="/my-orders" className={handleActive}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-acount" className={handleActive}>
            My Acount
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={handleActive}>
            Sign In
          </NavLink>
        </li>
        <li className="flex">
          <HiShoppingCart className="w-5 h-5" /> {count}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
