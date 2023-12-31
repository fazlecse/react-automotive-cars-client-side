import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Rating from "react-rating";
import starRed from "../assets/star-red.png";
import starGrey from "../assets/star-grey.png";

const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [addCartData, setAddCardData] = useState({});
  delete addCartData._id;
  // console.log(addCartData);



  const getProductData = () => {
    fetch(
      `https://react-automotive-server-assignment-ten.vercel.app/product/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setAddCardData(data);
      });
  };
  useEffect(() => {
    getProductData();
  }, [id]);
  // console.log(productData);
  const handelAddToCart = () => {
    fetch(
      "https://react-automotive-server-assignment-ten.vercel.app/productData",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully product Data added.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="bg-bgColor py-16">
      <div className="container p-3 sm:p-2 mx-auto bg-white rounded-2xl">
        <div className="p-2 sm:p-5 ">
          <img
            className="w-full max-h-[600px] object-cover rounded-xl"
            src={productData.imgUrl}
            alt=""
          />

          <div className="space-y-3 mt-5">
            <h2 className="text-3xl font-bold">Name: {productData.name}</h2>
            <p className="text-2xl">Brand Name: {productData.brandName}</p>
            <p className="text-xl">Price: {productData.price}</p>
            <p className="text-xl">Type: {productData.type}</p>
            <Rating
              placeholderRating={productData.rating}
              readonly
              emptySymbol={<img src={starGrey} className="icon" />}
              placeholderSymbol={<img src={starRed} className="icon" />}
            />
            <p className="text-xl">
              Description: {productData.shortDescription}
            </p>
          </div>
          <button
            onClick={handelAddToCart}
            className="btn w-full mt-7 bg-primary border-primary hover:bg-hoverColor hover:border-primary text-white"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
