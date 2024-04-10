import { Link } from "react-router-dom";

function BeautyItems() {
  return (
    <div className="flex px-4 justify-between">
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-500 font-bold">Makeup</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Lipstick</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Lip Gloss</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Lip Liner</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Mascara</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Eyeliner</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Kajal</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Eyeshadow</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Foundation</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Primer</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Concealer</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Compact</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Nail Polish</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-500 font-bold">Skincare,Bath & Body</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Face Moisturiser</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Cleanser</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Masks & Peel</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Sunscreen</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Serum</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Face Wash</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Eye Cream</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Lip Balm</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Body Lotion</Link>
            </li>
            <li>
              <Link>Body Wash</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Body Scrub</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Hand Cream</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-emerald-500 font-bold">
            <Link>Baby Care</Link>
          </h1>
        </div>
        <div>
          <h1 className="text-emerald-500 font-bold">
            <Link>Masks</Link>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-500 font-bold">
            <Link>Haircare</Link>
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Shampoo</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Conditioner</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Hair Cream</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Hair Oil</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Hair Gel</Link>
            </li>
            <li>
              <Link>Hair Color</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Hair Serum</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Hair Accessory</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-emerald-500 font-bold">Fragrances</h1>
            <ul className="flex flex-col gap-1">
              <li className="hover:font-bold">
                <Link>Perfume</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Deodrant</Link>
              </li>
              <li className="hover:font-bold">
                <Link>Body Mist</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-gray-50 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-500 font-bold">Appliances</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Hair Straightener</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Hair Dryer</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Epilator</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-500 font-bold">Men&apos;s Grooming</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">Trimmers</li>
            <li className="hover:font-bold">Beard Oil</li>
            <li className="hover:font-bold">Hair Wax</li>
          </ul>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-500 font-bold">
            Beauty Gift & Makeup Set
          </h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Beauty Gift</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Makeup Kit</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h1 className="text-emerald-500 font-bold">
            <Link>Premium Beauty</Link>
          </h1>
        </div>
        <div>
          <h1 className="text-emerald-500 font-bold">
            <Link>Wellness & Hygiene</Link>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 w-[240px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-500 font-bold">Top Brands</h1>
          <ul className="flex flex-col gap-1">
            <li className="hover:font-bold">
              <Link>Lakme</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Maybelline</Link>
            </li>
            <li className="hover:font-bold">
              <Link>LOreal</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Philips</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Bath & Body Works</Link>
            </li>
            <li className="hover:font-bold">
              <Link>THE BODY SHOP</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Biotique</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Mamaearth</Link>
            </li>
            <li className="hover:font-bold">
              <Link>MCaffeine</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Nivea</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Lotus Herbals</Link>
            </li>
            <li className="hover:font-bold">
              <Link>LOreal Professionnel</Link>
            </li>
            <li className="hover:font-bold">
              <Link>KAMA AYURVEDA</Link>
            </li>
            <li className="hover:font-bold">
              <Link>M.A.C</Link>
            </li>
            <li className="hover:font-bold">
              <Link>Forest Essentials</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BeautyItems;
