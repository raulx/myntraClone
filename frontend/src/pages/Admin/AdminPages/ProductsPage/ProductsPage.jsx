import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetProductsQuery } from "@/store";
import { ClipLoader } from "react-spinners";

function ProductsPage() {
  const { register, handleSubmit } = useForm();
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useGetProductsQuery();
  const productSelected = searchParams
    ? Number(searchParams.get("productId"))
    : null;
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <motion.div
      key="product page"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="px-2"
    >
      <div className="flex gap-2">
        <div className="flex flex-col h-[630px] w-[44%] rounded border shadow overflow-hidden bg-[#FFF8F8] py-2">
          <div className="flex items-center justify-end px-2">
            <div className="self-end">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-4 items-center"
              >
                <label className="font-semibold">Search By Id :</label>

                <input
                  type="number"
                  {...register("productSearch", { required: true })}
                  className="px-2 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />

                <input
                  type="submit"
                  className="bg-white px-[20px] py-[2px] rounded-lg border-2 cursor-pointer hover:bg-gray-50"
                />
              </form>
            </div>
          </div>
          <div className="my-2 px-4 font-extrabold">
            Total Products:
            {data ? <span>{data.total}</span> : <span>loading...</span>}
          </div>

          <div className="w-[540px] flex flex-col">
            <div className="px-4">
              <div className="grid grid-cols-12 bg-[#F41CB2] py-2  border rounded text-white">
                <div className="col-span-2 flex justify-center items-center">
                  ProductId
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  Brand
                </div>
                <div className="col-span-6 flex justify-center items-center">
                  Title
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  MRP
                </div>
              </div>
            </div>
            {isLoading ? (
              <div className="h-[500px] w-full flex justify-center items-center">
                <ClipLoader color="#f22" />
              </div>
            ) : (
              <ScrollArea className="h-[500px] px-4 ">
                <div>
                  {data.products.map((d) => {
                    return (
                      <Link
                        key={d.title}
                        to={`/page/admin/products/product/?productId=${d.product_id}`}
                      >
                        <div
                          className={`grid cursor-pointer grid-cols-12 my-2 py-2 text-xs border-2 text-center bg-[#FFE7F8] font-semibold rounded hover:bg-[#ffc9ef] transition-all duration-200 ${
                            productSelected === d.product_id && "bg-[#ffc9ef] "
                          }`}
                        >
                          <div className="col-span-2 flex justify-center items-center">
                            {d.product_id}
                          </div>
                          <div className="col-span-2 flex justify-center items-center">
                            {d.brand}
                          </div>
                          <div className="col-span-6 flex justify-center items-center">
                            {d.title}
                          </div>
                          <div className="col-span-2 flex justify-center items-center">
                            {d.MRP}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex justify-center items-center mt-4 cursor-pointer">
                  load more...
                </div>
                <ScrollBar orientation="vertical" className="hidden" />
              </ScrollArea>
            )}
          </div>
        </div>
        <div className="w-[56%] flex-grow">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}

export default ProductsPage;
