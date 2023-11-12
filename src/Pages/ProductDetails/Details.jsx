import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { FaEnvelopeOpen, FaUserAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import CategoryData from "../Home/Shop BY Category/CategoryData";
import { toast } from "react-toastify";

const Details = () => {
  const detail = useLoaderData();
  const {
    _id,
    Sub_category,
    description,
    photo,
    toy_name,
    toy_price,
    toy_rating,
    quantity,
    seller_name,
    seller_email,
  } = detail;

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  //popular data
  const mayLke = toys.filter(
    (data) => data.Sub_category == Sub_category && data._id !== _id
  );
  const handleAddToCart = () => {
    toast(`${toy_name} has been added to the cart`);
  };
  return (
    <div>
      <div className="my_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20 bg-gray-200 rounded-lg">
          <div>
            {" "}
            <img src={photo} alt={toy_name} className="h-full" />
          </div>
          <div className="pr-24 py-16 pl-8 ">
            <div className="lg:flex items-center justify-between ">
              <p className="text-[#a56f7c] flex items-center mb-3">
                <FaUserAlt className="mr-3"></FaUserAlt>{" "}
                <span>{seller_name}</span>{" "}
              </p>
              <p className="text-[#a56f7c] flex items-center mb-3">
                <FaEnvelopeOpen className="mr-3"></FaEnvelopeOpen>
                <span>{seller_email}</span>{" "}
              </p>
            </div>

            <h2 className="card-title text-[#a56f7c] font-swash text-5xl mt-4 ">
              {toy_name}
            </h2>
            <p className="text-gray-800 pt-5 pb-3">{description}</p>
            <div className="lg:flex items-center justify-between ">
              <p className="text-gray-800 font-semibold pt-4 pb-2">
                Price: $ {toy_price}
              </p>

              <p className="text-gray-800 font-semibold pt-4 pb-2">
                Quantity: {quantity}
              </p>
              <div className="flex items-center  ">
                <Rating
                  style={{ maxWidth: 100 }}
                  readOnly
                  orientation="horizantal"
                  value={toy_rating}
                />
                <p className="text-gray-800 font-semibold ml-2">
                  {" "}
                  {toy_rating}
                </p>
              </div>
            </div>
            <button className="btn_style" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>

        <div className="flex justify-between pb-6 border-[#a56f7c] border-b-2">
          <h2 className="card-title text-[#a56f7c] font-swash text-5xl ml-6  h-20">
            You May Also Like
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-3 lg:p-0 my-14">
          {mayLke.slice(0, 4).map((subcat) => (
            <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
