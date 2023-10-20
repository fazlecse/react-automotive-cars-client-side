import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import starRed from "../assets/star-red.png";
import starGrey from "../assets/star-grey.png";

const ProductsCard = ({ product }) => {
  const {
    _id,
    name,
    type,
    price,
    shortDescription,
    rating,
    imgUrl,
    brandName,
  } = product;
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/update-product/${_id}`);
  };
  const handleDetails = () => {
    navigate(`/product/${_id}`);
  };
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

        <button
          onClick={handleUpdate}
          className="btn w-full mt-5 bg-primary border-primary hover:bg-hoverColor hover:border-primary text-white"
        >
          Update
        </button>

        <button
          onClick={handleDetails}
          className="btn w-full mt-5 bg-black border-black hover:bg-black hover:border-black text-white"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
