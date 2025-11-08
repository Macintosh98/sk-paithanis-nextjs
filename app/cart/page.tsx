"use client";
// import Layout from '../layouts/Main';
import { motion } from "framer-motion";
import ShoppingCart from "../../components/shopping-cart";

const Products = () => (
  // <Layout>
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <ShoppingCart />
  </motion.div>
  // {/* </Layout> */}
);

export default Products;
