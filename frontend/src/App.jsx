import "./App.css";
import Navbar from "./components/Navbar";
import UseNavigationContext from "./hooks/useNavigationContext";
import DesktopNavigationMenu from "./components/NavigationMenus/DesktopNavigationMenu";
import PhoneNavigationMenu from "./components/NavigationMenus/PhoneNavigationMenu";
import { Outlet } from "react-router-dom";

// "https://rich-pear-coyote-wig.cyclic.app/"
// "http://localhost:3300"
function App() {
  const { ishover, menuType } = UseNavigationContext();

  return (
    <div className="bg-neutralgray relative">
      <nav>
        {/* note:ishover and menutype states are toggled inside navbar component*/}
        <Navbar />
        {/* note:DesktopNavigationMenu and PhoneNavigationMenu are separate navigation 
        menus for desktop and phone screens any change in one menu must be implemented
         on the other.  */}
        {ishover && <DesktopNavigationMenu menuCategory={menuType} />}
        <PhoneNavigationMenu />
      </nav>
      <main>
        <div className="md:pt-20 pt-16">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
