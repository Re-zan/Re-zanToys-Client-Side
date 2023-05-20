import { Outlet } from "react-router-dom";
import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
