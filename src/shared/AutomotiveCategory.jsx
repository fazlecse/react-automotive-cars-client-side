import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AutomotiveCategory = ({ loadCategories }) => {
  const { brandName, imgUrl } = loadCategories;
  return (
    <div>
      <Link to={`/products/${brandName}`}>
        <div className="p-3 bg-white dark:bg-[#1E293B] rounded-md h-full">
          <img className="h-[250px] w-full" src={imgUrl} alt="" />
          <h2 className="text-2xl font-bold text-center mt-4 dark:text-white"> {brandName}</h2>
        </div>
      </Link>
    </div>
  );
};

AutomotiveCategory.propTypes = {
  loadCategories: PropTypes.object,
};

export default AutomotiveCategory;
