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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
          {toys.map((toy) => (
            <ToyData key={toy._id} toy={toy}></ToyData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ALL_toys;
