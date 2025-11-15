/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Typography } from "@mui/material";
function GoalItem({ goal }) {
  const router = useRouter();
  const [base64, setBase64] = useState("");

  const deleteGoal = async (id) => {
    const config = {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete("/api/product/" + id, config);
    router.refresh();
  };

  useEffect(() => {
    const a = new Uint8Array(goal.img?.data.data);
    const b = a.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, "");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBase64(btoa(b));
  }, [goal]);

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <Typography
        variant="h5"
        sx={{
          backgroundColor: "black",
          padding: "10px",
          marginTop: "10px",
          color: "white",
        }}
      >
        {goal.text}
      </Typography>
      <br />
      <Typography variant="subtitle1" style={{ color: "#555" }}>
        {goal.discription} - {goal.category}
      </Typography>
      <br />
      <img
        alt=""
        width={"80%"}
        style={{ borderRadius: "20px" }}
        src={"data:" + goal.img.contentType + ";base64," + base64}
      />
      <Typography variant="subtitle1">
        Rs. {goal.currentPrice}/{goal.price}
      </Typography>
      <Button
        variant="contained"
        className="fg"
        onClick={() => deleteGoal(goal._id)}
        sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
      >
        X
      </Button>
    </div>
  );
}

export default GoalItem;
