import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  useEditProductDetailsMutation,
  useGetSingleProductQuery,
} from "@/store";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function PreProductPage() {
  return (
    <div className="p-4 bg-green-400">
      Select product, to see the content inside.
    </div>
  );
}

function ProductPage() {
  const [editState, setEditState] = useState({
    isEditing: false,
    field: "",
    value: "",
  });

  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const { data, isLoading } = useGetSingleProductQuery(productId);
  const [editProduct] = useEditProductDetailsMutation();

  const handleEdit = ({ field, value }) => {
    setEditState((prevValue) => {
      return { ...prevValue, isEditing: true, field: field, value: value };
    });
  };
  const handleSave = async () => {
    const newData = {
      product_id: productId,
      field: editState.field,
      updated_value: editState.value,
    };
    try {
      await editProduct(newData);
      setEditState((prevValue) => {
        return { ...prevValue, isEditing: false };
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>data is loading...</div>
      ) : (
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
            <div className="text-orange-500 font-extrabold">
              ProductId:{data.product.product_id}
            </div>
            <div className="p-4 bg-white rounded flex gap-6 border-[1px]">
              <div className="flex flex-col gap-4 w-3/5 my-4">
                <div>
                  <span className="font-bold">Title: </span>
                  {editState.isEditing && editState.field === "title" ? (
                    <div className="flex gap-4">
                      <input
                        className="px-2 rounded border-2 flex-grow"
                        value={editState.value}
                        onChange={(e) =>
                          setEditState((prevValue) => {
                            return { ...prevValue, value: e.target.value };
                          })
                        }
                      />
                      <button
                        onClick={handleSave}
                        className="bg-green-500 rounded text-white border-2 px-2 py-1"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      {data.product.title}

                      <button
                        onClick={() =>
                          handleEdit({
                            field: "title",
                            value: data.product.title,
                          })
                        }
                        className={`bg-red-600 text-white rounded text-sm px-1 m-2 ${
                          editState.isEditing && "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={editState.isEditing}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
                <div>
                  <span className="font-bold">Brand: </span>
                  {editState.isEditing && editState.field === "brand" ? (
                    <div className="flex gap-4">
                      <input
                        className="px-2 rounded border-2 flex-grow"
                        value={editState.value}
                        onChange={(e) =>
                          setEditState((prevValue) => {
                            return { ...prevValue, value: e.target.value };
                          })
                        }
                      />
                      <button
                        onClick={handleSave}
                        className="bg-green-500 rounded text-white border-2 px-2 py-1"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      {data.product.brand}

                      <button
                        onClick={() =>
                          handleEdit({
                            field: "brand",
                            value: data.product.brand,
                          })
                        }
                        className="bg-red-600 text-white rounded text-sm px-1 m-2"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
                {/* <div>
                  <h1>
                    <span className="font-bold">Brand: </span>
                    {data.product.brand}
                  </h1>
                </div> */}
                {/* <div>
                  <h1>
                    <span className="font-bold">Product Story:</span>
                    {data.product.product_story}
                  </h1>
                </div> */}
                <div>
                  <span className="font-bold">Product Story: </span>
                  {editState.isEditing &&
                  editState.field === "product_story" ? (
                    <div className="flex gap-4">
                      <input
                        className="px-2 rounded border-2 flex-grow"
                        value={editState.value}
                        onChange={(e) =>
                          setEditState((prevValue) => {
                            return { ...prevValue, value: e.target.value };
                          })
                        }
                      />
                      <button
                        onClick={handleSave}
                        className="bg-green-500 rounded text-white border-2 px-2 py-1"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      {data.product.product_story}

                      <button
                        onClick={() =>
                          handleEdit({
                            field: "product_story",
                            value: data.product.product_story,
                          })
                        }
                        className="bg-red-600 text-white rounded text-sm px-1 m-2"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
                <div>
                  <span className="font-bold">MRP: </span>
                  {editState.isEditing && editState.field === "MRP" ? (
                    <div className="flex gap-4">
                      <input
                        className="px-2 rounded border-2 flex-grow"
                        value={editState.value}
                        onChange={(e) =>
                          setEditState((prevValue) => {
                            return { ...prevValue, value: e.target.value };
                          })
                        }
                      />
                      <button
                        onClick={handleSave}
                        className="bg-green-500 rounded text-white border-2 px-2 py-1"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <>
                      {data.product.MRP}

                      <button
                        onClick={() =>
                          handleEdit({
                            field: "MRP",
                            value: data.product.MRP,
                          })
                        }
                        className="bg-red-600 text-white rounded text-sm px-1 m-2"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
                {/* <div>
                  <h1>
                    <span className="font-bold">MRP:</span> {data.product.MRP}
                  </h1>
                </div> */}
                <div className="border border-gray-400 rounded px-2 flex flex-col gap-4 py-4">
                  <h1 className="text-center font-extrabold text-orange-600">
                    Product details:
                  </h1>
                  {Object.entries(data.product.product_details).map(
                    ([property, value]) => {
                      return (
                        <div key={property}>
                          <h1 className="font-bold">{property}:</h1>
                          <p className="text-[14px]">{value}</p>
                        </div>
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
                      <div key={property}>
                        <h1>
                          <span className="font-bold">{property} </span>
                          {value}
                        </h1>
                      </div>
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
