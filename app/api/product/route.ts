export const runtime = "nodejs";

/* eslint-disable @typescript-eslint/no-explicit-any */
// import Goal from "@/backend/models/goalModel";
// import connectDB from "@/backend/config/db";
// import formidable from "formidable";
// import fs from "fs";

// export const config = {
//   api: {
//     bodyParser: false, // Disables body parsing for this route
//   },
// };

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     connectDB();
//     const goals = await Goal.find(
//       {},
//       {
//         text: 1,
//         price: 1,
//         currentPrice: 1,
//         discription: 1,
//         category: 1,
//         // user: 1,
//       }
//     );

//     res.status(200).json(goals);
//   } else if (req.method === "POST") {
//     connectDB();
//     const form = formidable({ multiples: true });

//     form.parse(req, async (err, body, files) => {
//       if (err) {
//         res.status(500).json({ error: "Form parsing failed" });
//         return;
//       }

//       console.log("req is ......", files, body);
//       if (!body.text[0]) {
//         res.status(400);
//         throw new Error("Please add a text field");
//       }

//       const goal = await Goal.create({
//         text: body.text[0],
//         price: body.price[0],
//         currentPrice: body.currentPrice[0],
//         discription: body.discription[0],
//         category: body.category[0],
//         // user: "8",
//         img: {
//           data: fs.readFileSync(files.file[0].filepath),
//           contentType: files.file[0].mimetype,
//         },
//       });

//       res.status(200).json(goal);
//     });
//   }
// }
// import connectDB from "@/backend/config/db";
// import Goal from "@/backend/models/goalModel";

// import formidable from "formidable";
// import fs from "fs";

// 🚫 Prevent Next.js from automatically parsing the request body
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Helper to parse form data with formidable
// const parseForm = (req: Request) => {
//   return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
//     (resolve, reject) => {
//       const form = formidable({ multiples: true });
//       form.parse(req as any, (err: any, fields: any, files: any) => {
//         if (err) reject(err);
//         else resolve({ fields, files });
//       });
//     }
//   );
// };
import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URI || "");
// GET /api/goals
export async function GET() {
  try {
    await client.connect();
    const database = client.db("test"); // Replace with your database name
    const collection = database.collection("goals");

    const goals = await collection.find({}).toArray();

    return Response.json(goals, { status: 200 });
  } catch (error: any) {
    console.error("GET goals error:", error);
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

// POST /api/goals
export async function POST(req: Request) {
  try {
    await client.connect();
    const database = client.db("test"); // Replace with your database name
    const collection = database.collection("goals");

    // Parse multipart form
    // const { fields, files } = await parseForm(req);
    const formData = await req.formData();

    if (!formData.get("text")) {
      return Response.json(
        { message: "Please add a text field" },
        { status: 400 }
      );
    }

    const file: any = formData.get("file");

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    // const base64 = buffer.toString("base64");

    console.log("sometime dont come refresh the form page", file);
    if (!file) {
      return Response.json({ message: "File not uploaded" }, { status: 400 });
    }

    const goal = await collection.insertOne({
      text: formData.get("text"),
      price: formData.get("price"),
      currentPrice: formData.get("currentPrice"),
      discription: formData.get("discription"),
      category: formData.get("category"),
      // user: "8", // add authentication later
      img: {
        data: buffer,
        contentType: file.type,
      },
    });

    return Response.json(goal, { status: 201 });
  } catch (error: any) {
    console.error("POST goal error:", error);
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
