import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryData from "../Shop BY Category/CategoryData";

const PopularData = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  //popular data
  const popular = toys.filter((data) => data.toy_rating == 5);
  return (
    <div className="my_container my-24">
      <div className="flex justify-between pb-6 border-[#a56f7c] border-b-2">
        <h2 className="card-title text-[#a56f7c] font-swash text-5xl  h-20">
          Popular Toys
        </h2>
        <Link to="/all-toys">
          <button className="btn_style">Explore All Toys</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-3 lg:p-0 my-14">
        {popular.slice(0, 4).map((subcat) => (
          <CategoryData subcat={subcat} key={subcat._id}></CategoryData>
        ))}
      </div>
    </div>
  );
};

export default PopularData;
