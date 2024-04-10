import { Link } from "react-router-dom";

function WomenItems() {
  return (
    <div className="flex justify-between px-4">
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">
            <Link to={"/fusion-wear"}>Indian & Fusion Wear</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/women-kurtas-kurtis-suits"}>Kurtas & Suits</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/ethnic-tops"}>Kurtis,Tunics & Tops</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/saree"}>Sarees</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-ethnic-wear"}>Ethnic Wear</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-ethnic-bottomwear"}>
                Leggings,Salwars & Churidars
              </Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/skirts-plazzos"}>Skirts & Plazzos</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/dress-material"}>Dress Materials</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/lehenga-cholis"}>Lehenga Cholis</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/dupatta-and-shawls"}>Dupattas & Shawls</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-jackets"}>Jackets</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">
            <Link to={"/women-belts-and-scarves"}>Belts,Scarves & More</Link>
          </h1>
          <h1 className="text-pink-600 font-bold text-md">
            <Link to={"/watches-and-wearables"}>Watches & Wearables</Link>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">
            <Link to={"/women-western-wear"}>Western Wear</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/dresses"}>Dresses</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/tops"}>Tops</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/tshirts"}>Tshirts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-jeans"}>Jeans</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-trousers"}>Trousers & Capris</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-shorts-skirts"}>Shorts & Skirts</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/myntra-fashion-store"}>Co-ords</Link>
            </li>
            <li>
              <Link to={"/playsuits"}>Play suits</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/jumpsuits"}>Jumpsuits</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-shrugs"}>Shrugs</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-sweater-sweatshirts"}>
                Sweaters & Sweatshirts
              </Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-jacket-coats"}>Jackets & Coats</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/women-blazer-waistcoats"}>Blazers & Waistcoats</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-pink-600 font-bold text-md">Plus Size</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 w-[240px] ">
        <div>
          <h1 className="text-pink-600 font-bold text-md">Maternity</h1>
        </div>
        <div>
          <h1 className="text-pink-600 font-bold text-md">
            Sunglasses & Frames
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">Footwear</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Flats</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Casual Shoes</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Heels</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Boots</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Sports Shoes & Floaters</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">
            Sports & Active Wear
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Clothing</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Footwear</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Sports Accesories</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Sports Equipment</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">
            Lingerie & Sleepwear
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-sports-shoes"}>Bra</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-sports-sandals"}>Briefs</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-active-tshirts"}>Shapewear</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-trackpants-and-shorts"}>
                Sleepwear & Loungewear
              </Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-tracksuits"}>Swimwear</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-jackets-and-sweatshirts"}>
                Camisoles & Thermals
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">
            Beauty & Personal Care
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-smart-wearables"}>Makeup</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-fitness-gadgets"}>Skincare</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-headphones"}>Premium Beauty</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-speakers"}>Lipsticks</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-speakers"}>Fragrances</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">Gadgets</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link to={"/men-wallets"}>Smart Wearables</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-belts"}>Fitness Gadgets</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-perfume-and-body-mist"}>Headphones</Link>
            </li>
            <li className="hover:font-bold">
              <Link to={"/men-deodrants"}>Speakers</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-pink-600 font-bold text-md">Jewellery</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Fashion Jewellery</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Fine Jewellery</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Earrings</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-pink-600 font-bold text-md">Backpacks</h1>
        </div>
        <div>
          <h1 className="text-pink-600 font-bold text-md">
            Handbags,Bags and Wallets
          </h1>
        </div>
        <div>
          <h1 className="text-pink-600 font-bold text-md">
            Luggage & Trolleys
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WomenItems;
