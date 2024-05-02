import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetSingleProductQuery } from "@/store";
import { useSearchParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import "react-lazy-load-image-component/src/effects/blur.css";

import EditableRegularTextField, {
  NestedProductDetailFeild,
} from "@/components/EditableTextField";
import ImageBox from "@/components/ImageBox";

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
        <div className="h-screen flex justify-center items-center w-full bg-red">
          <ClipLoader color="#f22" />
        </div>
      ) : (
        <ScrollArea className="h-[38%] w-[700px] my-2 px-4">
          <div className=" bg-red-200 p-4 flex flex-col gap-4 rounded border">
            <ImageBox
              images={data.product.images}
              product_id={data.product.product_id}
            />
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
