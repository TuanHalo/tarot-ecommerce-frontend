import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { Outlet } from "react-router-dom";
import "./index.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="t-mainLayout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
