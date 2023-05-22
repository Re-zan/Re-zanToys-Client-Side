import Blogs from "../../componentes/Blog/Blogs";
import Heading from "../../componentes/Heading/Heading";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import LatestData from "./Our Latest data/LatestData";
import PopularData from "./Popular/PopularData";
import Service from "./Service/Service";
import ShopByCategory from "./Shop BY Category/ShopByCategory";

const Home = () => {
  return (
    <div className="">
      {/* banner part start */}
      <Banner></Banner>
      {/* banner part end */}

      {/* service part start */}
      <Heading
        title="Our Services "
        description="Welcome to our toy marketplace, where our services cater to every toy lover's needs. From Toy Sourcing to Toy Evaluation, Toy Trading to Toy Consignment, we provide a seamless experience. Discover a diverse range of toys, ensure quality and authenticity, connect with fellow enthusiasts, and easily sell or trade your beloved toys. Unleash the joy of toys with us. "
      ></Heading>
      <Service></Service>
      {/* service part end */}

      {/* our latet part start */}
      <LatestData></LatestData>
      {/* our latet part end */}

      {/* gallery part start */}
      <Heading
        title="Our Gallery Section"
        description="Step into our captivating gallery, where art transcends boundaries. Discover a diverse collection of stunning artworks, from mesmerizing paintings to thought-provoking sculptures. Each piece tells a unique story, evoking emotions and inspiring awe. Immerse yourself in the world of artistic excellence and let your imagination soar. "
      ></Heading>
      <Gallery></Gallery>
      {/* gallery part end */}

      {/* shop by Category start */}
      <Heading
        title="Shop By Category"
        description="Explore our diverse range of categories and find the perfect toys for every child's delight. From educational toys that inspire learning to imaginative playsets that transport kids to new worlds, we have something for everyone. Discover the magic of our carefully curated selection and make playtime an unforgettable adventure."
      ></Heading>
      <ShopByCategory></ShopByCategory>
      {/* shop by Category end */}

      {/* popular part start */}
      <PopularData></PopularData>
      {/* popular part end */}

      {/* our contact part start */}
      <Contact></Contact>
      {/* our contact part end */}

      {/* our blog part start */}
      <Heading
        title="Our Latest Blogs "
        description="Our Toys Blog is a treasure trove of inspiration and information for toy enthusiasts of all ages. Dive into captivating articles, reviews, and guides that explore the world of toys. From the latest toy releases to tips on collecting and playtime ideas, our blog is your go-to destination for all things toy-related."
      ></Heading>
      <Blogs></Blogs>
      {/* our blog part end */}
    </div>
  );
};

export default Home;
