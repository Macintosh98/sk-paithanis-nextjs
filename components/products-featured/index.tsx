import ProductsCarousel from "./carousel";
// import useSwr from "swr";
// import { server } from "../../utils/server";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "store/reducers/cart";
import Link from "next/link";

const ProductsFeatured = () => {
  const dispatch = useDispatch();
  const AllProducts = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (AllProducts.status == "idle" && AllProducts.products.length == 0) {
      dispatch(getProduct());
    }
  }, [AllProducts]);

  // if (AllProducts.status == "fail") return <div>Failed to load products</div>;

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header glasscard">
          <h3>Paithanis under ₹1500</h3>
          <Link href="/paithani" className="btn btn--rounded btn--border">
            <a>Show All</a>
          </Link>
        </header>
        {AllProducts.status == "idle" && AllProducts.products.length > 0 && (
          <ProductsCarousel
            products={AllProducts.products.filter(
              (a: any) => a.currentPrice < 1500
            )}
          />
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <header className="section-products-featured__header glasscard">
          <h3>Our Bestsellers</h3>
          <Link href="/paithani" className="btn btn--rounded btn--border">
            <a>Show All</a>
          </Link>
        </header>

        {AllProducts.status == "idle" && AllProducts.products.length > 0 && (
          <ProductsCarousel
            products={AllProducts.products.filter(
              (a: any) => a.currentPrice > 1500
            )}
          />
        )}
      </div>
    </section>
  );
};

export default ProductsFeatured;
