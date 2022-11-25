import Link from "next/link";
import { useEffect, useState } from "react";
import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavProduct } from "store/reducers/user";
import { RootState } from "store";
import { deleteGoal } from "store/reducers/goals/goalSlice";
import { removeProductLocal } from "store/reducers/cart";
// import Spinner from "../Spinner";
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

  const [viewimage, setViewImage] = useState();

  // const { isLoading } = useSelector((state: any) => state.goal);
  // const AllProducts = useSelector((state: any) => state.cart);

  // useEffect(() => {
  //   if (isSuccess && AllProducts.status == "idle")
  //     console.log("logggg", AllProducts, isSuccess, isLoading);
  //   // dispatch(getProduct());
  //   dispatch(reset());
  // }, [isSuccess]);

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
    if (images.data == false) {
      var reader: any = new FileReader();
      reader.readAsDataURL(images.file);
      reader.onloadend = () => setViewImage(reader.result);
    } else {
      const a = new Uint8Array(images.data.data);
      const b = a.reduce((data, byte) => {
        return data + String.fromCharCode(byte);
      }, "");
      setBase64(btoa(b));
    }
  }, []);

  // if (isLoading) return <Spinner />;

  return (
    <div className="product-item glasscard">
      {admin && !viewimage && (
        <button
          onClick={() => {
            dispatch(deleteGoal(id));
            dispatch(removeProductLocal(id));
          }}
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

        <Link href={`/paithani/${name}?id=${id}`}>
          <a>
            <img
              src={
                viewimage
                  ? viewimage
                  : images
                  ? "data:" + images.contentType + ";base64," + base64
                  : ""
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
