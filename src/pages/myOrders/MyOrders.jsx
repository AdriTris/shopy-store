import { useContext } from "react";
import { Link } from "react-router-dom";
import CardOrders from "../../components/Cards/CardOrders";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <section>
      <div className="w-[450px] flex relative justify-center items-center my-2">
        <h1 className="text-2xl text-center font-bold">My Orders</h1>
      </div>
      {order.map((orden, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <CardOrders
              totalPrice={orden.total}
              totalProducts={orden.totalProducts}
              date={orden.date}
            />
          </Link>
        );
      })}
    </section>
  );
}

export default MyOrders;
