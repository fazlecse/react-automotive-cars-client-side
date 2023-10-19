import { useLoaderData } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Testimonial from "./Testimonial";
import AutomotiveCategory from "./AutomotiveCategory";
// import { useState } from "react";

const Home = () => {
  const loadCategories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="bg-bgColor py-16">
        <div className="container p-3 sm:p-2 mx-auto ">
          <h2 className="text-5xl font-bold text-center mb-10">Brands Category</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {loadCategories.map((category) => (
              <AutomotiveCategory
                key={category._id}
                loadCategories={category}
              ></AutomotiveCategory>
            ))}
          </div>
        </div>
      </div>
      <About></About>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
