import CheckoutStatus from "../../components/checkout-status";
import Item from "./item";
import Link from "next/link";
import products from "../../utils/data/products";
const ShoppingCart = () => {
  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro glasscard">
          <h3 className="cart__title">Shopping Cart</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list glasscard">
          <table>
            <tbody>
              <tr>
                <th style={{ textAlign: "left" }}>Product</th>
                {/* <th>Color</th>
                  <th>Size</th> */}
                <th>Ammount</th>
                <th>Price</th>
                <th></th>
              </tr>

              {products.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  thumb={"this is thumb"}
                  name={item.name}
                  // color={item.color}
                  price={item.price}
                  // size={item.size}
                  count={66}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-actions glasscard">
          <Link href="/paithanis/all-paithani">
            <div className="cart__btn-back">
              <i className="icon-left"></i>Continue Shopping
            </div>
          </Link>
          <input
            type="text"
            placeholder="Promo Code"
            className="cart__promo-code"
          />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Total cost <strong>₹555</strong>
            </p>
            <Link href="/cart/checkout">
              <div className="btn btn--rounded btn--yellow">Checkout</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
