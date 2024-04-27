import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function PreProductPage() {
  return (
    <div className="p-4 bg-green-400">
      Select product, to see the content inside.
    </div>
  );
}

function ProductPage() {
  return (
    <ScrollArea className="h-[60%]  my-2">
      <div className="bg-[#ffc9ef] p-4 flex flex-col gap-4">
        <div className="bg-white p-4 rounded flex gap-4 items-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="grid grid-cols-2 grid-rows-3 h-[120px] w-[120px]">
              <div className="col-span-1 row-span-1 bg-slate-400">
                {/* <img src="https://picsum.photos/200/300" /> */}
              </div>
              <div className=" col-span-1 row-span-1 bg-gray-200">
                {/* <img src="https://picsum.photos/200/300" /> */}
              </div>
              <div className=" col-span-1 row-span-1 bg-red-500">
                {/* <img src="https://picsum.photos/200/300" /> */}
              </div>
              <div className=" col-span-1 row-span-1 bg-yellow-200">
                {/* <img src="https://picsum.photos/200/300" /> */}
              </div>
              <div className=" col-span-1 row-span-1 bg-orange-400">
                {/* <img src="https://picsum.photos/200/300" /> */}
              </div>
              <div className=" col-span-1 row-span-1 bg-green-300">
                {/* <img src="https://picsum.photos/200/300" /> */}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-red-400 text-white rounded-lg">
                Delete Image
              </button>
              <button className="px-2 bg-green-400 text-white rounded-lg">
                Upload more Images
              </button>
            </div>
          </div>
          <div className="w-[450px] h-[300px] bg-violet-500"></div>
        </div>
        <div className="text-orange-500 font-extrabold">ProductId:221245</div>
        <div className="px-2 py-4 bg-white rounded flex gap-4">
          <div className="flex flex-col gap-4 w-1/2">
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
          </div>
          <div className="flex flex-col gap-2">
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
      </div>
      <ScrollBar />
    </ScrollArea>
  );
}
export default ProductPage;
export { PreProductPage };
