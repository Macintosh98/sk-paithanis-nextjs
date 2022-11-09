import { useState } from 'react';
import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';


const Products = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <ProductsFilter filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen}/>
        <ProductsContent filtersOpen={filtersOpen} setFiltersOpen={setFiltersOpen}/>
      </div>
    </section>
    <Footer />
  </Layout>
}
  
export default Products
  