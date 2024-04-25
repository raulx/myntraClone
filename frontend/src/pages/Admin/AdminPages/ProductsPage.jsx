import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

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
        <table className="min-w-full w-[500px] bg-white border text-xs ">
          <thead className="bg-[#F41CB2] text-white">
            <tr>
              <th className="px-4 py-2">ProductId</th>
              <th className="px-4 py-2">Brand</th>
              <th className="px-4 py-2">title</th>
              <th className="px-4 py-2">MRP</th>
              <th className="px-4 py-2">seller_name</th>
            </tr>
          </thead>

          <tbody className=" overflow-y-scroll">
            <tr className="bg-gray-100">
              <td className="px-4 py-2 font-bold">22321</td>
              <td className="px-4 py-2">roadster</td>
              <td className="px-4 py-2">new roadster men's tshirt</td>
              <td className="px-4 py-2">1299</td>
              <td className="px-4 py-2">roadster limited.</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2">Data 4</td>
              <td className="px-4 py-2">Data 5</td>
              <td className="px-4 py-2">Data 6</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 7</td>
              <td className="px-4 py-2">Data 8</td>
              <td className="px-4 py-2">Data 9</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2">Data 1</td>
              <td className="px-4 py-2">Data 2</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
              <td className="px-4 py-2">Data 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ProductsPage;
