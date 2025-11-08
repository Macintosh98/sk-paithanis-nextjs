/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [viewimage, setViewImage] = useState();

  const deleteGoal = async (goalId: any) => {
    const response = await axios.delete("/api/product/" + goalId);

    return response.data;
  };

  const [base64, setBase64] = useState("");
  const [contentType, setContentType] = useState("");

  useEffect(() => {
    if (images) {
      if (images.data == false) {
        const reader: any = new FileReader();
        reader.readAsDataURL(images.file);
        reader.onloadend = () => setViewImage(reader.result);
      } else {
        const a = new Uint8Array(images.data.data);
        const b = a.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, "");
        setBase64(btoa(b));
      }
    } else {
      // useEffect(() => {
      axios({
        url: `/api/product/${id}`,
        method: "GET",
        responseType: "json",
        headers: {
          // Authorization: this.authString,
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const product = await res.data;
        const a = new Uint8Array(product.img?.data?.data);
        const b = a.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, "");
        setContentType(product.img?.contentType);
        setBase64(btoa(b));
        // console.log("aaaaaaaaaaaa", base64);
      });
      // }, []);
    }
  }, []);

  // if (isLoading) return <Spinner />;

  return (
    <div className="product-item glasscard">
      {admin && !viewimage && (
        <button
          onClick={() => {
            deleteGoal(id);
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
        <button type="button" className={`btn-heart btn-heart--active}`}>
          <i className="icon-heart"></i>
        </button>

        <Link href={`/paithani/${name}?id=${id}`}>
          <img
            src={
              viewimage
                ? viewimage
                : contentType != "" && base64 != ""
                ? "data:" + contentType + ";base64," + base64
                : "./x.png"
            }
            alt="product"
          />
          {discount && <span className="product__discount">{discount}%</span>}
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
