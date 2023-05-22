import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProviders";

const CategoryData = ({ subcat }) => {
  const { user } = useContext(AuthContext);
  const { _id, photo, toy_name, toy_rating, toy_price } = subcat;
  const dhdh = () => {
    if (!user) {
      alert("You have to log in first to view details");
    }
  };
  return (
    <div className="card bg-gray-200 ">
      <figure className="relative">
        <img
          src={photo}
          alt={toy_name}
          className=" h-72 w-full  img_hover rounded-lg"
        />
      </figure>

      <div className=" absolute top-3 right-4">
        <Link to={`/toys/${_id}`}>
          <button
            className="text-white px-4 py-2 rounded-lg bg-[#A4747F] border-0  text-sm  hover:bg-[#8CA6A2]"
            onClick={dhdh}
          >
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
