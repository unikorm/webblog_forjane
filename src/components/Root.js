
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
    const location = useLocation();
    const routesWithoutHead = ["/about-me",];
    const hideHead = routesWithoutHead.includes(location.pathname);

  return (
    <>
      <Header />
      {!hideHead && <Head />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;