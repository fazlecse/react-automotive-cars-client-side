const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const imgUrl = form.imgUrl.value;

    const newProduct = {
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
      imgUrl,
    };
    console.log(newProduct);
  };

  return (
    <div className="container mx-auto p-3 sm:p-2">
      <form
        onSubmit={handleAddProduct}
        className=" max-w-5xl mx-auto p-8 my-10 bg-bgColor rounded-md"
      >
        <h2 className="text-3xl font-bold text-center mb-5">Add New Product</h2>

        <div className="flex gap-10">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              name="brandName"
              placeholder="Enter Brand Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="flex gap-10 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              name="type"
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
              placeholder="Enter Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-10 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <input
              type="text"
              name="shortDescription"
              placeholder="Enter Short description"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Enter Rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-10 mt-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="imgUrl"
              placeholder="Enter Iamage URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn w-full mt-5 bg-primary border-primary hover:bg-hoverColor hover:border-primary text-white"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
