import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useDeleteProductMutation, useGetSingleProductQuery } from "@/store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductById } from "@/store";
import "react-lazy-load-image-component/src/effects/blur.css";

import EditableRegularTextField, {
  NestedProductDetailFeild,
} from "@/components/EditableTextField";
import ImageBox from "@/components/ImageBox";
import toast from "react-hot-toast";

function PreProductPage() {
  const navigate = useNavigate();
  const { products } = useSelector((state) => {
    return state.productData;
  });
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  // show the if product when product data gets loaded
  useEffect(() => {
    if (productId != "" && products[0]) {
      navigate(
        `/page/admin/products/product/?productId=${products[0].product_id}`
      );
    }
  }, [navigate, products, productId]);
  return (
    <div className="p-4 bg-green-400">
      Select product, to see the content inside.
    </div>
  );
}

function ProductPage() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const { data, isLoading, isError } = useGetSingleProductQuery(productId);
  const navigate = useNavigate();
  const { products } = useSelector((state) => {
    return state.productData;
  });
  const dispatch = useDispatch();

  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const handleProductDelete = async (productId) => {
    try {
      const res = await deleteProduct(productId);

      if (res.data.status === 200) {
        toast.success(res.data.message);
        dispatch(removeProductById(productId));

        navigate(
          `/page/admin/products/product/?productId=${
            products[products.length - 2].product_id
          }`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isError) {
    toast.error("Network Error");
    navigate("/page/admin/products/");
  }

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
            <button
              className="p-2 bg-red-600 text-white rounded  self-end"
              onClick={() => handleProductDelete(productId)}
            >
              {isDeleting ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaTrash />
              )}
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
