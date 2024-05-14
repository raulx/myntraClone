import { Navbar, Image } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { TypographyH3 } from "../../components/Typography/Typography.jsx";
import { FaBuildingColumns, FaBox } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { VscInsert } from "react-icons/vsc";
import { TbDeviceAnalytics } from "react-icons/tb";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { HiLogout } from "react-icons/hi";
import UseAdminActiveLinkContext from "@/hooks/useAdminActiveLinkContext.jsx";
import {
  removeAdminAuthenticated,
  useLogoutAdminMutation,
} from "@/store/index.js";
import { useDispatch } from "react-redux";

function AdminHomePage() {
  const { activeLink, setActiveLink } = UseAdminActiveLinkContext();

  const handleClick = (clickedLink) => {
    setActiveLink(clickedLink);
  };

  return (
    <div className="xl:block hidden h-screen overflow-hidden">
      <div>
        <motion.div
          key="navbaradmin"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <AdminPageNavbar />
        </motion.div>
      </div>
      <div className="flex h-full">
        <div className=" border-r-2 px-2 py-4 w-44">
          <div
            className={`flex gap-2 items-center my-8 cursor-pointer font-bold ${
              activeLink === "products" && "font-extrabold"
            } `}
          >
            <FiBox
              className={` ${
                activeLink === "products"
                  ? "text-red-500 scale-110 text-2xl"
                  : "text-xl"
              }`}
            />
            <Link
              to={"/page/admin/products"}
              onClick={() => {
                handleClick("products");
              }}
            >
              See Products
            </Link>
          </div>

          <div
            className={`flex gap-2 items-center my-8 cursor-pointer font-bold ${
              activeLink === "insert" && "font-extrabold"
            } `}
          >
            <VscInsert
              className={` ${
                activeLink === "insert"
                  ? "text-red-500 scale-110 text-2xl"
                  : "text-xl"
              }`}
            />
            <Link
              to={"/page/admin/products/insert"}
              onClick={() => handleClick("insert")}
            >
              Insert Product
            </Link>
          </div>

          <div
            className={`flex gap-2 items-center my-8 cursor-pointer font-bold ${
              activeLink === "analytics" && "font-extrabold"
            } `}
          >
            <TbDeviceAnalytics
              className={` ${
                activeLink === "analytics"
                  ? "text-red-500 scale-110 text-2xl"
                  : "text-xl"
              }`}
            />
            <Link
              to={"/page/admin/products/analytics"}
              onClick={() => handleClick("analytics")}
            >
              Analytics
            </Link>
          </div>

          <div
            className={`flex gap-2 items-center my-8 cursor-pointer font-bold ${
              activeLink === "orders" && "font-extrabold"
            } `}
          >
            <FaBox
              className={` ${
                activeLink === "orders"
                  ? "text-red-500 scale-110 text-2xl"
                  : "text-xl"
              }`}
            />
            <Link
              to={"/page/admin/products/orders"}
              onClick={() => handleClick("orders")}
            >
              Orders
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

function AdminPageNavbar() {
  const [logoutAdmin] = useLogoutAdminMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await logoutAdmin();
      if (res.data.status === 200) {
        dispatch(removeAdminAuthenticated());
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Navbar className="w-full h-full border-b-2 py-2 px-8 flex justify-between items-center">
      <Navbar.Brand href="#home">
        <Image src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710335387/ecommerce_assets/s6zpsidolphtf34czzuy.png" />
      </Navbar.Brand>
      <div>
        <TypographyH3 className="text-[#F25511] font-extrabold">
          Administration
        </TypographyH3>
        <TypographyH3 className="text-[#F25511] text-center justify-center items-center gap-4 font-extrabold flex">
          Myntra
          <FaBuildingColumns className="text-black" />
        </TypographyH3>
      </div>
      <div
        className="p-2 bg-pink-50 hover:bg-pink-100 transition-all duration-75 rounded-lg cursor-pointer"
        onClick={handleLogout}
      >
        <div className="flex flex-col justify-center items-center">
          <HiLogout className="text-lg" />
          <span className="text-sm">Logout</span>
        </div>
      </div>
    </Navbar>
  );
}

export default AdminHomePage;
