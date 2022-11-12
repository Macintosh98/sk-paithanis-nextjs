import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../../components/GoalForm";
import GoalItem from "../../components/GoalItem";
import Spinner from "../../components/Spinner";

import ProductsFilter from "../../components/products-filter";
import ProductsContent from "../../components/products-content";

import { getGoals, reset } from "store/reducers/goals/goalSlice";
import Layout from "../../layouts/Main";
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

  // const dispatch = useDispatch();

  const [Show, setShow] = useState(false);

  const { user } = useSelector((state) => state.auth);

  // const { goals, isLoading, isError, message } = useSelector(
  //   (state) => state.goal
  // );

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }

  //   if (!user) router.push("/login");
  //   else dispatch(getGoals());

  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [user, isError, message, dispatch]);

  // if (isLoading) return <Spinner />;

  return (
    <Layout>
      <div className="container">
        <section className="heading glasscard">
          <div>
            <h1>Welcome {user && user.name}</h1>
            <p>Add & View Products</p>
          </div>
          <button
            className="btn"
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
              productType={productType}
              productPrice={productPrice}
              filtersOpen={filtersOpen}
              setFiltersOpen={setFiltersOpen}
            />
          </div>
        </section>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: #000;
        }

        p {
          line-height: 1.7;
        }

        ul {
          list-style: none;
        }

        li {
          line-height: 2.2;
        }

        h1,
        h2,
        h3 {
          font-weight: 600;
          margin-bottom: 10px;
        }

        .heading {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 50px;
          margin-top: 100px;
          display: flex;
          justify-content: space-between;
        }

        .heading p {
          color: #828282;
        }

        .goals {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 10px;
        }

        .goal {
          background-color: #f4f4f4;
          margin: 10px 0;
          padding: 20px 0 10px;
          position: relative;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border-radius: 20px;
        }

        .goal .close {
          position: absolute;
          top: 10px;
          right: 15px;
          cursor: pointer;
          border: none;
          background: none;
        }

        .form,
        .content {
          width: 70%;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 10px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px;
          border: 1px solid #e6e6e6;
          border-radius: 5px;
          margin-bottom: 10px;
          font-family: inherit;
        }

        .form-group label {
          text-align: left;
          display: block;
          margin: 0 0 5px 3px;
        }

        .btn {
          padding: 10px 20px;
          border: 1px solid #000;
          border-radius: 5px;
          background: #000;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          appearance: button;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn svg {
          margin-right: 8px;
        }

        .btn-reverse {
          background: #fff;
          color: #000;
        }

        .btn-block {
          width: 100%;
          margin-bottom: 20px;
        }

        .btn:hover {
          transform: scale(0.98);
        }

        .loadingSpinnerContainer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 5000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .loadingSpinner {
          width: 64px;
          height: 64px;
          border: 8px solid;
          border-color: #000 transparent #555 transparent;
          border-radius: 50%;
          animation: spin 1.2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 600px) {
          .form {
            width: 90%;
          }

          .heading h1 {
            font-size: 2rem;
          }

          .heading p {
            font-size: 1.5rem;
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
    </Layout>
  );
}

export default Dashboard;
