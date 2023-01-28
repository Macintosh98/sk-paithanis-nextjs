import Goal from "backend/models/goalModel";
import connectDB from "backend/config/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    const goals = await Goal.find({});

    res.status(200).json(goals);
  } else {
    // Handle any other HTTP method
  }
}
