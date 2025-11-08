/* eslint-disable @typescript-eslint/no-explicit-any */
// import User from "backend/models/userModel";
// import connectDB from "backend/config/db";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";

// // Generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });
// };

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     connectDB();
//     const { email, password } = req.body;

//     // Check for user email
//     const user = await User.findOne({ email });

//     if (user && (await bcrypt.compare(password, user.password))) {
//       res.json({
//         _id: user.id,
//         name: user.name,
//         email: user.email,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(400);
//       throw new Error("Invalid credentials");
//     }
//   } else {
//     // Handle any other HTTP method
//   }
// }

// app/api/login/route.ts

import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/backend/config/db";
import User from "@/backend/models/userModel";

// Generate JWT
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });
};

// POST /api/login
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (user && password === user.password) {
      const token = generateToken(user._id.toString());

      return Response.json(
        {
          _id: user._id,
          name: user.name,
          email: user.email,
          token,
        },
        { status: 200 }
      );
    } else {
      return Response.json({ message: "Invalid credentials" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Login Error:", error);
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

// Optional: handle unsupported methods (Next.js automatically rejects others)
