import { GetServerSideProps } from "next";

// import { useState } from "react";
// import Footer from "../../components/footer";
// import Layout from "../../layouts/Main";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFeatured from "../../components/products-featured";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";
// import Description from "../../components/product-single/description";
import Reviews from "../../components/product-single/reviews";
import { server } from "../../utils/server";
import products1 from "../../utils/data/products";
import { motion } from "framer-motion";

// types
// import { ProductType } from 'types';

// type ProductPageType = {
//   product: ProductType;
// }

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.id;
  const res = await fetch(`${server}/api/product/${pid}`);
  // const res = await fetch(`/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product: { ...products1[0], ...product },
    },
  };
};

const Product = ({ product }: any) => {
  // const [showBlock, setShowBlock] = useState("description");

  // useEffect(() => {
  //   if (AllProducts.status == "idle" && AllProducts.products.length == 0) {
  //     fetch(`${server}/api/goals/${pid}`).then(async (res) => {
  //       product = await res.json();
  //     });
  //   } else if (
  //     AllProducts.status == "idle" &&
  //     AllProducts.products.length > 0
  //   ) {
  //     product = AllProducts.products.filter((a: any) => {
  //       a = { ...products1[0], ...a };
  //       return a._id == pid;
  //     });
  //   }
  // }, [AllProducts]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content glasscard">
            <Gallery images={product.img} />
            <Content product={product} />
          </div>

          {/* <div className="product-single__info">
            <div className="product-single__info-btns">
              <button
                type="button"
                onClick={() => setShowBlock("description")}
                className={`btn btn--rounded ${
                  showBlock === "description" ? "btn--active" : ""
                }`}
              >
                Description
              </button>
              <button
                type="button"
                onClick={() => setShowBlock("reviews")}
                className={`btn btn--rounded ${
                  showBlock === "reviews" ? "btn--active" : ""
                }`}
              >
                Reviews (2)
              </button>
            </div>

            <Description show={showBlock === "description"} />
                      <Reviews product={product} show={showBlock === "reviews"} />

          </div> */}
          <Reviews product={product} show={true} />
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      {/* <Footer /> */}
    </motion.div>
  );
};

export default Product;
