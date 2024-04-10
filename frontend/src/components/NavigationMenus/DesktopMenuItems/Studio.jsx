import { FaChevronRight } from "react-icons/fa";
function Studio() {
  return (
    <div className="w-full h-full p-6 text-center">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold flex gap-2 justify-center items-center">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709882908/ecommerce_assets/lqkgu02dtdvjm9gjwymr.png" />
            Studio
          </h1>
          <p className="text-xl">Your Daily inspiration for everyday fashion</p>
        </div>
        <div>
          <img
            className="h-full w-full"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1709963566/ecommerce_assets/s2m8hi9ni1zf2ridkplt.jpg"
          />
        </div>
        <button className="flex w-64 py-2 border-2 rounded justify-center items-center mx-auto gap-4 font-bold text-lg">
          Explore Studio <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Studio;
