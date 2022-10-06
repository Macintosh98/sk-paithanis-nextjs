import ProductsCarousel from './carousel';
import useSwr from 'swr';
import { server } from '../../utils/server'; 

const ProductsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const { data } = useSwr('/api/products', fetcher);
  const { data } = useSwr(`${server}/api/goals/`, fetcher);
  const data1:Array<any>=data ? data: [];

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header glasscard">
          <h3>Paithanis under ₹1500</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data1.filter((a:any)=> a.currentPrice<1500)} />
      </div>
      <br/><br/><br/><br/>
      <div className="container">
        <header className="section-products-featured__header glasscard">
          <h3>Our Bestsellers</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data1.filter((a:any)=> a.currentPrice>1500)} />
      </div>
    </section>
  )
};

export default ProductsFeatured