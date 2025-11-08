/* eslint-disable @next/next/no-img-element */
import products from "../../../utils/data/products";

const CheckoutItems = () => {
  return (
    <ul className="checkout-items">
      {products.map((item) => (
        <li key={item.id} className="checkout-item">
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <img src={item.thumb} alt={item.name} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.name}</h3>
              <span>#{item.id}</span>
            </div>
          </div>
          <h3>₹{item.price}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutItems;
