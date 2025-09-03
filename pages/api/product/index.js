import Goal from "backend/models/goalModel";
import connectDB from "backend/config/db";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Disables body parsing for this route
  },
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    const goals = await Goal.find(
      {},
      {
        text: 1,
        price: 1,
        currentPrice: 1,
        discription: 1,
        category: 1,
        // user: 1,
      }
    );

    res.status(200).json(goals);
  } else if (req.method === "POST") {
    connectDB();
    const form = formidable({ multiples: true });

    form.parse(req, async (err, body, files) => {
      if (err) {
        res.status(500).json({ error: "Form parsing failed" });
        return;
      }

      console.log("req is ......", files, body);
      if (!body.text[0]) {
        res.status(400);
        throw new Error("Please add a text field");
      }

      const goal = await Goal.create({
        text: body.text[0],
        price: body.price[0],
        currentPrice: body.currentPrice[0],
        discription: body.discription[0],
        category: body.category[0],
        // user: "8",
        img: {
          data: fs.readFileSync(files.file[0].filepath),
          contentType: files.file[0].mimetype,
        },
      });

      res.status(200).json(goal);
    });
  }
}
