"use client";
import AnimateItem from "@/components/animations/AnimateItem";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
// import Layout from "../layouts/Main";
import { motion } from "framer-motion";
import Link from "next/link";

const RegisterPage = () => (
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
      <Typography variant="h5">Sign Up</Typography>
      <Divider />
      <Typography variant="subtitle2">
        Create an account and discover the benefits
      </Typography>
      <br />
      <form>
        <div>
          <TextField
            variant="filled"
            fullWidth
            placeholder="First Name"
            type="text"
          />
        </div>
        <br />
        <div>
          <TextField
            variant="filled"
            fullWidth
            placeholder="Last Name"
            type="text"
          />
        </div>
        <br />
        <div>
          <TextField
            variant="filled"
            fullWidth
            placeholder="Email"
            type="text"
          />
        </div>
        <br />
        <div>
          <TextField
            variant="filled"
            fullWidth
            type="Password"
            placeholder="Password"
          />
        </div>
        <br />
        <div>
          <div>
            <label htmlFor="check-signed-in">
              <Checkbox />I agree to the Google Terms of Service and Privacy
              Policy
            </label>
          </div>
        </div>
        <br />
        <Button
          variant="contained"
          fullWidth
          className="fg"
          sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
        >
          Sign up
        </Button>
        <br /> <br />
        <Typography variant="subtitle2">
          <Link href="/login">Are you already a member?</Link>
        </Typography>
      </form>
    </Card>
  </AnimateItem>
);

export default RegisterPage;
