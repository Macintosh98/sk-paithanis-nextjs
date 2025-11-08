import { useState } from "react";
// import productsColors from './../../../utils/data/products-colors';
// import productsSizes from './../../../utils/data/products-sizes';
// import CheckboxColor from './../../products-filter/form-builder/checkbox-color';
// type ProductContent = {
//   product: ProductType;
// }

const Content = ({ product }: any) => {
  const [count, setCount] = useState<number>(1);

  return (
    <section className="product-content animation glasscard">
      <div className="product-content__intro">
        {/* <h5 className="product__id">Product ID:<br></br>{product.id}</h5> */}
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.text}</h2>
        <div className="product__prices">
          <h4>₹{product.currentPrice}</h4>
          {product.discount && <span>₹{product.price}</span>}
        </div>
      </div>

      <div className="product-content__filters">
        {/* <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map(type => (
              <CheckboxColor 
                key={type.id} 
                type={'radio'} 
                name="product-color" 
                color={type.color}
                valueName={type.label}
                onChange={onColorSet} 
              />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Size: <strong>See size table</strong></h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Choose size</option>
                {productsSizes.map(type => (
                  <option value={type.label}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div> */}

        <h4>Details :</h4>
        <br />
        <p>{product.category}</p>
        <br />
        <p>{product.discription}</p>
        <br />
        <hr />

        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button type="submit" className="btn btn--rounded btn--yellow">
              Add to cart
            </button>
            <button type="button" className={`btn-heart btn-heart--active`}>
              <i className="icon-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
