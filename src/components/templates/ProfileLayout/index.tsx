import { Outlet } from "react-router-dom";
import "./index.scss";
import { useAuth } from "@/stores/AuthContext";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { NavLink } from "react-router-dom";
import { PATH } from "@/config/path";

const ProfileLayout = () => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <div className="t-profileLayout">
        <div className="t-profileLayout_left">
          <div className="t-profileLayout_left--info">
            <img src="/images/Avatar.jpg" alt="" />
            <p>{user?.name}</p>
          </div>
          <ul className="t-profileLayout_left--list">
            <li className="list_item">
              <NavLink to={PATH.profile} end>
                <img src="/images/person2.svg" alt="" />
                Hồ sơ
              </NavLink>
            </li>
            <li className="list_item">
              <NavLink to={PATH.bank}>
                <img src="/images/card.svg" alt="" />
                Ngân hàng
              </NavLink>
            </li>
            <li className="list_item">
              <NavLink to={PATH.productManagement}>
                <img src="/images/product.svg" alt="" />
                Sản phẩm
              </NavLink>
            </li>
            <li className="list_item">
              <NavLink to={PATH.schedule}>
                <img src="/images/schedule.svg" alt="" />
                Lịch trình
              </NavLink>
            </li>
            <li className="list_item">
              <NavLink to={PATH.statistic}>
                <img src="/images/statistic.svg" alt="" />
                Thống kê
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="t-profileLayout_right">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileLayout;
