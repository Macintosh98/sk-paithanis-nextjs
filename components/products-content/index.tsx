// import { useState } from 'react';
import List from "./list";

const ProductsContent = (props: any) => {
  // const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  // filtersSubmit productType productPrice

  return (
    <section className="products-content">
      <div className="products-content__intro glasscard">
        {/* <h2>Men's Tops <span>(133)</span></h2> */}
        <h2>Paithani's</h2>
        <button
          type="button"
          onClick={() => props.setFiltersOpen(!props.filtersOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters"></i>
        </button>
        {/* old onClick={() => setOrderProductsOpen(!orderProductsOpen)} */}
        {/* <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form> */}
      </div>

      <List
        // setFiltersSubmit={props.setFiltersSubmit}
        // filtersSubmit={props.filtersSubmit}
        data={props.data}
        admin={props.admin}
        productType={props.productType}
        productPrice={props.productPrice}
      />
    </section>
  );
};

export default ProductsContent;
