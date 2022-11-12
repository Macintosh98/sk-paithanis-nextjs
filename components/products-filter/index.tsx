// import { useState } from 'react';
import Checkbox from "./form-builder/checkbox";
// import CheckboxColor from './form-builder/checkbox-color';
import Slider from "rc-slider";

// data
import productsTypes from "./../../utils/data/products-types";
// import productsColors from './../../utils/data/products-colors';
// import productsSizes from './../../utils/data/products-sizes';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = (props: any) => {
  // const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="products-filter">
      {/* <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
          Add Filter <i className="icon-down-open"></i>
      </button> */}

      <div
        className={`glasscard products-filter__wrapper ${
          props.filtersOpen ? "products-filter__wrapper--open" : ""
        }`}
      >
        <div className="products-filter__block">
          <button type="button">Product type</button>
          <div className="products-filter__block__content">
            {productsTypes.map((type) => (
              <Checkbox
                key={type.id}
                name="product-type"
                label={type.name}
                value={type.value}
                checked={type.value === props.productType}
                onChange={(e: any) =>
                  props.setProductType(e.currentTarget.value)
                }
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Price</button>
          <div className="products-filter__block__content">
            <Range
              onChange={(sliderValues) => props.setProductPrice(sliderValues)}
              min={0}
              max={50000}
              value={props.productPrice}
              defaultValue={props.productPrice}
              tipFormatter={(value) => `Rs. ${value}`}
            />
          </div>
        </div>

        {/* <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                name="product-size" 
                label={type.label} />
            ))}
          </div>
        </div>
        
        <div className="products-filter__block">
          <button type="button">Color</button>
          <div className="products-filter__block__content">
            <div className="checkbox-color-wrapper">
              {productsColors.map(type => (
                <CheckboxColor key={type.id} valueName={type.color} name="product-color" color={type.color} />
              ))}
            </div>
          </div>
        </div> */}

        {/* <button
          onClick={() => props.setFiltersSubmit(true)}
          className="btn btn-submit btn--rounded btn--yellow"
        >
          Apply
        </button> */}
      </div>
    </div>
  );
};

export default ProductsFilter;
