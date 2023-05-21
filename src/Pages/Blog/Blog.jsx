import { useEffect, useState } from "react";
import BlogData from "../../componentes/Blog/BlogData";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="my_container grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-0 my-20">
        {blogs.map((blog) => (
          <BlogData key={blog._id} blog={blog}></BlogData>
        ))}
      </div>
    </div>
  );
};

export default Blog;
