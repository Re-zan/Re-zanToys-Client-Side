import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const CategoryData = ({ subcat }) => {
  const { photo, toy_name, toy_rating, toy_price } = subcat;
  return (
    <div className="card bg-gray-200 ">
      <figure className="relative">
        <img src={photo} alt={toy_name} className=" h-64 w-full img_hover " />
      </figure>
      <div className=" absolute top-5 right-4">
        <Link to="/login">
          <button className="btn bg-[#A4747F] border-0   hover:bg-[#8CA6A2]">
            Details
          </button>
        </Link>
      </div>
      <div className="card-body">
        <h2 className="card-title text-[#a56f7c] font-swash text-3xl  h-20">
          {toy_name}
        </h2>
        <div className="flex items-center my-8 text-lg">
          <p className="text-gray-800 font-semibold">Price: $ {toy_price}</p>
          <Rating
            style={{ maxWidth: 100 }}
            readOnly
            orientation="horizantal"
            value={toy_rating}
          />
          <p className="text-gray-800 font-semibold ml-2 mt-1"> {toy_rating}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryData;
