"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import ProductsCarousel from "./carousel";
// import useSwr from "swr";
// import { server } from "../../utils/server";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const ProductsFeatured = () => {
  const [Products, setProducts] = useState([]);
  const onload = async () => {
    const response = await axios({
      url: `/api/product/`,
      method: "GET",
      responseType: "json",
      headers: {
        // Authorization: this.authString,
        "Content-Type": "application/json",
      },
    });

    setProducts(response.data);
  };
  useEffect(() => {
    onload();
  }, []);

  // if (AllProducts.status == "fail") return <div>Failed to load products</div>;

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header glasscard">
          <h3>Paithanis under ₹1500</h3>
          <Link href="/paithanis/all-paithani?minprice=0&maxprice=1500">
            <div className="btn btn--rounded btn--border">Show All</div>
          </Link>
        </header>
        {Products.length > 0 && (
          <ProductsCarousel
            products={Products.filter((a: any) => a.currentPrice < 1500)}
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
          <Link href="/paithanis/all-paithani?minprice=1500&maxprice=50000">
            <div className="btn btn--rounded btn--border">Show All</div>
          </Link>
        </header>

        {Products.length > 0 && (
          <ProductsCarousel
            products={Products.filter((a: any) => a.currentPrice > 1500)}
          />
        )}
      </div>
    </section>
  );
};

export default ProductsFeatured;
