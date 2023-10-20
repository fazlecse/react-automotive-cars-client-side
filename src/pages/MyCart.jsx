import CartComponents from "../shared/CartComponents";
import { getFromLocalStorage } from "../utilities/LocalStorage";

const MyCart = () => {
  const cartsData = getFromLocalStorage();

  return (
    <div className="bg-bgColor py-16">
      <div className="container p-3 sm:p-2 mx-auto ">
        <h2 className="text-5xl font-bold text-center mb-10">
          Cart Items
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cartsData.map((cart, index) => (
            <CartComponents key={index} cart={cart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
