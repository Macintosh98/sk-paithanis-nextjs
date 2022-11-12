import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../layouts/Main";
import Footer from "../../components/footer";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFilter from "../../components/products-filter";
import ProductsContent from "../../components/products-content";

const Products = () => {
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

  return (
    <Layout>
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
            productType={productType}
            productPrice={productPrice}
            filtersOpen={filtersOpen}
            setFiltersOpen={setFiltersOpen}
          />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Products;
