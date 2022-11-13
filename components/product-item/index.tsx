import Link from "next/link";
import { useEffect, useState } from "react";
import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavProduct } from "store/reducers/user";
import { RootState } from "store";
import { deleteGoal, reset } from "store/reducers/goals/goalSlice";
import { getProduct } from "store/reducers/cart";
import Spinner from "../Spinner";
// import { ProductTypeList } from 'types';

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
  productType,
  admin = false,
}: any) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);
  const { isLoading, isSuccess } = useSelector((state: any) => state.goal);

  useEffect(() => {
    dispatch(reset());
    if (isSuccess) dispatch(getProduct());
  }, [isSuccess]);

  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };

  const [base64, setBase64] = useState("");

  useEffect(() => {
    const a = new Uint8Array(images.data.data);
    const b = a.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, "");
    setBase64(btoa(b));
  }, []);

  return (
    <div className="product-item glasscard">
      {isLoading && <Spinner />}
      {admin && (
        <button
          onClick={() => dispatch(deleteGoal(id))}
          className="glasscard animation close"
        >
          Delete
        </button>
      )}

      <style jsx>{`
        .close {
          position: absolute;
          // top: 10px;
          // right: 15px;
          cursor: pointer;
          border: none;
          background: none;
          z-index: 6;
        }
      `}</style>

      <div className="product__image">
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart"></i>
        </button>

        <Link href={`/product/${id}`}>
          <a>
            <img
              src={
                images ? "data:" + images.contentType + ";base64," + base64 : ""
              }
              alt="product"
            />
            {discount && <span className="product__discount">{discount}%</span>}
          </a>
        </Link>
      </div>

      <div className="product__description glasscard animation">
        <h2>{name}</h2>
        <br />
        <p>Type: {productType}</p>
        <br />
        <div
          className={
            "product__price " + (discount ? "product__price--discount" : "")
          }
        >
          <h4>₹{currentPrice}</h4>

          {discount && <span>₹{price}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
