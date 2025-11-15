"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import Layout from "../../layouts/Main";
// import Footer from "../../components/footer";
// import ProductsFilter from "../../../components/products-filter";
import ProductsContent from "../../../components/products-content";
import { motion } from "framer-motion";

const Products = () => {
  const params = useParams();
  const { minprice = 0, maxprice = 50000, pid = "all-paithani" } = params;

  const [productType, setProductType] = useState(pid);
  const [productPrice, setProductPrice] = useState([minprice, maxprice]);

  // const [filtersOpen, setFiltersOpen] = useState(false);
  // const [filtersSubmit, setFiltersSubmit] = useState(false);

  useEffect(() => {
    setProductType(pid);
    setProductPrice([minprice, maxprice]);
  }, [params]);

  // useEffect(() => {
  //   setFiltersOpen(false);
  // }, [productType]);

  return (
    // <div>
    <motion.div
      key={productType as string}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProductsContent
        // filtersSubmit={filtersSubmit}
        // setFiltersSubmit={setFiltersSubmit}
        productType={productType}
        productPrice={productPrice}
        // filtersOpen={filtersOpen}
        // setFiltersOpen={setFiltersOpen}
      />
    </motion.div>
  );
};

export default Products;
