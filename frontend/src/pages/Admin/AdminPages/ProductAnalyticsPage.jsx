import { motion } from "framer-motion";

function ProductAnalyticsPage() {
  return (
    <motion.div
      key="analytics"
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      productanalyticspage...
    </motion.div>
  );
}

export default ProductAnalyticsPage;
