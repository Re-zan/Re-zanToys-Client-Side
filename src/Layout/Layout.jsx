import { Outlet, useLocation } from "react-router-dom";
import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import { useEffect } from "react";
import ScrollStop from "../ScrollStop";

const Layout = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Re-zanToys";
    } else {
      document.title = `Re-zanToys ${loc.pathname.replace("/", "| ")}`;
    }
    if (loc.state) {
      document.title = `Re-zanToys | ${loc.state}`;
    }
  }, [loc.pathname]);
  return (
    <div>
      <ScrollStop></ScrollStop>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
