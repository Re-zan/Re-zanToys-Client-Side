import { useEffect, useState } from "react";
import ToyData from "./ToyData";
import CommonBanner from "../../componentes/CommonBanner/CommonBanner";
import bannerImg from "../../assets/images/banner/bannerImg/Toy-Names-For-Kids.jpg";

const ALL_toys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <CommonBanner imgSroce={bannerImg}></CommonBanner>
      <div className="my_container">
        <div className="overflow-x-auto my-20">
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
