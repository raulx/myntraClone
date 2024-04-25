import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
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
    product_id: "232211",
    brand: "roadster",
    title: "dwaxawweqewradf",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
  {
    product_id: "232211",
    brand: "roadster",
    title: "dwaxahhhrerds",
    MRP: "2122",
    seller_name: "hhrescsd",
  },
];

function ProductsPage() {
  const { register, handleSubmit } = useForm();

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
      <div className="flex flex-col h-[630px] rounded border shadow overflow-hidden bg-[#FFF8F8] p-2">
        <div className="flexitems-center justify-center">
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
          <ScrollArea className="h-[500px]">
            <div>
              {products.map((d) => {
                return (
                  <div
                    className="grid cursor-pointer grid-cols-12 my-2 py-2 border-2 bg-[#FFE7F8] font-semibold rounded "
                    key={d.title}
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
    </motion.div>
  );
}

export default ProductsPage;
