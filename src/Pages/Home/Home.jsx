import Heading from "../../componentes/Heading/Heading";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  return (
    <div className="">
      {/* banner part start */}
      <Banner></Banner>
      {/* banner part end */}
      {/* gallery part start */}
      <Heading
        title="Our Gallery Section"
        description="Step into our captivating gallery, where art transcends boundaries. Discover a diverse collection of stunning artworks, from mesmerizing paintings to thought-provoking sculptures. Each piece tells a unique story, evoking emotions and inspiring awe. Immerse yourself in the world of artistic excellence and let your imagination soar. "
      ></Heading>
      <Gallery></Gallery>
      {/* gallery part end */}
    </div>
  );
};

export default Home;
