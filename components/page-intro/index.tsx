import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Stack, Typography } from "@mui/material";

const PageIntro = () => {
  return (
    <section
      // className="page-intro"
      style={
        {
          //featured-111
          // background: "url('/images/featured-111.png') no-repeat left top",
          // backgroundSize: "contain",
        }
      }
    >
      <div
      // style={{
      //   background: "url('/images/4442.png') no-repeat right top",
      //   backgroundSize: "contain",
      // }}
      >
        <div
        // className="page-intro__slide"
        // style={{
        //   backgroundImage: "url('/images/slide-1.png')",
        // }}
        >
          {/* // <div className="container"> */}
          <Stack direction={"row"} justifyContent={"end"} my={8} mr={30}>
            <Stack spacing={2}>
              <Typography
                variant="h5"
                sx={{
                  p: 2,
                  borderRadius: (theme) => theme.shape.borderRadius,
                  boxShadow: (theme) => theme.shadows[1],
                }}
                className="white"
              >
                VAKRATUNDA SK <br />
                Paithani & Sarees
              </Typography>
              <motion.div
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  // borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  // repeatDelay: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    p: 1,
                    width: "fit-content",
                    borderRadius: (theme) => theme.shape.borderRadius,
                    boxShadow: (theme) => theme.shadows[1],
                  }}
                  className="white"
                >
                  SALE 20% OFF
                </Typography>
              </motion.div>

              <Link href="/paithanis/all-paithani">
                <Button
                  variant="contained"
                  sx={{
                    p: 1,
                    width: "fit-content",
                    borderRadius: (theme) => theme.shape.borderRadius,
                    // boxShadow: (theme) => theme.shadows[1],
                  }}
                  className="fg"
                >
                  Shop now
                </Button>
              </Link>
            </Stack>
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
