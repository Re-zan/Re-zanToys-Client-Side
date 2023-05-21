import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const CommonBanner = (props) => {
  //location
  const location = useLocation();
  return (
    <div
      className="bnaner h-[700px]  bg-base-100 bg-opacity-50"
      style={{
        backgroundImage: `url(${props.imgSroce})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="content bg-black bg-opacity-70 flex items-center justify-center h-[700px] z-0">
        <div className=" breadcrumbs z-20 text-[#A4747F] text-3xl font-swash">
          <ul>
            <Link to="/">
              <li className=" uppercase">Home</li>
            </Link>
            <span className="mx-3">
              <FaArrowRight></FaArrowRight>
            </span>
            <li>{location.pathname.substring(1).toUpperCase()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
