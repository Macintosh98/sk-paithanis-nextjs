"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import Layout from "../layouts/Main";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// import Spinner from "../../components/Spinner";
// import { server } from "../utils/server";
// import { postData } from "../utils/services";
import { motion } from "framer-motion";
import axios from "axios";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AnimateItem from "@/components/animations/AnimateItem";

type LoginMail = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [user, setUser] = useState();
  const [isError, setIsError] = useState(false);

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

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const response = await axios.post("/api/login/", formData);
    if (response.status != 200) {
      setIsError(true);
    }
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    setUser(response.data);
  };

  const router = useRouter();

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }

    if (user) {
      router.push("/admin/all-paithani");
    }

    // dispatch(reset());
  }, [user]);

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
    <AnimateItem key="init">
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
        <Typography variant="h5">Log in</Typography>
        <Divider />
        <Typography variant="subtitle2">
          Enter your email or phone number and recover your account
        </Typography>
        <br />
        <form onSubmit={onSubmit}>
          <TextField
            variant="filled"
            placeholder="email"
            fullWidth
            type="text"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
          <br /> <br />
          <TextField
            variant="filled"
            fullWidth
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />{" "}
          <br /> <br />
          {isError && (
            <Typography variant="subtitle2">
              {"error in api of login"}
            </Typography>
          )}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Checkbox />
              <Typography variant="subtitle2">Keep me signed in</Typography>
            </Stack>

            <Link href="/forgot-password">Forgot password?</Link>
          </Stack>
          <br />
          <Button
            variant="contained"
            className="fg"
            fullWidth
            type="submit"
            sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
          >
            Sign in
          </Button>
          <br /> <br />
          <Typography variant="subtitle2">
            Not a member yet? <Link href="/register">Sign up</Link>
          </Typography>
        </form>
      </Card>
    </AnimateItem>
    // {/* </Layout> */}
  );
};

export default LoginPage;
