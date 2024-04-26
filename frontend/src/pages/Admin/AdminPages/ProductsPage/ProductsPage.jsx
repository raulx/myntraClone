import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const products = [
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxaxdww",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232251",
    brand: "roadster",
    title: "dwaxawweqewradf",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "236211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "233411",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232277",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232901",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "098211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232281",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "896511",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232976",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "256211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "254351",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232875",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "238941",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232781",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "299011",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
];

function ProductsPage() {
  const { register, handleSubmit } = useForm();
  const [searchParams] = useSearchParams();

  const productSelected = searchParams ? searchParams.get("productId") : null;

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <motion.div
      key="product page"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="p-4"
    >
      <div className="flex">
        <div className="flex flex-col h-[630px] rounded border shadow overflow-hidden bg-[#FFF8F8] p-2">
          <div className="flex items-center justify-end">
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
          <div className="my-2">Total Products:</div>

          <div className="w-[540px]">
            <div className="grid grid-cols-12 bg-[#F41CB2] py-2  border rounded text-white">
              <div className="col-span-2 flex justify-center items-center">
                ProductId
              </div>
              <div className="col-span-2 flex justify-center items-center">
                Brand
              </div>
              <div className="col-span-3 flex justify-center items-center">
                Title
              </div>
              <div className="col-span-2 flex justify-center items-center">
                MRP
              </div>
              <div className="col-span-3 flex justify-center items-center">
                seller_name
              </div>
            </div>
            <ScrollArea className="h-[500px] px-2">
              <div>
                {products.map((d) => {
                  return (
                    <Link
                      key={d.title}
                      to={`/page/admin/products/product/?productId=${d.product_id}`}
                    >
                      <div
                        className={`grid cursor-pointer grid-cols-12 my-2 py-2 border-2 bg-[#FFE7F8] font-semibold rounded hover:border-black ${
                          productSelected === d.product_id && "border-black"
                        }`}
                      >
                        <div className="col-span-2 flex justify-center items-center">
                          {d.product_id}
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                          {d.brand}
                        </div>
                        <div className="col-span-3 flex justify-center items-center">
                          {d.title}
                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                          {d.MRP}
                        </div>
                        <div className="col-span-3 flex justify-center items-center">
                          {d.seller_name}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-4">
                load more...
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}

export default ProductsPage;
