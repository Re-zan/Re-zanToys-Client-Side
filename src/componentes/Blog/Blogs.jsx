import { useEffect, useState } from "react";
import BlogData from "./BlogData";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side-re-zan.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="my_container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-0 mb-10">
      {blogs.slice(0, 2).map((blog) => (
        <BlogData key={blog._id} blog={blog}></BlogData>
      ))}
    </div>
  );
};

export default Blogs;
