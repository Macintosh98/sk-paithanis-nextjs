// import Layout from "../layouts/Main";
import Link from "next/link";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrumb";
// import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";
// import { server } from "../utils/server";
// import { postData } from "../utils/services";
import { login } from "store/reducers/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

type LoginMail = {
  email: string;
  password: string;
};

const LoginPage = () => {
  // const { register, handleSubmit, errors } = useForm();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  } as LoginMail);

  const onChange = (e: any) => {
    setFormData((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }

    if (isSuccess || user) {
      router.push("/admin/all-paithani");
    }

    // dispatch(reset());
  }, [user, isSuccess]);

  // const onSubmit = async (data: LoginMail) => {
  //   // const res = await postData(`${server}/api/login`, {
  //   //   email: data.email,
  //   //   password: data.password,
  //   // });

  //   dispatch(
  //     login({
  //       email: data.email,
  //       password: data.password,
  //     })
  //   );
  // };

  // if (isLoading) return ;

  return (
    // <Layout>
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="form-page">
        {isLoading && <Spinner />}
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
              <h2 className="form-block__title">Log in</h2>
              <hr />
              <p className="form-block__description">
                Enter your email or phone number and recover your account
              </p>
            </div>

            <form className="form" onSubmit={onSubmit}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={onChange}
                />
              </div>

              {isError && <p className="message message--error">{message}</p>}

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className={`checkbox checkbox--sm`}
                  >
                    <input
                      type="checkbox"
                      name="keepSigned"
                      id="check-signed-in"
                    />
                    <span className="checkbox__check"></span>
                    <p>Keep me signed in</p>
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="form__info__forgot-password"
                >
                  Forgot password?
                </Link>
              </div>

              {/* <div className="form__btns">
                <button type="button" className="btn-social fb-btn">
                  <i className="icon-facebook"></i>Facebook
                </button>
                <button type="button" className="btn-social google-btn">
                  <img src="/images/icons/gmail.svg" alt="gmail" /> Gmail
                </button>
              </div> */}

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Sign in
              </button>

              <p className="form__signup-link">
                Not a member yet? <Link href="/register">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
    // {/* </Layout> */}
  );
};

export default LoginPage;
