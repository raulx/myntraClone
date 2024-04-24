import { motion } from "framer-motion";

function ProductsPage() {
  return (
    <motion.div
      key="product page"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      welcome to products page...
    </motion.div>
  );
}

export default ProductsPage;
