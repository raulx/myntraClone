import { Navbar, Image } from "react-bootstrap";
import { Outlet, Link, useLocation } from "react-router-dom";
import { TypographyH3 } from "../../components/Typography/Typography.jsx";
import { FaBuildingColumns, FaBox } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { VscInsert } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { TbDeviceAnalytics } from "react-icons/tb";

function AdminHomePage() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  console.log(location.pathname);
  useEffect(() => {
    // Set active link based on current route
    switch (location.pathname) {
      case "/page/admin/products":
        setActiveLink("products");
        break;
      case "/page/admin/products/insert":
        setActiveLink("insert");
        break;
      case "/page/admin/products/analytics":
        setActiveLink("analytics");
        break;
      case "/page/admin/products/orders":
        setActiveLink("orders");
        break;
      default:
        setActiveLink("");
        break;
    }
  }, [location]);
  return (
    <div className="xl:block hidden h-screen overflow-hidden">
      <div>
        <AdminPageNavbar />
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
            <Link to={"/page/admin/products"}>See Products</Link>
          </div>

          <div
            className={`flex gap-2 items-center my-8 cursor-pointer font-bold ${
              activeLink === "insert" && "font-extrabold"
            } `}
          >
            <VscInsert className="text-xl" />
            <Link to={"/page/admin/products/insert"}>Insert Product</Link>
          </div>

          <div
            className={`flex gap-2 items-center my-8 cursor-pointer font-bold ${
              activeLink === "analytics" && "font-extrabold"
            } `}
          >
            <TbDeviceAnalytics className="text-xl" />
            <Link to={"/page/admin/products/analytics"}>Analytics</Link>
          </div>

          <div
            className={`flex gap-2 items-center my-8 cursor-pointer font-bold ${
              activeLink === "orders" && "font-extrabold"
            } `}
          >
            <FaBox className="text-xl" />
            <Link to={"/page/admin/products/orders"}>Orders</Link>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function AdminPageNavbar() {
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
      <div>
        <p>Admin</p>
      </div>
    </Navbar>
  );
}

export default AdminHomePage;
