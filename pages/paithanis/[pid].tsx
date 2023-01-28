import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Layout from "../../layouts/Main";
// import Footer from "../../components/footer";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFilter from "../../components/products-filter";
import ProductsContent from "../../components/products-content";
import { motion } from "framer-motion";
import Goal from "backend/models/goalModel";
import connectDB from "backend/config/db";

const Products = ({ data }: any) => {
  const router = useRouter();
  const { minprice = 0, maxprice = 50000, pid = "all-paithani" } = router.query;

  const [productType, setProductType] = useState(pid);
  const [productPrice, setProductPrice] = useState([minprice, maxprice]);

  const [filtersOpen, setFiltersOpen] = useState(false);
  // const [filtersSubmit, setFiltersSubmit] = useState(false);

  useEffect(() => {
    setProductType(pid);
    setProductPrice([minprice, maxprice]);
  }, [router.query]);

  useEffect(() => {
    setFiltersOpen(false);
  }, [productType]);

  return (
    <motion.div
      key={productType as string}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumb />
      <section className="products-page">
        <div className="container">
          <ProductsFilter
            productType={productType}
            productPrice={productPrice}
            setProductType={setProductType}
            setProductPrice={setProductPrice}
            filtersOpen={filtersOpen}
            setFiltersOpen={setFiltersOpen}
            // setFiltersSubmit={setFiltersSubmit}
          />
          <ProductsContent
            // filtersSubmit={filtersSubmit}
            // setFiltersSubmit={setFiltersSubmit}
            data={data}
            productType={productType}
            productPrice={productPrice}
            filtersOpen={filtersOpen}
            setFiltersOpen={setFiltersOpen}
          />
        </div>
      </section>
    </motion.div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // console.log("daaaaaaaaaaaaaata 2");
  await connectDB();
  const goals = await Goal.find({});
  // console.log("daaaaaaaaaaaaaata 2", goals);
  // Pass data to the page via props
  return { props: { data: JSON.parse(JSON.stringify(goals)) } };
}

export default Products;
