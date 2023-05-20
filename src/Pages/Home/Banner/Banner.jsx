import Lottie from "lottie-react";
import banner1 from "../../../../public/banner1.json";
import banner2 from "../../../../public/banner2.json";
import banner3 from "../../../../public/banner3.json";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-gray-800">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="my_container grid grid-cols-1 lg:grid-cols-2 pt-10 pb-16">
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
                <button className="btn_style">Explore All Toys</button>
              </Link>
            </div>
            <div className=" hidden lg:block ">
              <Lottie animationData={banner1} loop={true} />
            </div>
          </div>
          <div className="absolute flex transform end-1/2 translate-x-1/2  bottom-0 my-8">
            <a
              href="#slide3"
              className="btn  rounded-none mr-4 bg-[#A4747F] hover:bg-[#8CA6A2]"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn  rounded-none bg-[#A4747F] hover:bg-[#8CA6A2]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="my_container grid grid-cols-1 lg:grid-cols-2 pt-10 pb-16">
            <div className="my-16 text-center lg:text-left p-8 md:p-3 lg:p-0">
              <h2 className=" font-swash text-[#b18792] text-6xl ">
                Discover Endless Joy in our Toy Wonderland!
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
                <button className="btn_style">Explore All Toys</button>
              </Link>
            </div>
            <div className=" hidden lg:block ">
              <Lottie animationData={banner2} loop={true} />
            </div>
          </div>
          <div className="absolute  flex transform end-1/2 translate-x-1/2  bottom-0 my-8">
            <a
              href="#slide1"
              className="btn  rounded-none mr-4 bg-[#A4747F] hover:bg-[#8CA6A2]"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn  rounded-none bg-[#A4747F] hover:bg-[#8CA6A2]"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="my_container grid grid-cols-1 lg:grid-cols-2 pt-10 pb-16">
            <div className="my-16 text-center lg:text-left p-8 md:p-3 lg:p-0">
              <h2 className=" font-swash text-[#b18792] text-6xl ">
                Ignite the Joy of Play and Create Cherished Memories!
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
                <button className="btn_style">Explore All Toys</button>
              </Link>
            </div>
            <div className=" hidden lg:block ">
              <Lottie animationData={banner3} loop={true} />
            </div>
          </div>
          <div className="absolute  flex transform end-1/2 translate-x-1/2  bottom-0 my-8">
            <a
              href="#slide2"
              className="btn  rounded-none mr-4 bg-[#A4747F] hover:bg-[#8CA6A2]"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn  rounded-none bg-[#A4747F] hover:bg-[#8CA6A2]"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
