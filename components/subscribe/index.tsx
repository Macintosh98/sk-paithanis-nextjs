import { Stack, Button, Card, TextField, Typography } from "@mui/material";

const Subscribe = () => {
  return (
    <Card
      className="white"
      sx={{
        backgroundImage: "url(/images/pngegg2.png)",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        height={"300px"}
        spacing={4}
      >
        <Typography variant="h6" className="white">
          Subscribe to our newsletter and receive exclusive offers every week
        </Typography>

        <TextField variant="filled" type="email" placeholder="Email address" />
        <Button
          variant="contained"
          className="fg"
          sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
        >
          Subscribe
        </Button>
      </Stack>
    </Card>
  );
};

export default Subscribe;
