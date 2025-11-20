"use client";
import AnimateItem from "@/components/animations/AnimateItem";
import { Button, Card, Typography } from "@mui/material";
// import LayoutError from "../layouts/404";

import { motion } from "framer-motion";
import Link from "next/link";

const ErrorPage = () => (
  // <LayoutError>

  <AnimateItem key="init">
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
  </AnimateItem>

  // {/* </LayoutError> */}
);

export default ErrorPage;
