"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../css/output.css";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  extendTheme,
  ThemeProvider,
} from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const theme = extendTheme({
  shadows: [
    "none",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
    "0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 13px rgba(0, 0, 0, 0.05),0 0px 25px rgba(0, 0, 0, 0.05)",
  ],

  typography: {
    fontWeightLight: "800",
    fontWeightRegular: "800",
    fontWeightMedium: "800",
    fontWeightBold: "800",
  },
  shape: {
    borderRadius: "30px !important",
  },
  transitions: {
    duration: {
      shortest: 1000,
      shorter: 1000,
      short: 1000,
      standard: 1000,
      complex: 1000,
      enteringScreen: 1000,
      leavingScreen: 1000,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-input": {
            padding: "10px 40px !important",
          },
          // margin: "0px !important",
          paddingTop: "0px !important",
          animation: "bg 10s infinite",
          borderRadius: "30px !important",
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.05)",
          "&::before, &::after": {
            borderRadius: "30px !important",
            borderBottom: "0px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderRadius: "30px !important",
            borderBottom: "0px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderRadius: "30px !important",
            borderBottom: "0px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          // margin: "0px !important",
          // padding: "0px !important",
          borderRadius: "30px !important",
          "&::before": {
            borderRadius: "30px !important",
            borderBottom: "0px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderRadius: "30px !important",
            borderBottom: "0px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderRadius: "30px !important",
            borderBottom: "0px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
  },
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{"vakratunda sk paithani"}</title>

        <meta
          name="google-site-verification"
          content="uekPvgvSmjuATzDfa7Gwm3DVHPDk0obila4r-7tj-KY"
        />
        <meta
          name="keywords"
          content="vakratunda-sk-paithani,paithanis,sarees,vakratunda-paithani,sk-paithani"
        ></meta>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="description"
          content="Looking for Paithani Sarees online? vakratunda-sk-paithani.com offers 100% original Paithani Silk Sarees, Yeola Paithani Sarees, 9 Yards Sarees, Bridal Sarees &amp; more!"
        />
        <meta property="og:site_name" content="vakratunda-sk-paithani" />
        <meta property="og:title" content={"vakratunda sk paithani"} />
        <meta
          property="og:url"
          content="https://vakratunda-sk-paithani.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Looking for Paithani Sarees online? vakratunda-sk-paithani.com offers 100% original Paithani Silk Sarees, Yeola Paithani Sarees, 9 Yards Sarees, Bridal Sarees &amp; more!"
        />
        <meta
          property="og:image"
          content="http://cdn.shopify.com/s/files/1/0308/8495/4252/files/FB_1_1200x630.jpg?v=1613691615"
        />
        <meta
          property="og:image:secure_url"
          content="https://cdn.shopify.com/s/files/1/0308/8495/4252/files/FB_1_1200x630.jpg?v=1613691615"
        />
        <meta name="twitter:site" content="@vakratunda-sk-paithani" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"vakratunda sk paithani"} />
        <meta
          name="twitter:description"
          content="Looking for Paithani Sarees online? vakratunda-sk-paithani.com offers 100% original Paithani Silk Sarees, Yeola Paithani Sarees, 9 Yards Sarees, Bridal Sarees &amp; more!"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <Container sx={{ overflow: "auto", height: "100vh" }}>
            <Header />
            <Box sx={{ mt: 13, justifyContent: "center" }}> {children}</Box>

            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
