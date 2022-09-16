import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
// import { ProductTypeList } from 'types';
import products from '../../../utils/data/products';
import { server } from '../../../utils/server'; 

const ProductsContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr(`${server}/api/goals/`, fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item: any)  => { 
            item={...products[0],...item}
            return (
            <ProductItem 
              id={item._id} 
              name={item.text}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item._id}
              images={item.img} 
            />)
          })}
        </section>
      }
    </>
  );
};
  
export default ProductsContent