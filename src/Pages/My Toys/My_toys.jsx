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
  console.log(my_toys);
  return (
    <div>
      {" "}
      <div className="my_container">
        <div className="form-control w-[300px] md:w-[600px] lg:w-[1000px] mx-auto my-20"></div>
        <div className="overflow-x-auto mb-20">
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
                <MyToyData key={toy._id} toy={toy} index={index}></MyToyData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default My_toys;
