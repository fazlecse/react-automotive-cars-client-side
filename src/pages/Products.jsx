import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "../shared/ProductsCard";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    // ],
  };
  return (
    <div className="bg-bgColor py-16">
      <div className="container p-3 sm:p-2 mx-auto">
        <div>
         
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product._id}>
                <img
                  className="h-[300px] md:h-[500px] object-cover w-full rounded-lg"
                  src={product.imgUrl}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-16">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default Products;
