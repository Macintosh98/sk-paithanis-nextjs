import Goal from "backend/models/goalModel";
import connectDB from "backend/config/db";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    connectDB();
    const goal = await Goal.findById(req.query.id);

    if (!goal) {
      res.status(400);
      throw new Error("Goal not found");
    }

    // // Check for user
    // if (!req.user) {
    //   res.status(401);
    //   throw new Error("User not found");
    // }

    // // Make sure the logged in user matches the goal user
    // if (goal.user.toString() !== req.user.id) {
    //   res.status(401);
    //   throw new Error("User not authorized");
    // }

    const updatedGoal = await Goal.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedGoal);
  } else {
    // Handle any other HTTP method
  }
}
