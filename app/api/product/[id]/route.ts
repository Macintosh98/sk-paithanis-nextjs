/* eslint-disable @typescript-eslint/no-explicit-any */
// import Goal from "@/backend/models/goalModel";
// import connectDB from "@/backend/config/db";

// export default async function handler(req, res) {
//   if (req.method === "DELETE") {
//     connectDB();
//     const goal = await Goal.findById(req.query.id);

//     if (!goal) {
//       res.status(400);
//       throw new Error("Goal not found");
//     }

//     // Check for user
//     // if (!req.user) {
//     //   res.status(401);
//     //   throw new Error("User not found");
//     // }

//     // Make sure the logged in user matches the goal user
//     // if (goal.user.toString() !== req.user.id) {
//     //   res.status(401);
//     //   throw new Error("User not authorized");
//     // }

//     await goal.deleteOne();

//     res.status(200).json({ id: req.query.id });
//   } else if (req.method === "GET") {
//     connectDB();
//     const goal = await Goal.findById(req.query.id);

//     if (!goal) {
//       res.status(400);
//       throw new Error("Goal not found");
//     }

//     // // Check for user
//     // if (!req.user) {
//     //   res.status(401)
//     //   throw new Error('User not found')
//     // }

//     // // Make sure the logged in user matches the goal user
//     // if (goal.user.toString() !== req.user.id) {
//     //   res.status(401)
//     //   throw new Error('User not authorized')
//     // }

//     res.status(200).json(goal);
//   } else if (req.method === "PUT") {
//     connectDB();
//     const goal = await Goal.findById(req.query.id);

//     if (!goal) {
//       res.status(400);
//       throw new Error("Goal not found");
//     }

//     // // Check for user
//     // if (!req.user) {
//     //   res.status(401);
//     //   throw new Error("User not found");
//     // }

//     // // Make sure the logged in user matches the goal user
//     // if (goal.user.toString() !== req.user.id) {
//     //   res.status(401);
//     //   throw new Error("User not authorized");
//     // }

//     const updatedGoal = await Goal.findByIdAndUpdate(req.query.id, req.body, {
//       new: true,
//     });

//     res.status(200).json(updatedGoal);
//   }
// }

// app/api/goals/[id]/route.ts

import connectDB from "@/backend/config/db";
import Goal from "@/backend/models/goalModel";

// GET /api/goals/[id]
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  try {
    await connectDB();
    const goal = await Goal.findById(id);

    if (!goal) {
      return Response.json({ message: "Goal not found" }, { status: 400 });
    }

    return Response.json(goal, { status: 200 });
  } catch (error: any) {
    console.error("GET Goal Error:", error);
    return Response.json(
      // { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

// PUT /api/goals/[id]
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  try {
    await connectDB();

    const goal = await Goal.findById(id);
    if (!goal) {
      return Response.json({ message: "Goal not found" }, { status: 400 });
    }

    const body = await req.json();
    const updatedGoal = await Goal.findByIdAndUpdate(id, body, {
      new: true,
    });

    return Response.json(updatedGoal, { status: 200 });
  } catch (error: any) {
    console.error("PUT Goal Error:", error);
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/goals/[id]
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  try {
    await connectDB();

    const goal = await Goal.findById(id);
    if (!goal) {
      return Response.json({ message: "Goal not found" }, { status: 400 });
    }

    await goal.deleteOne();

    return Response.json({ id: id }, { status: 200 });
  } catch (error: any) {
    console.error("DELETE Goal Error:", error);
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
