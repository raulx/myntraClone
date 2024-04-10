import { Link } from "react-router-dom";

function HomeAndLivingItems() {
  return (
    <div className="flex justify-between px-4">
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">Bed Lines & Furnishing</h1>
          <ul className="flex flex-col gap-1">
            <li className=" hover:font-bold ">
              <Link>Bed Runners</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Mattress Protectors</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Bedsheets</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Bedding Sets</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Blankets,Quilts & Dohars</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Pillows & Pillow Covers</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Bed Covers</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Diwan Sets</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Chair Pads & Covers</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Sofa Covers</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-yellow-500 font-bold">Flooring</h1>
            <ul className="flex flex-col gap-1">
              <li className="hover:font-bold">
                <Link>Floor Runners</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Carpets</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Floor Mats & Dhurries</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Door Mats</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">Bath</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Bath Towels</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Hand & Face Towels</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Beach Towels</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Towels Set</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Bath Robes</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Bathroom Accessories</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Shower Curtains</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">
            <Link>Lamps & Lighting</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Floor Lamps</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Ceiling Lamps</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Table Lamps</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Wall Lamps</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Outdoor Lamps</Link>
            </li>
            <li className="hover:font-bold">
              <Link>String Lights</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">
            <Link>Home Decor</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Plants & Planters</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Aromas & Candles</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Clocks</Link>Clocks
            </li>
            <li className="hover:font-bold">
              <Link>Mirrors</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Wall Decor</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Festive Decor</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Pooja Essentials</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Wall Shelves</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Fountains</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Showpieces & Vases</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Ottoman</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-yellow-500 font-bold">
            <Link>Cushions & Cushion Covers</Link>
          </h1>
        </div>
        <div>
          <h1 className="text-yellow-500 font-bold">
            <Link>Curtains</Link>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50 w-[240px]">
        <div>
          <h1 className="text-yellow-500 font-bold">
            <Link>Home Gift Sets</Link>
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">
            <Link>Kitchen & Table</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Table Runners</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Dinnerware & Serveware</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Cups and Mugs</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Bakeware & Cookware</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Kitchen Storage & Tools</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Bar & Drinkware</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Table Covers & Furnishings</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-yellow-500 font-bold">Storage</h1>
            <ul className="flex flex-col gap-1">
              <li className="hover:font-bold">
                <Link>Bins</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Hangers</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Organisers</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Hooks & Holders</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Laundry Bags</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 font-bold">Brands</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>H&M</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Marks & Spencer</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Home Center</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Spaces</Link>
            </li>
            <li className="hover:font-bold">
              <Link>D&apos;Decor</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Story@Home</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Pure Home & Living</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Swayam</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Raymond Home</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Maspar</Link>
            </li>
            <li className="hover:font-bold">
              <Link>My Trident</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Cortina</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Random</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Ellementry</Link>
            </li>
            <li>
              <Link>ROMEE</Link>
            </li>
            <li className="hover:font-bold">
              <Link>SEJ by Nisha Gupta</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeAndLivingItems;
