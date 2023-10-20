import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setDataLocalStorage } from "../utilities/LocalStorage";

const ProductDetails = () => {
    const { id } = useParams();
    const [productData, setProductData]= useState({});
  const getProductData = () => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  };
  useEffect(() => {
    getProductData();
  }, [id]);



  const handelAddToCart  = () => {
    setDataLocalStorage(productData)
  }
 
  return (
    <div className="bg-bgColor">
      <div className="container p-3 sm:p-2 mx-auto ">
        <img src={productData.imgUrl} alt="" />
        <h2 className="text-3xl font-bold">{productData.name}</h2>
        <button onClick={handelAddToCart} className="btn w-full mt-5 bg-primary border-primary hover:bg-hoverColor hover:border-primary text-white">Add Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
