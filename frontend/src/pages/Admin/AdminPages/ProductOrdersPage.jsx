import { motion } from "framer-motion";

function ProductOrdersPage() {
  return (
    <motion.div
      key="orders"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      Products orders page...
    </motion.div>
  );
}
export default ProductOrdersPage;
