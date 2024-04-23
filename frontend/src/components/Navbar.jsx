import { CiUser, CiHeart, CiSearch, CiSquarePlus } from "react-icons/ci";
import { PiBagSimpleLight } from "react-icons/pi";
import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import UseNavigationContext from "../hooks/useNavigationContext";

function Navbar() {
  return (
    <div className="bg-white flex justify-center md:h-20 h-16 w-full shadow-sm items-center fixed z-10">
      <DesktopNav />
      <PhoneNav />
    </div>
  );
}
function DesktopNav() {
  const [isSearchFocussed, setIsSearchFocussed] = useState(false);
  const { menuType, setIsHover, setMenuType } = UseNavigationContext();

  const handleMouseEnter = (d) => {
    setIsHover(true);
    setMenuType(d);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setMenuType("");
  };
  return (
    <div className="h-full w-full items-center justify-around md:flex hidden">
      <div className="flex items-center gap-6 ml-4 h-full">
        <div className="md:flex hidden w-14 h-12">
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710335387/ecommerce_assets/s6zpsidolphtf34czzuy.png" />
        </div>
        <nav className="lg:flex h-full items-center gap-4 hidden">
          <li
            className={`list-none  cursor-pointer font-bold  uppercase text-textmedium h-full text-center flex justify-center items-center border-b-4  ${
              menuType === "mens" ? "border-b-red-600 " : "border-b-white"
            } w-16`}
            onMouseEnter={() => handleMouseEnter("mens")}
            onMouseLeave={() => handleMouseLeave()}
          >
            Men
          </li>
          <li
            className={`list-none cursor-pointer font-bold text-textmedium uppercase h-full text-center w-16 flex justify-center border-b-4 items-center ${
              menuType === "women" ? "border-b-pink-600 " : "border-b-white"
            }`}
            onMouseEnter={() => handleMouseEnter("women")}
            onMouseLeave={() => handleMouseLeave()}
          >
            Women
          </li>
          <li
            className={`list-none cursor-pointer font-bold text-textmedium uppercase h-full justify-center items-center flex w-16 border-b-4  ${
              menuType === "kids" ? "border-b-orange-500" : "border-b-white"
            }`}
            onMouseEnter={() => handleMouseEnter("kids")}
            onMouseLeave={() => handleMouseLeave()}
          >
            Kids
          </li>
          <li
            className={`list-none cursor-pointer font-bold  text-textmedium uppercase h-full justify-center items-center flex w-32  border-b-4  ${
              menuType === "homeandliving"
                ? "border-b-yellow-500"
                : "border-b-white"
            }`}
            onMouseEnter={() => handleMouseEnter("homeandliving")}
            onMouseLeave={() => handleMouseLeave()}
          >
            Home & Living
          </li>
          <li
            className={`list-none cursor-pointer font-bold text-gray-700 uppercase h-full justify-center items-center flex w-16  border-b-4  ${
              menuType === "beauty" ? "border-b-emerald-500" : "border-b-white"
            }`}
            onMouseEnter={() => handleMouseEnter("beauty")}
            onMouseLeave={() => handleMouseLeave()}
          >
            Beauty
          </li>
          <li
            className="list-none cursor-pointer font-bold text-gray-700 uppercase h-full justify-center items-center flex w-16 hover:border-b-4  hover:border-b-fuchsia-600 border-b-4 border-b-white"
            onMouseEnter={() => handleMouseEnter("studio")}
            onMouseLeave={() => handleMouseLeave()}
          >
            Studio
          </li>
        </nav>
      </div>

      <div
        className={`p-2 border rounded md:flex hidden w-96  items-center bg-neutralgray gap-4 group group-focus:bg-white ${
          isSearchFocussed && "bg-white"
        }`}
      >
        <CiSearch className="text-xl font-bold" />
        <input
          type="text"
          className="group grow outline-none focus:bg-white bg-neutralgray"
          placeholder="Search for products,brands and more"
          onFocus={() => setIsSearchFocussed(true)}
          onBlur={() => setIsSearchFocussed(false)}
        />
      </div>
      <div className="gap-8 h-full md:flex hidden">
        <div
          className="flex justify-center items-center flex-col h-full border-b-4 border-b-white hover:border-b-red-500 transition-all duration-75 px-2"
          onMouseEnter={() => {
            handleMouseEnter("profile");
          }}
          onMouseLeave={() => {
            handleMouseLeave();
          }}
        >
          <CiUser className="text-2xl" />
          <span className=" font-bold text-sm text-textmedium">Profile</span>
        </div>
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <CiHeart className="text-2xl" />
          <span className=" font-bold text-sm text-textmedium">Wishlist</span>
        </div>
        <div className="flex justify-center items-center flex-col cursor-pointer">
          <PiBagSimpleLight className="text-2xl" />
          <span className="font-bold text-sm text-textmedium">Bag</span>
        </div>
      </div>
    </div>
  );
}

function PhoneNav() {
  const { setPhoneNav } = UseNavigationContext();
  return (
    <div className="md:hidden flex justify-between w-full items-center px-4">
      <div className="flex gap-2">
        <HiMiniBars3 className="text-2xl" onClick={() => setPhoneNav(true)} />
        <span className="font-bold text-gray-600 ">Myntra</span>
      </div>
      <div className="flex gap-4">
        <span>
          <CiSquarePlus className="text-2xl" />
        </span>
        <span>
          <CiSearch className="text-2xl" />
        </span>
        <span>
          <CiHeart className="text-2xl" />
        </span>
        <span>
          <PiBagSimpleLight className="text-2xl" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
