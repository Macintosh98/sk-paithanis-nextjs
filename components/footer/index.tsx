import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack spacing={4} mt={4}>
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={1}
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius,
            }}
          >
            <Box p={2} textAlign="center">
              <Image
                src="/images/logo_21_comp.png"
                alt="Vakratunda Logo"
                width={200}
                height={120}
              />
              <Paper
                elevation={1}
                sx={{ p: 2, borderRadius: (theme) => theme.shape.borderRadius }}
                className="bg"
              >
                <Typography variant="body2">
                  House My Brand designs clothing for the young, the old &
                  everyone in between – but most importantly, for the
                  fashionable.
                </Typography>
              </Paper>
            </Box>
          </Paper>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper
                elevation={1}
                sx={{
                  height: "250px",
                  borderRadius: (theme) => theme.shape.borderRadius,
                }}
              >
                <Box p={2}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      fontSize: "15px",
                      borderRadius: (theme) => theme.shape.borderRadius,
                    }}
                    className="bg"
                  >
                    <Typography variant="subtitle1">Shopping online</Typography>
                    <Divider />
                    <br />
                    <Link href="#">Order Status</Link>
                    <br />

                    <Link href="#">Shipping and Delivery</Link>
                    <br />

                    <Link href="#">Returns</Link>
                    <br />

                    <Link href="#">Payment options</Link>
                    <br />

                    <Link href="#">Contact Us</Link>
                  </Paper>
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper
                elevation={1}
                sx={{
                  height: "250px",
                  borderRadius: (theme) => theme.shape.borderRadius,
                }}
              >
                <Box p={2}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      fontSize: "15px",
                      borderRadius: (theme) => theme.shape.borderRadius,
                    }}
                    className="bg"
                  >
                    <Typography variant="subtitle1">Information</Typography>
                    <Divider />
                    <br />
                    <Link href="#">Gift Cards</Link>
                    <br />

                    <Link href="#">Find a store</Link>
                    <br />

                    <Link href="#">Newsletter</Link>
                    <br />

                    <Link href="#">Become a member</Link>
                    <br />

                    <Link href="#">Site feedback</Link>
                  </Paper>{" "}
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper
                elevation={1}
                sx={{
                  height: "250px",
                  borderRadius: (theme) => theme.shape.borderRadius,
                }}
              >
                <Box p={2}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      fontSize: "15px",
                      borderRadius: (theme) => theme.shape.borderRadius,
                    }}
                    className="bg"
                  >
                    <Typography variant="subtitle1">Contact</Typography>
                    <Divider />
                    <br />
                    <Link href="https://wa.me/+917350451717">
                      Hotline: +91 7350451717
                    </Link>
                  </Paper>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Stack direction={"row"}>
        <Paper
          elevation={1}
          sx={{
            width: "100%",
            mb: 2,
            px: 4,
            py: 2,
            borderRadius: (theme) => theme.shape.borderRadius,
          }}
        >
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            className="white"
          >
            DESIGN BY{" "}
            <Link href="http://abhishekzambare.vercel.app/">
              &quot;Abhishek Zambare&quot;
            </Link>{" "}
            - © 2022. ALL RIGHTS RESERVED.
          </Typography>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default Footer;
