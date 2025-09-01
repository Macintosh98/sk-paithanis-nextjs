// import Layout from "../layouts/Main";
import { motion } from "framer-motion";
import Link from "next/link";
import Breadcrumb from "../components/breadcrumb";

const RegisterPage = () => (
  // <Layout>
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <section className="form-page">
      <div className="container">
        {/* <div className="back-button-section">
        <Link href="/paithanis/all-paithani">
          <a>
            <i className="icon-left"></i> Back to store
          </Link>
        </Link>
      </div> */}
        <Breadcrumb />

        <div className="form-block glasscard">
          <div className="glasscard animation">
            <h2 className="form-block__title">
              Create an account and discover the benefits
            </h2>
            <hr />
            <p className="form-block__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <form className="form">
            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="First Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="Last Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input className="form__input" placeholder="Email" type="text" />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                type="Password"
                placeholder="Password"
              />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label
                  htmlFor="check-signed-in"
                  className={`checkbox checkbox--sm`}
                >
                  <input
                    name="signed-in"
                    type="checkbox"
                    id="check-signed-in"
                  />
                  <span className="checkbox__check"></span>
                  <p>
                    I agree to the Google Terms of Service and Privacy Policy
                  </p>
                </label>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--rounded btn--yellow btn-submit"
            >
              Sign up
            </button>

            <p className="form__signup-link">
              <Link href="/login">Are you already a member?</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </motion.div>
  // </Layout>
);

export default RegisterPage;
