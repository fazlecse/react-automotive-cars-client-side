import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../shared/ProductsCard";

const Products = () => {
  const products = useLoaderData();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-bgColor py-16">
      <div className="container p-3 sm:p-2 mx-auto">
        <div>
         
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product._id}>
                <img
                  className="h-[300px] md:h-[600px] object-cover w-full rounded-lg"
                  src={product.imgUrl}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-16">
        {products.map((product, index) => (
          <ProductsCard key={index} product={product}></ProductsCard>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default Products;
