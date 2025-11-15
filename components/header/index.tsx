"use client";

import Image from "next/image";
import Link from "next/link";
import GrayHeader from "../GrayHeader";
import { Button, Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <GrayHeader
      isOnlyStack
      sx={{
        my: 2,
        px: 4,
        boxShadow: (theme) => theme.shadows[1],
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
      startElement={[
        <Link key={"logo"} href="/">
          <Image
            alt=""
            src={"/images/logo_21_comp.png"}
            height={60}
            width={100}
          />
        </Link>,
      ]}
      centerElement={[
        <Stack
          direction={"row"}
          spacing={3}
          px={2}
          py={1}
          className="bg"
          sx={{
            boxShadow: (theme) => theme.shadows[1],
            borderRadius: (theme) => theme.shape.borderRadius,
          }}
          key={"hlink"}
        >
          <Link href="/paithanis/all-paithani">
            <Typography variant="subtitle2">All Paithani</Typography>
          </Link>
          <Link href="/paithanis/semi-silk-paithani">
            <Typography variant="subtitle2">Semi Silk Paithani</Typography>
          </Link>
          <Link href="/paithanis/pure-silk-paithani">
            <Typography variant="subtitle2">Pure Silk Paithani</Typography>
          </Link>
        </Stack>,
      ]}
      endElement={[
        <Link href="/login" key={"hlogin"}>
          <Button
            variant="contained"
            className="fg"
            sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
          >
            {" "}
            Sign In/Up
          </Button>
        </Link>,
      ]}
    />
  );
};

export default Header;
