//
// import jwt from "jsonwebtoken";
// import connectDB from "@/backend/config/db";
// import User from "@/backend/models/userModel";

// // Generate JWT
// const generateToken = (id: string) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET as string, {
//     expiresIn: "30d",
//   });
// };

// // POST /api/register
// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const { name, email, password } = await req.json();

//     if (!name || !email || !password) {
//       return Response.json(
//         { message: "Please add all fields" },
//         { status: 400 }
//       );
//     }

//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return Response.json(
//         { message: "User already exists" },
//         { status: 400 }
//       );
//     }

//     // Create user
//     const user = await User.create({
//       name,
//       email,
//       password: password,
//     });

//     if (!user) {
//       return Response.json(
//         { message: "Invalid user data" },
//         { status: 400 }
//       );
//     }

//     // Successful creation
//     const token = generateToken(user._id.toString());
//     return Response.json(
//       {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         token,
//       },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     console.error("Register Error:", error);
//     return Response.json(
//       { message: "Server error", error: error.message },
//       { status: 500 }
//     );
//   }
// }
export async function GET() {

    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );

}