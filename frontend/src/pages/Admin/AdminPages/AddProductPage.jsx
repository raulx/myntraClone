import { motion } from "framer-motion";
function AddProductPage() {
  return (
    <motion.div
      key="addproducts"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      add product page...
    </motion.div>
  );
}
export default AddProductPage;
