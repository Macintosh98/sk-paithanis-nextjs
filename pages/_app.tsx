import React, { Fragment } from "react";
import Router from "next/router";
import { wrapper } from "../store";
import Layout from "../layouts/Main";

// types
import type { AppProps } from "next/app";

// global styles
// import "swiper/swiper.scss";old
import "swiper/css";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "../assets/css/styles.scss";

import * as gtag from "./../utils/gtag";
import { Provider } from "react-redux";

const isProduction = process.env.NODE_ENV === "production";

// only events on production
if (isProduction) {
  // Notice how we track pageview when route is changed
  Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Fragment>
      {/* <div className="container-feather">
      <div className="feather1">
        <div className="base-feather"></div>
        <div className="line-feather-1"></div>
        <div className="line-feather-2"></div>
        <div className="line-feather-3"></div>
        <div className="middle-feather-line"></div>
        <div className="middle-circle"></div>
        <div className="blue-circle"></div>
      </div>
      <div className="feather2">
        <div className="base-feather"></div>
        <div className="line-feather-1"></div>
        <div className="line-feather-2"></div>
        <div className="line-feather-3"></div>
        <div className="middle-feather-line"></div>
        <div className="middle-circle"></div>
        <div className="blue-circle"></div>
      </div>
      <div className="feather3">
        <div className="base-feather"></div>
        <div className="line-feather-1"></div>
        <div className="line-feather-2"></div>
        <div className="line-feather-3"></div>
        <div className="middle-feather-line"></div>
        <div className="middle-circle"></div>
        <div className="blue-circle"></div>
      </div>
      <div className="feather4">
        <div className="base-feather"></div>
        <div className="line-feather-1"></div>
        <div className="line-feather-2"></div>
        <div className="line-feather-3"></div>
        <div className="middle-feather-line"></div>
        <div className="middle-circle"></div>
        <div className="blue-circle"></div>
      </div>
      <div className="feather5">
        <div className="base-feather"></div>
        <div className="line-feather-1"></div>
        <div className="line-feather-2"></div>
        <div className="line-feather-3"></div>
        <div className="middle-feather-line"></div>
        <div className="middle-circle"></div>
        <div className="blue-circle"></div>
      </div>
    </div> */}
      <Provider store={store}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
