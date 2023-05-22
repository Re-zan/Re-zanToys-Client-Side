import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import MyToyData from "./MyToyData";

const My_toys = () => {
  const { user } = useContext(AuthContext);
  const [my_toys, setMy_toys] = useState([]);
  useEffect(() => {
    fetch(`https://re-zan-toys-server-side.vercel.app/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMy_toys(data));
  }, [user]);

  const handleAes = () => {
    fetch(`https://re-zan-toys-server-side.vercel.app/my-toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMy_toys(data));
  };
  const handleDes = () => {
    fetch(
      `https://re-zan-toys-server-side.vercel.app/my-toys/des/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMy_toys(data));
  };
  // function run() {}
  return (
    <div>
      {" "}
      <div className="my_container">
        <div className="flex items-center mt-20">
          <p className="text-3xl font-swash font-semibold mr-3">Filter By :</p>
          <button
            className="btn bg-[#A4747F] text-white border-0 mr-6"
            onClick={handleAes}
          >
            Ascending{" "}
          </button>
          <button
            className="btn bg-[#A4747F] text-white border-0 mr-6"
            onClick={handleDes}
          >
            Descending
          </button>
        </div>

        <div className="overflow-x-auto mb-20 mt-6">
          <table className="table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Toy Name</th>
                <th>Toy Photo</th>
                <th>Toy Description</th>
                <th>Sub Category</th>
                <th>Toy Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {my_toys.map((toy, index) => (
                <MyToyData
                  key={toy._id}
                  toy={toy}
                  index={index}
                  setMy_toys={setMy_toys}
                  my_toys={my_toys}
                ></MyToyData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default My_toys;
