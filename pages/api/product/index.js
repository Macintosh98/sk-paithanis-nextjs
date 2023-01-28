import Goal from "backend/models/goalModel";
import connectDB from "backend/config/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    const goals = await Goal.find({});

    res.status(200).json(goals);
  } else if (req.method === "POST") {
    connectDB();
    console.log("req is ......", req.files, req.body);
    if (!req.body.text) {
      res.status(400);
      throw new Error("Please add a text field");
    }

    const goal = await Goal.create({
      text: req.body.text,
      price: req.body.price,
      currentPrice: req.body.currentPrice,
      discription: req.body.discription,
      category: req.body.category,
      user: req.user.id,
      img: {
        data: req.files.file.data,
        contentType: req.files.file.mimetype,
      },
    });

    res.status(200).json(goal);
  }
}

export const config = {
  api: {
    responseLimit: false,
  },
};
