"use client";
import { Button, Card, Typography } from "@mui/material";
// import LayoutError from "../layouts/404";

import { motion } from "framer-motion";
import Link from "next/link";

const ErrorPage = () => (
  // <LayoutError>

  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card
      className="white"
      sx={{ borderRadius: (theme) => theme.shape.borderRadius, p: 4 }}
    >
      <Typography variant="h5">Error 404</Typography>
      <Typography variant="subtitle2">
        Woops. Looks like this page doesn&apos;t exist
      </Typography>
      <Link href="/">
        <Button
          variant="contained"
          className="fg"
          sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
        >
          Go to home
        </Button>
      </Link>
    </Card>
  </motion.div>

  // {/* </LayoutError> */}
);

export default ErrorPage;
