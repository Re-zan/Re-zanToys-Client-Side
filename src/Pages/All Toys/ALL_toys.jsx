import { useEffect, useState } from "react";
import ToyData from "./ToyData";
import CommonBanner from "../../componentes/CommonBanner/CommonBanner";
import bannerImg from "../../assets/images/banner/bannerImg/Toy-Names-For-Kids.jpg";

const ALL_toys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `https://re-zan-toys-server-side.vercel.app/toys/searchBy/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  console.log(searchText);
  return (
    <div>
      <CommonBanner imgSroce={bannerImg}></CommonBanner>
      <div className="my_container">
        <div className="form-control w-[300px] md:w-[600px] lg:w-[1000px] mx-auto">
          <div className="input-group mb-10 mt-20">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search You Toys "
              className="input input-bordered  w-full mx-auto"
            />
            <button
              className="btn btn-square bg-[#A4747F] border-0"
              onClick={handleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto mb-20">
          <table className="table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Toy Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys.map((toy, index) => (
                <ToyData key={toy._id} toy={toy} index={index}></ToyData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ALL_toys;
