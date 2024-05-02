import { useAddNewProductMutation } from "@/store";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
function AddProductPage() {
  const [addNewProduct] = useAddNewProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newProductData = {
      title: data.productTitle,
      brand: data.brand,
      product_id: data.productId,
      MRP: data.MRP,
    };
    try {
      const res = await addNewProduct(newProductData);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      key="addproducts"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-pink-50 h-screen shadow-lg flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 px-6 py-10 rounded bg-pink-200 flex flex-col gap-6 w-1/3 -translate-y-8"
        >
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-bold">Product Title</label>
            <input
              className="p-2 active:border-gray-400 rounded"
              {...register("productTitle", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-bold">Brand</label>
            <input
              className="p-2 active:border-gray-400 rounded"
              {...register("brand", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-bold">Product Id</label>
            <input
              className="p-2 active:border-gray-400 rounded"
              type="number"
              {...register("productId", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-bold">MRP</label>
            <input
              className="p-2 active:border-gray-400 rounded"
              type="number"
              {...register("MRP", { required: true, max: 100000 })}
            />
          </div>
          <input
            type="submit"
            className="bg-[#FF912E] font-bold  p-2 rounded hover:bg-orange-500 w-1/4 cursor-pointer transition-all duration-75 my-4"
          />
        </form>
      </div>
    </motion.div>
  );
}
export default AddProductPage;
