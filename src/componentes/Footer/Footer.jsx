import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo/logo.png";
import { FaEnvelopeOpen, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import fb from "../../assets/images/icons/fb.png";
import insta from "../../assets/images/icons/insta_.png";
import twitter from "../../assets/images/icons/twitter.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import Datas from "../../Pages/Home/Our Latest data/Datas";
import FooterData from "./FooterData";
const Footer = () => {
  const { user } = useContext(AuthContext);
  //toys
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  //menu
  const mainmenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#b98f9a]" : "text-white"
        }
      >
        {" "}
        <li className=" text-xl   my-5 h-5">Home</li>{" "}
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-[#b98f9a]" : "text-white"
        }
      >
        {" "}
        <li className=" text-xl  my-5 h-5">Blogs</li>{" "}
      </NavLink>
      <NavLink
        to="/all-toys"
        className={({ isActive }) =>
          isActive ? "text-[#b98f9a]" : "text-white"
        }
      >
        {" "}
        <li className=" text-xl my-5 h-5">All Toys</li>{" "}
      </NavLink>
      {user && (
        <>
          {" "}
          <NavLink
            to="/my-toys"
            className={({ isActive }) =>
              isActive ? "text-[#b98f9a]" : "text-white"
            }
          >
            {" "}
            <li className=" text-xl   my-5 h-5">My Toys</li>{" "}
          </NavLink>
          <NavLink
            to="/add-toys"
            className={({ isActive }) =>
              isActive ? "text-[#b98f9a]" : "text-white"
            }
          >
            {" "}
            <li className=" text-xl  my-5 h-5">Add Toys</li>{" "}
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="bg-gray-700">
      <footer className="footer px-5 lg:px-0 py-20  my_container">
        <div>
          <Link to="/">
            {" "}
            <div className="flex items-center">
              <img src={logo} alt="logo" className=" h-20 " />
              <h2 className="logo md:text-xl lg:text-4xl">Re-zanToys</h2>
            </div>
          </Link>
          <p className=" w-[200px] lg:w-[400px] my-8 text-sm text-white ">
            A toy marketplace is an online platform or physical store where
            individuals can buy, sell, and trade toys. These marketplaces offer
            a wide range of toys, including action figures, dolls, board games,
            and educational toys.
          </p>

          <div className="  flex  w-44">
            <Link to="https://www.facebook.com/">
              <img
                src={fb}
                alt="facebook"
                className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>
            <Link to="https://twitter.com/">
              <img
                src={twitter}
                alt="facebook"
                className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>

            <Link to="https://www.instagram.com/">
              {" "}
              <img
                src={insta}
                alt="facebook"
                className="object-cover w-12 bg-slate-50 rounded-full mr-4 p-3"
              />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white  mt-6 mb-5">
            UseFul Links
          </h2>
          <ul>{mainmenu}</ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mt-6 mb-5">
            Products
          </h2>

          <div className="grid grid-cols-1  gap-8 p-3 lg:p-0  w-[200px] h-[200px]">
            {toys.slice(0, 1).map((toy, index) => (
              <FooterData key={toy._id} toy={toy} index={index}></FooterData>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white mt-6 mb-5">
            Contact us
          </h2>
          <div className="flex items-center justify-between text-white ">
            <FaPhoneAlt className="text-[#8CA6A2] mr-4 text-xl"></FaPhoneAlt>
            <p className="text-base">+ 018834344546</p>{" "}
          </div>
          <div className="flex items-center justify-between text-white my-3">
            <FaEnvelopeOpen className="text-[#8CA6A2] mr-4 text-xl"></FaEnvelopeOpen>
            <p className="text-base">info@gamil.com</p>{" "}
          </div>
          <div className="flex items-center justify-between text-white ">
            <FaLocationArrow className="text-[#8CA6A2] mr-4 text-xl"></FaLocationArrow>
            <p className="text-base">Oxygen Chittagong</p>{" "}
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-white bg-gray-800 py-8">
        <div>
          <p className="text-lg">
            Copyright © 2023 - All right reserved by{" "}
            <span className="logo text-2xl"> Re-zanToys</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
