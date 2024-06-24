import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@service/utils/hooks";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const Wrapper = () => {
  const isAuthenticated = useAppSelector((state) => state.user.auth) || true;
  const darkMode = useAppSelector((state) => state.user.darkMode);
  if (isAuthenticated) {
    return (
      <div className={darkMode ? "dark" : ""}>
        <Navbar />
        <div className="w-screen mt-[72px] bg-white">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
  return <Navigate to="/login" />;
};

export default Wrapper;
