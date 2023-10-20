import aboutImg from "../assets/about.jpg";
import { FaCircleCheck } from "react-icons/fa6";
const About = () => {
  return (
    <div className="dark:bg-[#1E293B]">
      <div className="container mx-auto p-3 sm:p-2 ">
      
      <div className="dark:text-white flex items-center flex-col sm:flex-row gap-8 py-16">
        <div className="sm:w-1/2">
          <img className="rounded-xl" src={aboutImg} alt="" />
        </div>
        <div className="sm:w-1/2 space-y-5">
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="text-lg">
            How the adventure ended will be seen anon. Aouda was anxious, though
            she said nothing.
          </p>
          <p className="text-lg">
            As for Passepartout, he thought Mr. Fogg’s manoeuvre simply
            glorious. The captain had said “between eleven and twelve knots,”
            and the Henrietta confirmed his prediction. How the adventure ended
            will be seen anon. Aouda was anxious, though she said nothing.
          </p>
          <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <span className="text-primary">
              <FaCircleCheck></FaCircleCheck>
            </span>
            <span>Quality Cars at Guaranteed Prices</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-primary">
              <FaCircleCheck></FaCircleCheck>
            </span>
            <span>Quality Cars at Guaranteed Prices</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-primary">
              <FaCircleCheck></FaCircleCheck>
            </span>
            <span>Quality Cars at Guaranteed Prices</span>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    
  );
};

export default About;
