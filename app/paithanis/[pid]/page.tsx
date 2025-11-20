"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
// import Layout from "../../layouts/Main";
// import Footer from "../../components/footer";
// import ProductsFilter from "../../../components/products-filter";
import ProductsContent from "../../../components/products-content";
import { motion } from "framer-motion";
import AnimateItem from "@/components/animations/AnimateItem";

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
    // <AnimateItem key="init">
    <ProductsContent
      // filtersSubmit={filtersSubmit}
      // setFiltersSubmit={setFiltersSubmit}
      productType={productType}
      productPrice={productPrice}
      // filtersOpen={filtersOpen}
      // setFiltersOpen={setFiltersOpen}
    />
    // </AnimateItem>
  );
};

export default Products;
