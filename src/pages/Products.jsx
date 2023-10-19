import { useLoaderData } from "react-router-dom";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h2>this is produtc</h2>
    </div>
  );
};

export default Products;
