import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function PreProductPage() {
  return (
    <div className="p-4 bg-green-400">
      Select product, to see the content inside.
    </div>
  );
}
// bg-[#ffc9ef]
function ProductPage() {
  return (
    <ScrollArea className="h-[62%] w-[700px] my-2 px-4">
      <div className=" bg-red-200 p-4 flex flex-col gap-4 rounded border">
        <div className="bg-white p-4 rounded flex gap-4 items-center border-2 border-[#ffc9ef]">
          <div className="flex flex-col gap-4 items-center">
            <div className="grid grid-cols-2 grid-rows-3 h-[140px] w-[140px] gap-2">
              <div className="col-span-1 row-span-1 cursor-pointer">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full"
                />
              </div>
              <div className="col-span-1 row-span-1 bg-gray-200 cursor-pointer">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full"
                />
              </div>
              <div className="col-span-1 row-span-1 bg-red-500 cursor-pointer">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full"
                />
              </div>
              <div className="col-span-1 row-span-1 bg-yellow-200 cursor-pointer">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full"
                />
              </div>
              <div className="col-span-1 row-span-1 bg-orange-400 cursor-pointer">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full"
                />
              </div>
              <div className="col-span-1 row-span-1 bg-green-300 cursor-pointer">
                <img
                  src="https://picsum.photos/200/300"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-red-400 text-white rounded-lg py-[2px]">
                Delete Image
              </button>
              <button className="bg-green-400 text-white rounded-lg py-[4px]">
                Upload more Images
              </button>
            </div>
          </div>
          <div className="w-[450px] h-[300px] border-2">
            <img
              src="https://picsum.photos/200/300"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="text-orange-500 font-extrabold">ProductId:221245</div>
        <div className="p-4 bg-white rounded flex gap-6 border-[1px]">
          <div className="flex flex-col gap-4 w-3/5 my-4">
            <div>
              <h1>
                <span className="font-bold">Title:</span> new myntra collection
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Brand:</span> Roadster
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Product Story:</span> This is one of
                the best collection available in the market
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">MRP:</span> 1212
              </h1>
            </div>
            <div className="border border-gray-400 rounded px-2 flex flex-col gap-4 py-4">
              <h1 className="text-center font-extrabold text-orange-600">
                Product details:
              </h1>
              <div>
                <h1 className="font-bold">Product design details:</h1>
                <p className="text-[14px]">
                  Maroon Solid formal shirt,has a spread collar,long sleeves
                  button packet and curved hem
                </p>
              </div>
              <div>
                <h1 className="font-bold">Size and Fit:</h1>
                <p className=" text-[14px]">
                  Regular Fit The Model (height 6&apos;) is wearing size 40
                </p>
              </div>
              <div>
                <h1 className="font-bold">Material & Care</h1>
                <p className="text-[14px]">Material cotton Machine wash</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-2/5">
            <h1 className=" text-orange-600 font-extrabold">Specifications</h1>
            <div>
              <h1>
                <span className="font-bold">Fabric: </span>
                cotton
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Fit: </span>
                slim fit
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">length: </span>
                2xl
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Neck: </span>
                Mandarin
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Occasion: </span>
                Festive
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Pattern: </span>
                Checked Pattern
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Pattern Coverage: </span>
                full body
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Print Or Pattern Type: </span>
                Regular Pattern with patches on the body
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Sleeve Length: </span>
                full sleeves
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Sleeve Styling: </span>
                sqaure cut
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Sustainable: </span>
                20 wash
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Wash Care: </span>
                Regular Wash
              </h1>
            </div>
            <div>
              <h1>
                <span className="font-bold">Weave Type: </span>
                Chikankari
              </h1>
            </div>
          </div>
        </div>
        <button className="p-2 bg-red-600 text-white rounded w-32 self-end">
          Remove Item
        </button>
      </div>
      <ScrollBar />
    </ScrollArea>
  );
}
export default ProductPage;
export { PreProductPage };
