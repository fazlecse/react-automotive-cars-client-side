import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tes1 from "../assets/testimonial1.jpg";
import tes2 from "../assets/testimonial2.jpg";
import tes3 from "../assets/testimonial3.jpg";
import tes4 from "../assets/testimonial4.jpg";
import tes5 from "../assets/testimonial5.jpg";
import tes6 from "../assets/testimonial6.jpg";
import tes7 from "../assets/testimonial7.jpg";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-bgColor">
      <div className="container mx-auto p-3 sm:p-2 ">
        <div className="py-16">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-3">Testimonials</h2>
            <p className="text-lg font-medium max-w-lg mx-auto">
              Visit one of the largest used car dealerships in the New York.
              Visit us today.
            </p>
          </div>
          <div>
            <div>
              <Slider {...settings}>
                <div className="p-5">
                  <div className="p-5 bg-white rounded-md relative space-y-2">
                    <div className="rounded-sm absolute -top-5 right-5  bg-white p-[4px]">
                      <img className="w-[60px] h-[60px] " src={tes1} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold">Willard Donovan</h3>
                    <p>Dublin, Ireland</p>

                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto eligendi iste ex culpa. Quam, quasi!
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="p-5 bg-white rounded-md relative space-y-2">
                    <div className="rounded-sm absolute -top-5 right-5  bg-white p-[4px]">
                      <img className="w-[60px] h-[60px] " src={tes2} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold">Willard Donovan</h3>
                    <p>Dublin, Ireland</p>

                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto eligendi iste ex culpa. Quam, quasi!
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="p-5 bg-white rounded-md relative space-y-2">
                    <div className="rounded-sm absolute -top-5 right-5  bg-white p-[4px]">
                      <img className="w-[60px] h-[60px] " src={tes3} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold">Willard Donovan</h3>
                    <p>Dublin, Ireland</p>

                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto eligendi iste ex culpa. Quam, quasi!
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="p-5 bg-white rounded-md relative space-y-2">
                    <div className="rounded-sm absolute -top-5 right-5  bg-white p-[4px]">
                      <img className="w-[60px] h-[60px] " src={tes4} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold">Willard Donovan</h3>
                    <p>Dublin, Ireland</p>

                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto eligendi iste ex culpa. Quam, quasi!
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="p-5 bg-white rounded-md relative space-y-2">
                    <div className="rounded-sm absolute -top-5 right-5  bg-white p-[4px]">
                      <img className="w-[60px] h-[60px] " src={tes5} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold">Willard Donovan</h3>
                    <p>Dublin, Ireland</p>

                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto eligendi iste ex culpa. Quam, quasi!
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="p-5 bg-white rounded-md relative space-y-2">
                    <div className="rounded-sm absolute -top-5 right-5  bg-white p-[4px]">
                      <img className="w-[60px] h-[60px] " src={tes6} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold">Willard Donovan</h3>
                    <p>Dublin, Ireland</p>

                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto eligendi iste ex culpa. Quam, quasi!
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="p-5 bg-white rounded-md relative space-y-2">
                    <div className="rounded-sm absolute -top-5 right-5  bg-white p-[4px]">
                      <img className="w-[60px] h-[60px] " src={tes7} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold">Willard Donovan</h3>
                    <p>Dublin, Ireland</p>

                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Architecto eligendi iste ex culpa. Quam, quasi!
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
