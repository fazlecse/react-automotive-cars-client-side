import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const [oldData, setOldData] = useState({});
  const [brands, setBrands] = useState([]);
  const { id } = useParams();
  console.log(id);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setOldData({ ...oldData, [name]: value });
  };

  const getOldData = () => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setOldData(data));
  };

  const getAllBrands = () => {
    fetch(`http://localhost:5000/categoryList`)
      .then((res) => res.json())
      .then((data) => setBrands(data));
  };

  useEffect(() => {
    getOldData();
    getAllBrands();
  }, [id]);

  const handelUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(oldData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        navigate(`/product/${id}`);
        Swal.fire({
          title: "Success!",
          text: "Successfully product Updated.",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="container mx-auto p-3 sm:p-2">
      <form
        onSubmit={handelUpdate}
        className=" max-w-5xl mx-auto p-8 my-10 bg-bgColor rounded-md"
      >
        <h2 className="text-3xl font-bold text-center mb-5">Update Product</h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              onChange={handelChange}
              defaultValue={oldData.name}
              placeholder="Enter Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <select
              onChange={handelChange}
              value={oldData.brandName}
              className="select select-bordered"
              name="brandName"
            >
              {brands.map((brand) => (
                <option key={brand._id} value={brand.brandName}>
                  {brand.brandName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              name="type"
              onChange={handelChange}
              defaultValue={oldData.type}
              placeholder="Enter Type"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              onChange={handelChange}
              defaultValue={oldData.price}
              placeholder="Enter Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <input
              type="text"
              name="shortDescription"
              onChange={handelChange}
              defaultValue={oldData.shortDescription}
              placeholder="Enter Short description"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              defaultValue={oldData.rating}
              type="number"
              name="rating"
              onChange={handelChange}
              placeholder="Enter Rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              defaultValue={oldData.imgUrl}
              type="text"
              name="imgUrl"
              onChange={handelChange}
              placeholder="Enter Iamage URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn w-full mt-5 bg-primary border-primary hover:bg-hoverColor hover:border-primary text-white"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
