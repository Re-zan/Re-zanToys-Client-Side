import Lottie from "lottie-react";
import errorPage from "../../assets/images/banner/bannerJson/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <Lottie
        animationData={errorPage}
        loop={true}
        className=" w-7/12 mx-auto"
      />
      <Link to="/">
        {" "}
        <button className="btn bttn">Go to the home page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
