import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyData = ({ toy }) => {
  const { toy_name, seller_name, Sub_category, toy_price, quantity } =
    toy || {};
  return (
    <div className="card bg-gray-200 shadow-xl transition duration-500 transform ease-in-out hover:translate-x-4 hover:shadow-2xl">
      <div className="card-body">
        <h2 className="card-title font-swash text-3xl">
          {toy_name}
          <div className="badge badge-secondary right-0">{Sub_category}</div>
        </h2>
        <p className="text-[#a56f7c]  text-4xl my-2 ">{seller_name}</p>
        <div className="flex justify-between items-center">
          <p className="text-black text-xl font-semibold">
            Price: <span className="text-[#a56f7c]"> {toy_price}</span>{" "}
          </p>
          <p className="text-black text-xl font-semibold">
            Quantity: <span className="text-[#a56f7c]"> {quantity}</span>{" "}
          </p>
        </div>
        <div className="card-actions justify-start my-3">
          <Link to="/login">
            <button className="btn bg-[#A4747F] border-0   hover:bg-[#8CA6A2]">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyData;
