import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Gallery = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/3004/1474/files/large_pup_800x_6ac41380-e9ad-4d1c-b19e-f682a5471b87_800x.png?v=1614303993",
    "https://www.unicorns-rule.co.uk/wp-content/uploads/2018/01/unicorns-uk.png",
    "https://static-01.daraz.lk/p/a905227e7af00516cd1c77ef097fbdc8.png",
    "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9673cdbb-a693-4547-b920-55ab9387f8f7.__CR0,0,970,600_PT0_SX970_V1___.png",
    "https://cdn.popcultcha.com.au/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/u/butter.png",
    "https://i.ebayimg.com/images/g/y-oAAOSwLJxfW49e/s-l1600.png",
  ];
  return (
    <div className="my_container mb-16">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="18px">
          {images.map((image, i) => (
            <>
              {" "}
              <div className=" bg-gray-300 transition duration-300 transform ease-in-out hover:scale-y-105 rounded-lg  shadow-xl">
                <img
                  key={i}
                  src={image}
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
