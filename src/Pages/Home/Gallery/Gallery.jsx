import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Gallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://re-zan-toys-server-side.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div className="my_container mb-16">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="18px" className="p-3 lg:p-0">
          {images.map((image) => (
            <>
              {" "}
              <div
                className=" bg-gray-300 transition duration-300 transform ease-in-out hover:scale-y-105 rounded-lg  shadow-xl"
                key={image._id}
              >
                <img
                  key={image._id}
                  src={image.img_url}
                  style={{ width: "100%", display: "block" }}
                  className="p-4"
                />
              </div>
            </>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
