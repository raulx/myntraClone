import UseNavigationContext from "../../hooks/useNavigationContext";
import { menuItems } from "../../utils/Data";
import Accordion from "../Accordion";
import { Link } from "react-router-dom";

function PhoneNavigationMenu() {
  const { phoneNav, setPhoneNav } = UseNavigationContext();

  return (
    <>
      {phoneNav && (
        <div
          className="h-screen w-screen fixed top-0 left-0 overflow-hidden z-10 bg-black opacity-45"
          onClick={() => setPhoneNav(false)}
        ></div>
      )}

      <div
        className={`h-full w-3/4 bg-white z-10  fixed block md:hidden transition-all duration-75 ease-out left-0 top-0 overflow-y-scroll ${
          phoneNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full mb-4">
          <img
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711114729/ecommerce_assets/mobilescreenassets/rwizhghzccqosw7fraiv.jpg"
            className="w-full h-full"
          />
        </div>
        {menuItems.map((item, index) => {
          return (
            <Accordion key={index} title={item.title} bold>
              {item.children.map((item, index) => {
                if (item.children) {
                  return (
                    <Accordion key={index} title={item.title}>
                      <ul className="flex flex-col gap-4">
                        {item.children.map((item, index) => {
                          return (
                            <li key={index} className="px-4 py-2">
                              <Link to={item.url}>{item.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </Accordion>
                  );
                } else {
                  return (
                    <div key={index} className="p-4 ">
                      <Link to={item.url}>{item.title}</Link>
                    </div>
                  );
                }
              })}
            </Accordion>
          );
        })}
        <hr className="mt-4" />
        <div className="flex flex-col gap-2 p-4">
          <div className="h-12">
            <Link to={"/myntra-studio"}>Myntra Studio</Link>
          </div>
          <div className="h-12">
            <Link to={"/myntra-mall"}>Myntra Mall</Link>
          </div>
          <div className="h-12">
            <Link to={"/myntra-insider"}>Myntra Insider</Link>
          </div>
          <div className="h-12">
            <Link to={"/myntra-gift-cards"}>Gift Cards</Link>
          </div>
          <div className="h-12">
            <Link to={"/myntra-contact-us"}>Contact Us</Link>
          </div>
          <div className="h-12">
            <Link to={"/FAQS"}>FAQs</Link>
          </div>
        </div>
        <div className="w-full h-32">
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711114697/ecommerce_assets/mobilescreenassets/uhssp8vzivp11omhkgfg.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default PhoneNavigationMenu;
