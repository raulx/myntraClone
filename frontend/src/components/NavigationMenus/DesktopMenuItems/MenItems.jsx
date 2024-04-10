import { Link } from "react-router-dom";

function MenItems() {
  return (
    <div className="flex  justify-between px-4">
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">Topwear</h1>
          <ul className="flex flex-col gap-1">
            <li className=" hover:font-bold ">
              <Link to={"/men-tshirts"}>T-shirts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-casual-shirts"}>Casual shirts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-formal-shirts"}>Formal shirts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sweatshirts"}>Sweatshirts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sweaters"}>Sweaters</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-jackets"}>Jackets</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-blazers-and-coats"}>Blazers & Coats</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-suits"}>Suits</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-rain-jackets"}>Rain Jackets</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">
            Indian & Festive Wear
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to="/men-kurtas-and-sets">Kurtas & Kurta Sets</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sherwanis"}>Sherwanis</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-nehru-jackets"}>Nehru Jackets</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-dhotis"}>Dhotis</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">Bottomwear</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-jeans"}>Jeans</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-casual-trousers"}>Casual Trousers</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-casual-trousers"}>Formal Trousers</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-casual-trousers"}>Shorts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-trackpants-and-joggers"}>
                Trackpants & joggers
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">
            Innerwear & Sleepwear
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-breifs-and-trunks"}>Briefs & Trunks</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-boxers"}>Boxers</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-vests"}>Vests</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sleepwear-and-loungewear"}>
                Sleepwear & Loungewear
              </Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-thermals"}>Thermals</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-md  text-red-500 font-bold">Plus Size</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">Footwear</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-casual-shoes"}>Casual Shoes</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sports-shoes"}>Sports Shoes</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-formal-shoes"}>Formal Shoes</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sneakers"}>Sneakers</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sandals-and-floaters"}>Sandals & Floaters</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-flip-flops"}>Flip Flops</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-socks"}>Socks</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">
            Personal Care & Grooming
          </h1>
          <h1 className="text-md  text-red-500 font-bold">
            Sunglasses & Frames
          </h1>
          <h1 className="text-md  text-red-500 font-bold">Watches</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">
            Sports & Active Wear
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-sports-shoes"}>Sports Shoes</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sports-sandals"}>Sports Sandals</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-active-tshirts"}>Active T-shirts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-trackpants-and-shorts"}>Trackpants & Shorts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-tracksuits"}>Tracksuits</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-jackets-and-sweatshirts"}>
                Jackets & Sweatshirts
              </Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sports-accesories"}>Sports Accesories</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-swimwear"}>Swimwear</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">Gadgets</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-smart-wearables"}>Smart Wearables</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-fitness-gadgets"}>Fitness Gadgets</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-headphones"}>Headphones</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-speakers"}>Speakers</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">
            Fashion Accessories
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-wallets"}>Wallets</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-belts"}>Belts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-perfume-and-body-mist"}>Perfume & body mist</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-deodrants"}>Deodorants</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-tie-cufflinks-and-pocket-sqaures"}>
                Ties Cufflink & Pocket Squares
              </Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-accesories-gift-sets"}>
                Accessories Gift sets
              </Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-accesories-gift-sets"}>Caps & Hats</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-mufflers-scarfs-and-gloves"}>
                Mufflers, Scarfs & Gloves
              </Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-phone-cases"}>Phone Cases</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-rings-and-wrists-wear"}>Rings & Writs Wears</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-helmets"}>Helmets</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-md  text-red-500 font-bold">Bags & Bagpacks</h1>
          <h1 className="text-md  text-red-500 font-bold">
            Luggage & Trolleys
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MenItems;
