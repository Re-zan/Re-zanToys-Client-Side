import Lottie from "lottie-react";
import banner from "../../../../public/banner.json";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-gray-800">
      <div className="my_container grid grid-cols-1 lg:grid-cols-2 py-10">
        <div className="my-16 text-center lg:text-left p-8 md:p-3 lg:p-0">
          <h2 className=" font-swash text-[#b18792] text-6xl ">
            Get Ready for Fun-Filled <br></br> Adventures at Re-zanToys
          </h2>
          <p className="text-[#8CA6A2] my-10">
            {`Welcome to Re-zanToys, where every toy sparks joy and ignites
            imagination. Explore our captivating collection, play to your
            heart's content, and create unforgettable memories with us. From
            action-packed adventures to cuddly companions, our toys inspire
            endless play possibilities. Let your imagination soar and create
            magical moments with Re-zanToys. Join us on this thrilling journey
            of fun, exploration, and cherished memories. Begin your toy-filled
            adventure today!`}
          </p>
          <Link to="/all-toys">
            <button className="rounded-lg text-white bg-[#A4747F] border-0 py-4 px-8 hover:bg-[#8CA6A2]">
              Explore All Toys
            </button>
          </Link>
        </div>
        <div className=" hidden lg:block ">
          <Lottie animationData={banner} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
