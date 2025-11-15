"use client";
import { Button, Card, Divider, TextField, Typography } from "@mui/material";
// import Layout from "../layouts/Main";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { server } from "../utils/server";
// import { postData } from "../utils/services";
import { motion } from "framer-motion";
import Link from "next/link";

// type ForgotMail = {
//   email: string;
// };

const ForgotPassword = () => {
  // const { register, handleSubmit, errors } = useForm();

  // const onSubmit = async (data: ForgotMail) => {
  //   const res = await postData(`${server}/api/login`, {
  //     email: data.email,
  //   });

  //   console.log(res);
  // };

  return (
    // <Layout>
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        className="white"
        sx={{
          width: "400px",
          justifySelf: "center",
          p: 4,
          mb: 8,
          textAlign: "center",
          boxShadow: (theme) => theme.shadows[1],
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
      >
        <Typography variant="h5">Forgot your password?</Typography>
        <Divider />
        <Typography variant="subtitle2">
          Enter your email or phone number and recover your account
        </Typography>
        <br />
        <form>
          <div>
            <TextField
              variant="filled"
              fullWidth
              placeholder="email"
              type="email"
              name="email"
            />
          </div>
          <br />
          <TextField
            variant="filled"
            fullWidth
            type="password"
            placeholder="Password"
            name="password"
            // ref={register({ required: true })}
          />
          <br /> <br />
          <Button
            variant="contained"
            fullWidth
            className="fg"
            sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
          >
            Reset password
          </Button>{" "}
          <br /> <br />
          <Typography variant="subtitle2">
            <Link href="/login">Have the password?</Link>
          </Typography>
        </form>
      </Card>
    </motion.div>
  );
};

export default ForgotPassword;
