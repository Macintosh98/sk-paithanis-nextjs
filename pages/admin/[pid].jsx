import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import GoalForm from "../../components/GoalForm";
// import GoalItem from "../../components/GoalItem";
import Spinner from "../../components/Spinner";

import ProductsFilter from "../../components/products-filter";
import ProductsContent from "../../components/products-content";

// import { getGoals, reset } from "store/reducers/goals/goalSlice";
// import Layout from "../../layouts/Main";
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();
  const { minprice = 0, maxprice = 50000, pid = "all-paithani" } = router.query;

  const [productType, setProductType] = useState(pid);
  const [productPrice, setProductPrice] = useState([minprice, maxprice]);

  const [filtersOpen, setFiltersOpen] = useState(false);
  // const [filtersSubmit, setFiltersSubmit] = useState(false);

  useEffect(() => {
    setProductType(pid);
    setProductPrice([minprice, maxprice]);
  }, [router.query]);

  const dispatch = useDispatch();

  const [Show, setShow] = useState(false);

  const { user } = useSelector((state) => state.auth);

  // const { goals, isLoading, isError, message } = useSelector(
  //   (state) => state.goal
  // );

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }
    if (!user) router.push("/login");
    // else dispatch(getGoals());
    // return () => {
    //   dispatch(reset());
    // };
  }, [user]);

  // if (isLoading) return <Spinner />;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <section className="heading glasscard">
          <div>
            {/* <h1>Welcome {user && user.name}</h1> */}
            <h1>Add & View Products</h1>
          </div>
          <button
            className="btn btn--rounded btn--border"
            onClick={() => {
              setShow(!Show);
            }}
          >
            Add New Product
          </button>
        </section>

        {Show && <GoalForm />}

        {/* <section className="">
          {goals.length > 0 ? (
            <div className="goals">
              {goals.map((goal) => (
                <GoalItem key={goal._id} goal={goal} />
              ))}
            </div>
          ) : (
            <h3>You have not set any goals</h3>
          )}
        </section> */}
      </div>
      <section className="products-page">
        <div className="container">
          <ProductsFilter
            productType={productType}
            productPrice={productPrice}
            setProductType={setProductType}
            setProductPrice={setProductPrice}
            filtersOpen={filtersOpen}
            setFiltersOpen={setFiltersOpen}
            // setFiltersSubmit={setFiltersSubmit}
          />
          <ProductsContent
            // filtersSubmit={filtersSubmit}
            // setFiltersSubmit={setFiltersSubmit}
            admin={true}
            productType={productType}
            productPrice={productPrice}
            filtersOpen={filtersOpen}
            setFiltersOpen={setFiltersOpen}
          />
        </div>
      </section>

      <style jsx>{`
        .heading {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 50px;
          margin-top: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 600px) {
          .heading h1 {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .heading {
            display: block;
          }

          .btn {
            width: 100%;
            margin: 20px 0;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Dashboard;
