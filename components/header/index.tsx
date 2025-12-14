"use client";

import Image from "next/image";
import Link from "next/link";
import GrayHeader from "../GrayHeader";
import { Button, Stack, Typography } from "@mui/material";
import AnimateItem from "../animations/AnimateItem";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const Header = () => {
  return (
    <AnimateOnScroll>
      <AnimateItem key={"init"}>
        <GrayHeader
          isOnlyStack
          sx={{
            top: 0,
            my: 2,
            px: 4,
            position: "fixed",
            width: "84%",
            zIndex: 999,
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
                <Typography sx={{ textWrap: "nowrap" }} variant="subtitle2">
                  All Paithani
                </Typography>
              </Link>
              <Link href="/paithanis/semi-silk-paithani">
                <Typography sx={{ textWrap: "nowrap" }} variant="subtitle2">
                  Semi Silk Paithani
                </Typography>
              </Link>
              <Link href="/paithanis/pure-silk-paithani">
                <Typography sx={{ textWrap: "nowrap" }} variant="subtitle2">
                  Pure Silk Paithani
                </Typography>
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
      </AnimateItem>
    </AnimateOnScroll>
  );
};

export default Header;
