import { Form } from "react-router-dom";
import contactImg from "../../../assets/images/contact/contact-us-concept-illustration_114360-3147.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="my_container">
      <div className=" my-20 grid grid-cols-1 md:grid-cols-2 bg-gray-200 skew-y-1">
        <div
          className=" p-10"
          data-aos=" fade-right lg:fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {" "}
          <h2 className="text-[#a56f7c] text-5xl font-swash my-4">
            {`  Reach Out and Let's Play Together! Contact Us for All Your Toy Needs`}
          </h2>{" "}
          <Form>
            {" "}
            <div className="from-control">
              <input
                type="text"
                placeholder="Enter your name: "
                className="input border-1 border-[#a56f7c] w-full max-w-xs text-[#8ca6a2] my-3 rounded-none"
              />
            </div>
            <div className="from-control ">
              <input
                type="email"
                placeholder="Enter your email: "
                className="input border-1 border-[#a56f7c] w-full max-w-xs text-[#8ca6a2] my-3 rounded-none"
              />
            </div>
            <div className="from-control">
              <textarea
                placeholder="Bio"
                className="textarea border-1 border-[#a56f7c] textarea-lg w-full max-w-xs rounded-none mb-4"
              ></textarea>
            </div>
            <button className="btn_style">Contact Us Now</button>
          </Form>
        </div>
        <div
          data-aos="fade-right lg:fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img src={contactImg} alt="contact" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
