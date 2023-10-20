import Rating from "react-rating";
import starRed from "../assets/star-red.png";
import starGrey from "../assets/star-grey.png";

const CartComponents = ({ cart }) => {
  const { name, imgUrl, brandName, price, type,rating } = cart;
  return (
    <div>
      <div className="p-3 bg-white rounded-md h-full">
        <img className="h-[250px] w-full" src={imgUrl} alt="" />
        <h2 className="text-2xl font-bold text-center mt-4"> {name}</h2>
        <div className="text-xl space-y-3 mt-3">
          <div className="flex gap-2 justify-between">
            <p>{brandName}</p>
            <p>{price}</p>
          </div>
          <div className="flex gap-2 justify-between">
            <p>{type}</p>
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<img src={starGrey} className="icon" />}
              placeholderSymbol={<img src={starRed} className="icon" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
