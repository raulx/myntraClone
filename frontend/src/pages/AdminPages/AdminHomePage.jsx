import { Navbar, Image } from "react-bootstrap";
import { TypographyH3 } from "../../components/Typography/Typography.jsx";
import { FaBuildingColumns } from "react-icons/fa6";
function AdminHomePage() {
  return (
    <Navbar className="w-screen border-b-2 py-2 px-8 flex justify-between items-center">
      <Navbar.Brand href="#home">
        <Image src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710335387/ecommerce_assets/s6zpsidolphtf34czzuy.png" />
      </Navbar.Brand>
      <div>
        <TypographyH3 className="text-red-500 font-extrabold">
          Administration
        </TypographyH3>
        <TypographyH3 className="text-red-500  text-center justify-center items-center gap-4 font-extrabold flex">
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
