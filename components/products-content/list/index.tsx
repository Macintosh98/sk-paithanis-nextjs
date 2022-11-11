// import useSwr from 'swr';
import ProductItem from "../../product-item";
import ProductsLoading from "./loading";
// import { ProductTypeList } from 'types';
import products from "../../../utils/data/products";
// import { server } from '../../../utils/server';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "store/reducers/cart";

const ProductsContent = () => {
  const dispatch = useDispatch();
  const AllProducts = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (AllProducts.status == "idle" && AllProducts.products.length == 0) {
      dispatch(getProduct());
    }
  }, [AllProducts]);

  if (AllProducts.status == "fail") return <div>Failed to load products</div>;
  return (
    <>
      {AllProducts.status == "loading" && <ProductsLoading />}

      {AllProducts.status == "idle" && AllProducts.products.length > 0 && (
        <section className="products-list">
          {AllProducts.products.map((item: any) => {
            item = { ...products[0], ...item };
            return (
              <ProductItem
                id={item._id}
                name={item.text}
                price={item.price}
                color={item.color}
                currentPrice={item.currentPrice}
                key={item._id}
                images={item.img}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
