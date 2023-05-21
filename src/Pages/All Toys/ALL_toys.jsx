import { useEffect, useState } from "react";
import ToyData from "./ToyData";

const ALL_toys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="my_container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {toys.map((toy) => (
          <ToyData key={toy._id} toy={toy}></ToyData>
        ))}
      </div>
    </div>
  );
};

export default ALL_toys;
