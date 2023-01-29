// import useSwr from 'swr';
import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
// import { ProductTypeList } from 'types';
import products1 from "../../../utils/data/products";
// import { server } from '../../../utils/server';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "store/reducers/cart";

const ProductsContent = ({
  // setFiltersSubmit,
  // filtersSubmit,
  productType,
  productPrice,
  admin,
}: any) => {
  const AllProducts = useSelector((state: any) => state.cart);
  const [Products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (AllProducts.status == "idle" && AllProducts.products.length == 0) {
      dispatch(getProduct());
    } else if (
      AllProducts.status == "idle" &&
      AllProducts.products.length > 0
    ) {
      setProducts(
        AllProducts.products.filter((a: any) => {
          a = { ...products1[0], ...a };
          return (
            a.currentPrice <= productPrice[1] &&
            a.currentPrice >= productPrice[0] &&
            a.category == productType
          );
        })
      );
    }
  }, [AllProducts, productType, productPrice]);

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

  if (AllProducts.status == "fail") return <div>Failed to load products</div>;

  return (
    <>
      {AllProducts.status == "loading" && <ProductsLoading />}

      {AllProducts.status == "idle" && AllProducts.products.length > 0 && (
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
