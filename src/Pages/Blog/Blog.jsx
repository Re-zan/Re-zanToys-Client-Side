import { useEffect, useState } from "react";
import BlogData from "../../componentes/Blog/BlogData";
import img from "../../assets/images/banner/bannerImg/fun_for_kids_blog_lg.jpg";

import CommonBanner from "../../componentes/CommonBanner/CommonBanner";
import Heading from "../../componentes/Heading/Heading";

const Blog = () => {
  //states
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side-re-zan.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {/* banner start  */}
      <CommonBanner imgSroce={img}></CommonBanner>
      {/* banner end  */}
      {/* blog data start */}
      <div className="my_container grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-0 my-40">
        {blogs.map((blog) => (
          <BlogData key={blog._id} blog={blog}></BlogData>
        ))}
      </div>
      {/* blog data end */}
      <Heading
        title="Explore Our FAQ Section for Answers to Your Burning Questions!"
        description="Welcome to our FAQ section, your go-to resource for all things toy-related. Find answers to commonly asked questions, from toy care tips to shipping and returns. Unlock valuable insights, gain clarity, and make informed decisions as you navigate the world of toys with confidence."
      ></Heading>
      <div>
        <div className=" w-[1000px] mx-auto collapse collapse-plus border  bg-white my-8">
          <input type="checkbox" className="peer" />
          <div className="collapse-title title_text text-[#a86978]  text-2xl shadow-lg">
            Q: What is an access token and refresh token? How do they work and{" "}
            <br></br>
            where should we store them on the client-side?
          </div>
          <div className="collapse-content ">
            <div>
              <p className="descripction my-6">
                Nodejs is a javascript run time and Express js is a famous
                Nodejs framework.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[1000px] mx-auto collapse collapse-plus border  bg-white my-8">
          <input type="checkbox" className="peer" />
          <div className="collapse-title title_text text-[#a86978]  text-2xl shadow-lg">
            Q: Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content ">
            <div>
              <p className="descripction my-6">
                Nodejs is a javascript run time and Express js is a famous
                Nodejs framework.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[1000px] mx-auto collapse collapse-plus border  bg-white my-8">
          <input type="checkbox" className="peer" />
          <div className="collapse-title title_text text-[#a86978]  text-2xl shadow-lg">
            Q: What is express js? What is Nest JS ?
          </div>
          <div className="collapse-content ">
            <div>
              <p className="descripction my-6">
                Nodejs is a javascript run time and Express js is a famous
                Nodejs framework.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[1000px] mx-auto collapse collapse-plus border  bg-white mt-8 mb-36">
          <input type="checkbox" className="peer" />
          <div className="collapse-title title_text text-[#a86978]  text-2xl shadow-lg">
            Q: What is MongoDB aggregate and how does it work ?
          </div>
          <div className="collapse-content ">
            <div>
              <p className="descripction my-6">
                Nodejs is a javascript run time and Express js is a famous
                Nodejs framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
