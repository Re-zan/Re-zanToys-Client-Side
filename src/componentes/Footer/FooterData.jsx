import { Rating } from "@smastrom/react-rating";

const FooterData = ({ toy }) => {
  const { photo, toy_name, toy_rating, toy_price } = toy;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2  rounded-lg">
      <div>
        <img src={photo} alt={toy_name} className=" h-36 mt-4 img_hover " />
      </div>
      <div className="py-4">
        <h2 className="card-title text-[#a56f7c] font-swash text-base h-20">
          {toy_name}
        </h2>
        <p className="font-semibold pt-4 pb-2 text-white">
          Price: $ {toy_price}
        </p>
        <div className="flex items-center  text-sm">
          <Rating
            style={{ maxWidth: 60 }}
            readOnly
            orientation="horizantal"
            value={toy_rating}
          />
          <p className="text-white font-semibold ml-2"> {toy_rating}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterData;
