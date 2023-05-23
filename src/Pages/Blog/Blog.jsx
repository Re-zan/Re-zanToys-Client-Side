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
      <div className="my_container grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-0 my-40">
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
        <div className="md:w-[600px] lg:w-[1000px] mx-auto collapse collapse-plus border  bg-white my-8">
          <input type="checkbox" className="peer" />
          <div className="collapse-title title_text text-[#a86978]  text-2xl shadow-lg">
            Q: What is an access token and refresh token? How do they work and{" "}
            <br></br>
            where should we store them on the client-side?
          </div>
          <div className="collapse-content ">
            <div>
              <p className="descripction my-6 text-black">
                <li className="py-2">
                  {" "}
                  An access token is mainly used in web aplications for
                  authentication and authorization purposes. When a user try to
                  access protected resources on a server that time it gives the
                  permission by providing the token. But it has a short
                  lifespan. It will expried after a short validate preiod. It
                  provides the refresh token to acess the protected resources.
                </li>

                <li className="py-2">
                  {" "}
                  A Refresh token is mainly used in web aplications for
                  authentication and authorization purposes.Refresh token gives
                  permission to the user to access the protected resources. A
                  user can re-validated without login. It has a long life span.
                  When anacces token expried a user can access the resources by
                  useing refresh token.{" "}
                </li>

                <li className="py-2">
                  {" "}
                  An access token and a refresh token are commonly used in web
                  applications for authentication and authorization purposes.
                  But an access token has short-lived. It expries after a
                  preiod. If a user want to obtain the access again the can use
                  the refresh token without login.
                </li>
                <li className="py-2">
                  {" "}
                  We should store them on the client-side's memory, cookies and
                  web storage
                </li>
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[600px] lg:w-[1000px] mx-auto collapse collapse-plus border  bg-white my-8">
          <input type="checkbox" className="peer" />
          <div className="collapse-title title_text text-[#a86978]  text-2xl shadow-lg">
            Q: Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content ">
            <div>
              <p className="descripction my-6">
                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two
                types of database management systems:
                <li className="py-2">
                  {" "}
                  SQL (Structured Query Language) follows a tabluar and
                  relational schema to contain the user data. On the other hand
                  NoSQL (Not Only SQL) doesn't follow tabluar and relational
                  schema. It is more flexible, scalable, and suitable for
                  handling unstructured or semi-structured. It contains data in
                  a array. It is called collection{" "}
                </li>
              </p>
            </div>
          </div>
        </div>

        <div className=" md:w-[600px] lg:w-[1000px] mx-auto collapse collapse-plus border  bg-white my-8">
          <input type="checkbox" className="peer" />
          <div className="collapse-title title_text text-[#a86978]  text-2xl shadow-lg">
            Q: What is express js? What is Nest JS ?
          </div>
          <div className="collapse-content ">
            <div>
              <p className="descripction my-6">
                Express js and Nest JS both of are the js framework. Express js
                is flexibled framework. But Nest.js is a structured framework.
              </p>
            </div>
          </div>
        </div>

        <div className=" md:w-[600px] lg:w-[1000px] mx-auto collapse collapse-plus border  bg-white mt-8 mb-36">
          <input type="checkbox" className="peer" />
          <div className="collapse-title title_text text-[#a86978]  text-2xl shadow-lg">
            Q: What is MongoDB aggregate and how does it work ?
          </div>
          <div className="collapse-content ">
            <div>
              <p className="descripction my-6">
                MongoDB aggregate is a method to handale advanced and complex
                database system.Aggregate method works in input documents,
                document transformation, output documents and so on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
