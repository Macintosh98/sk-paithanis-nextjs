import { GetServerSideProps } from "next";

// import { useState } from "react";
import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFeatured from "../../components/products-featured";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";
// import Description from "../../components/product-single/description";
import Reviews from "../../components/product-single/reviews";
import { server } from "../../utils/server";
import products1 from "../../utils/data/products";

// types
// import { ProductType } from 'types';

// type ProductPageType = {
//   product: ProductType;
// }

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/goals/${pid}`);
  const product = await res.json();

  return {
    props: {
      product: { ...products1[0], ...product },
    },
  };
};

const Product = ({ product }: any) => {
  // const [showBlock, setShowBlock] = useState("description");

  return (
    <Layout>
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
      <Footer />
    </Layout>
  );
};

export default Product;
