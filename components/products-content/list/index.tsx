/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import useSwr from 'swr';
import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
// import { ProductTypeList } from 'types';
import products1 from "../../../utils/data/products";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductsContent = ({
  // setFiltersSubmit,
  // filtersSubmit,
  productType,
  productPrice,
  admin,
}: any) => {
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

    setProducts(
      response.data.filter((a: any) => {
        a = { ...products1[0], ...a };
        return (
          a.currentPrice <= productPrice[1] &&
          a.currentPrice >= productPrice[0] &&
          a.category == productType
        );
      })
    );
  };
  useEffect(() => {
    onload();
  }, []);

  // useEffect(() => {
  //   if (filtersSubmit == true) {
  //     if (AllProducts.status == "idle" && AllProducts.products.length > 0) {
  //       setProducts(
  //         AllProducts.products.filter(
  //           (a: any) =>
  //             a.currentPrice < productPrice[1] &&
  //             a.currentPrice > productPrice[0] &&
  //             a.category == productType
  //         )
  //       );
  //     }
  //     setFiltersSubmit(false);
  //   }
  // }, [filtersSubmit]);

  if (Products.length == 0)
    return (
      <div>
        Failed to load products
        <ProductsLoading />
      </div>
    );

  return (
    <>
      {Products.length > 0 && (
        <section className="products-list">
          {Products.map((item: any) => {
            item = { ...products1[0], ...item };
            return (
              <ProductItem
                id={item._id}
                name={item.text}
                price={item.price}
                color={item.color}
                currentPrice={item.currentPrice}
                key={item._id}
                images={item.img}
                productType={item.category}
                admin={admin}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
