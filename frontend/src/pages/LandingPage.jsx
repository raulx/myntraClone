import LandingPageDesktop from "./LandingPageScreens/LandingPageDesktops";
import LandingPagePhone from "./LandingPageScreens/LandingPagePhone";
function LandingPage() {
  return (
    <div>
      <div className="md:block hidden">
        <LandingPageDesktop />
      </div>
      <div className="md:hidden block">
        <LandingPagePhone />
      </div>
    </div>
  );
}

export default LandingPage;
