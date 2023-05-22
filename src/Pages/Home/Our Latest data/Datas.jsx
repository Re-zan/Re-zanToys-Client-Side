import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const Datas = ({ toy }) => {
  const { _id, photo, toy_name, toy_rating, toy_price } = toy;
  return (
    <Link to={`/toys/${_id}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-200 rounded-lg">
        <div>
          <figure className="relative">
            <img src={photo} alt={toy_name} className=" h-52 img_hover" />
          </figure>
        </div>
        <div className="py-4">
          <h2 className="card-title text-[#a56f7c] font-swash text-base h-20">
            {toy_name}
          </h2>
          <p className="text-gray-800 font-semibold pt-4 pb-2">
            Price: $ {toy_price}
          </p>
          <div className="flex items-center  text-sm">
            <Rating
              style={{ maxWidth: 60 }}
              readOnly
              orientation="horizantal"
              value={toy_rating}
            />
            <p className="text-gray-800 font-semibold ml-2"> {toy_rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Datas;
