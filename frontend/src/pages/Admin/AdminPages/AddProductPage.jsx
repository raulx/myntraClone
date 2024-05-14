import UseAdminActiveLinkContext from "@/hooks/useAdminActiveLinkContext";
import { useAddNewProductMutation } from "@/store";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AddProductPage() {
  const [addNewProduct, { isLoading: addingProduct }] =
    useAddNewProductMutation();
  const { setActiveLink } = UseAdminActiveLinkContext();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const newProductData = {
      title: data.productTitle,
      brand: data.brand,
      product_id: data.productId,
      MRP: data.MRP,
    };
    try {
      const res = await addNewProduct(newProductData);
      if (res.data?.status === 200) {
        toast.success(res.data.message);
        setActiveLink("products");
        navigate(`/page/admin/products/`);
      } else {
        toast.error(res.error.data.message);
      }
    } catch (err) {
      toast.error(err.message);
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
          <button
            type="submit"
            className="bg-[#FF912E] font-bold  p-2 rounded hover:bg-orange-500 w-1/4 h-12 flex justify-center items-center cursor-pointer transition-all duration-75 my-4"
          >
            {addingProduct ? (
              <FaSpinner className="animate-spin text-white text-2xl" />
            ) : (
              <>Submit</>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
export default AddProductPage;
