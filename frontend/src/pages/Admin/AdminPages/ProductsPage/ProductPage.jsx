import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetSingleProductQuery } from "@/store";
import { useSearchParams } from "react-router-dom";

import EditableRegularTextField, {
  NestedProductDetailFeild,
} from "@/components/EditableTextField";

function PreProductPage() {
  return (
    <div className="p-4 bg-green-400">
      Select product, to see the content inside.
    </div>
  );
}

function ProductPage() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const { data, isLoading } = useGetSingleProductQuery(productId);

  return (
    <>
      {isLoading ? (
        <div>data is loading...</div>
      ) : (
        <ScrollArea className="h-[40%] w-[700px] my-2 px-4">
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
            <div className="text-orange-500 font-extrabold">
              ProductId:{data.product.product_id}
            </div>
            <div className="p-4 bg-white rounded flex gap-6 border-[1px]">
              <div className="flex flex-col gap-4 w-3/5 my-4">
                <EditableRegularTextField
                  fieldName={"title"}
                  productData={data}
                />
                <EditableRegularTextField
                  fieldName={"brand"}
                  productData={data}
                />
                <EditableRegularTextField
                  fieldName={"product_story"}
                  productData={data}
                />

                <EditableRegularTextField
                  fieldName={"MRP"}
                  productData={data}
                />

                <div className="border border-gray-400 rounded px-2 flex flex-col gap-4 py-4">
                  <h1 className="text-center font-extrabold text-orange-600">
                    Product details:
                  </h1>
                  {Object.entries(data.product.product_details).map(
                    ([property, value]) => {
                      return (
                        <NestedProductDetailFeild
                          field={property}
                          key={property}
                          currentValue={value}
                          productId={data.product.product_id}
                          fieldType="product_details"
                        />
                      );
                    }
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 w-2/5">
                <h1 className=" text-orange-600 font-extrabold">
                  Specifications
                </h1>
                {Object.entries(data.product.specifications).map(
                  ([property, value]) => {
                    return (
                      <NestedProductDetailFeild
                        field={property}
                        key={property}
                        currentValue={value}
                        productId={data.product.product_id}
                        fieldType="specifications"
                      />
                    );
                  }
                )}
              </div>
            </div>
            <button className="p-2 bg-red-600 text-white rounded w-32 self-end">
              Remove Item
            </button>
          </div>
          <ScrollBar />
        </ScrollArea>
      )}
    </>
  );
}

export default ProductPage;
export { PreProductPage };
