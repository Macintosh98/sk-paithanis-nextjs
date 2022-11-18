// import LayoutError from "../layouts/404";

import { motion } from "framer-motion";
import Link from "next/link";

const ErrorPage = () => (
  // <LayoutError>
  <section className="error-page">
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container glasscard">
        <h1>Error 404</h1>
        <p>Woops. Looks like this page doesn't exist</p>
        <Link href="/">
          <div className="btn btn--rounded btn--yellow">Go to home</div>
        </Link>
      </div>
    </motion.div>
  </section>
  // {/* </LayoutError> */}
);

export default ErrorPage;
