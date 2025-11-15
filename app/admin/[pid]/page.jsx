/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import GoalForm from "../../../components/GoalForm";
// import GoalItem from "../../components/GoalItem";
// import Spinner from "../../components/Spinner";

// import ProductsFilter from "../../../components/products-filter";
import ProductsContent from "../../../components/products-content";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { getGoals, reset } from "store/reducers/goals/goalSlice";
// import Layout from "../../layouts/Main";
import { useParams } from "next/navigation";
import GrayHeader from "../../../components/GrayHeader";
import {
  Button,
  Card,
  Modal,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";

function Dashboard({ searchParams }) {
  const t = use(searchParams);
  const { minprice = 0, maxprice = 50000 } = t;
  const params = useParams();
  const { pid = "all-paithani" } = params;

  const [productType, setProductType] = useState(pid);
  const [productPrice, setProductPrice] = useState([minprice, maxprice]);

  const [filtersOpen, setFiltersOpen] = useState(false);
  // const [filtersSubmit, setFiltersSubmit] = useState(false);

  useEffect(() => {
    setProductType(pid);
    setProductPrice([minprice, maxprice]);
  }, [pid, minprice, maxprice]);

  useEffect(() => {
    setFiltersOpen(false);
  }, [productType]);

  const [Show, setShow] = useState(false);

  // const { goals, isLoading, isError, message } = useSelector(
  //   (state) => state.goal
  // );

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }
    const temp = JSON.parse(localStorage.getItem("user"));
    setTimeout(() => {
      if (!temp) router.push("/login");
    }, 500);
    // else dispatch(getGoals());
    // return () => {
    //   dispatch(reset());
    // };
  }, []);

  // if (isLoading) return <Spinner />;

  return (
    <motion.div
      key={productType}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GrayHeader
        isOnlyStack
        sx={{
          mb: 2,
          px: 4,
          py: 1,
          boxShadow: (theme) => theme.shadows[1],
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
        startElement={[
          <Typography variant="h6" key={"h"}>
            Add & View Products
          </Typography>,
        ]}
        endElement={[
          <Button
            variant="contained"
            sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
            key={"b"}
            className="fg"
            onClick={() => {
              setShow(!Show);
            }}
          >
            Add New Product
          </Button>,
        ]}
      ></GrayHeader>

      <Modal
        open={Show}
        onClose={() => setShow(false)}
        // title={"Filters"}
        // maxWidth={"md"}
      >
        <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
          <Card
            className="white"
            sx={{
              p: 4,
              overflow: "auto",
              my: 6,
              width: "500px",
              borderRadius: (theme) => theme.shape.borderRadius,
            }}
          >
            {" "}
            <GrayHeader
              isOnlyStack
              sx={{ mb: 4 }}
              startElement={[
                <Typography key="t" variant="h6" noWrap>
                  Add Product
                </Typography>,
              ]}
              endElement={[
                <IconButton
                  key={"b"}
                  onClick={() => setShow(false)}
                  sx={{
                    p: 0,
                  }}
                >
                  <CloseRoundedIcon />
                </IconButton>,
              ]}
            ></GrayHeader>
            <GoalForm />
          </Card>
        </Stack>
      </Modal>

      <ProductsContent
        // filtersSubmit={filtersSubmit}
        // setFiltersSubmit={setFiltersSubmit}
        admin={true}
        productType={productType}
        productPrice={productPrice}
        filtersOpen={filtersOpen}
        setFiltersOpen={setFiltersOpen}
      />
    </motion.div>
  );
}

export default Dashboard;
