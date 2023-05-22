import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Datas from "./Datas";

const LatestData = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="my_container my-24">
      <div className="flex justify-between pb-6 border-[#a56f7c] border-b-2">
        <h2 className="card-title text-[#a56f7c] font-swash text-5xl  h-20">
          Latest Toys
        </h2>
        <Link to="/all-toys">
          <button className="btn_style">Explore All Toys</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-3 lg:p-0 my-14">
        {toys.slice(0, 12).map((toy, index) => (
          <Datas key={toy._id} toy={toy} index={index}></Datas>
        ))}
      </div>
    </div>
  );
};

export default LatestData;
