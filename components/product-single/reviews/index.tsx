import ReviewsList from "./reviews-list";
import Punctuation from "./punctuation";
// import { ProductType } from "types";

type ReviewsProductType = {
  show: boolean;
  product: any;
};

const Reviews = ({ show, product }: ReviewsProductType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <div className="product-single__info glasscard">
      <div className="product-single__info-btns">
        {/* <button
        type="button"
        onClick={() => setShowBlock("description")}
        className={`btn btn--rounded ${
          showBlock === "description" ? "btn--active" : ""
        }`}
      >
        Description
      </button> */}
        <button type="button" className="btn btn--rounded">
          Reviews (2)
        </button>
      </div>
      <section style={style} className="product-single__reviews">
        <Punctuation
          punctuation={product.punctuation.punctuation}
          countOpinions={product.punctuation.countOpinions}
          votes={product.punctuation.votes}
        />
        <ReviewsList reviews={product.reviews} />
      </section>
    </div>
  );
};

export default Reviews;
