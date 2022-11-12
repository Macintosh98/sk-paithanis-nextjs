// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "store/reducers/cart";

import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import Link from "next/link";

const IndexPage = () => {
  // const dispatch = useDispatch();
  // const AllProducts = useSelector((state: any) => state.cart);

  // useEffect(() => {
  //   if (AllProducts.status == "idle" && AllProducts.products.length == 0) {
  //     dispatch(getProduct());
  //   }
  // }, [AllProducts]);

  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              {/* <h3>New arrivals are now in!</h3> */}
              <Link href="/paithanis/all-paithani" className="btn btn--rounded">
                VIEW ALL
              </Link>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              {/* <h3>Basic t-shirts $29,99</h3> */}
              <Link
                href="/paithanis/semi-silk-paithani"
                className="btn btn--rounded"
              >
                Semi Silk Paithani
              </Link>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              {/* <h3>Sale this summer</h3> */}
              <Link
                href="/paithanis/pure-silk-paithani"
                className="btn btn--rounded"
              >
                Pure Silk Paithani
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro glasscard">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items glasscard">
            <li>
              <i className="icon-shipping glasscard"></i>
              <div className="data-item__content glasscard">
                <h4>Free Shipping</h4>
                <p>
                  All purchases over $199 are eligible for free shipping via
                  USPS First Class Mail.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment glasscard"></i>
              <div className="data-item__content glasscard">
                <h4>Easy Payments</h4>
                <p>
                  All payments are processed instantly over a secure payment
                  protocol.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash glasscard"></i>
              <div className="data-item__content glasscard">
                <h4>Money-Back Guarantee</h4>
                <p>
                  If an item arrived damaged or you've changed your mind, you
                  can send it back for a full refund.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials glasscard"></i>
              <div className="data-item__content glasscard">
                <h4>Finest Quality</h4>
                <p>
                  Designed to last, each of our products has been crafted with
                  the finest materials.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
