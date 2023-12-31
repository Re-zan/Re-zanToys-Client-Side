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

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    if (selectedFilter === "asc") {
      fetch(`https://re-zan-toys-server-side.vercel.app/my-toys/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMy_toys(data));
    } else if (selectedFilter === "desc") {
      fetch(
        `https://re-zan-toys-server-side.vercel.app/my-toys/des/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setMy_toys(data));
    }
  };

  return (
    <div>
      {" "}
      <div className="my_container">
        <div className="flex items-center mt-20">
          <p className="text-3xl font-swash font-semibold mr-3 text-black">
            Filter By:
          </p>
          <select
            className=" bg-[#A4747F] text-white  border-0  focus:outline-none p-5 "
            onChange={handleFilterChange}
          >
            <option value="asc">Less Price</option>
            <option value="desc">Biggest Price</option>
          </select>
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
