import Link from "next/link";

const ProductItemLoading = () => (
  <Link href="#" className="product-item product-item--loading">
    <div className="product__image"></div>

    <div className="product__description">
      <h3></h3>
      <div className={"product__price"}>
        <h4></h4>
      </div>
    </div>
  </Link>
);

export default ProductItemLoading;
