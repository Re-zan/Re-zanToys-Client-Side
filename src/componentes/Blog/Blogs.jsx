import { useEffect, useState } from "react";
import BlogData from "./BlogData";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="my_container grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-0 mb-10">
      {blogs.slice(0, 2).map((blog) => (
        <BlogData key={blog.id} blog={blog}></BlogData>
      ))}
    </div>
  );
};

export default Blogs;
