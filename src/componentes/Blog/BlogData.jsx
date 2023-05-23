import { FaClock, FaUserAlt } from "react-icons/fa";
const BlogData = ({ blog }) => {
  const { img, title, description, author, autho_img, date } = blog;
  return (
    <article>
      {" "}
      <div className="card lg:card-side bg-gray-200 shadow-xl ">
        <figure className=" relative">
          <img
            src={img}
            alt={title}
            className="h-[500px] w-[700px] img_hover"
          />
        </figure>
        <div className="avatar absolute left-5 top-6">
          <div className="w-12 rounded-full ring ring-[#a56f7c] ring-offset-base-100 ring-offset-2">
            <img src={autho_img} className="img_hover" />
          </div>
        </div>
        <div className="card-body w-[300px] md:w-[630px] lg:w-[500px]">
          <h2 className="card-title text-[#a56f7c] font-swash text-2xl">
            {title}
          </h2>
          <p className="text-black my-4">{description}</p>

          <div className=" flex items-center  ">
            <FaUserAlt className="text-[#a56f7c] "></FaUserAlt>{" "}
            <span className="text-black ml-2"> {author}</span>{" "}
          </div>
          <div className=" flex items-center">
            <FaClock className="text-[#a56f7c] "></FaClock>{" "}
            <span className="text-black ml-2"> {date}</span>{" "}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogData;
