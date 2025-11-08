// /* eslint-disable @typescript-eslint/no-require-imports */
// const mongoose = require("mongoose");

// const goalSchema = mongoose.Schema(
//   {
//     // user: {
//     //   type: mongoose.Schema.Types.ObjectId,
//     //   required: true,
//     //   ref: "User",
//     // },
//     text: {
//       type: String,
//       required: [true, "Please add a name value"],
//     },
//     discription: {
//       type: String,
//       required: [true, "Please add a discription value"],
//     },
//     category: {
//       type: String,
//       required: [true, "Please add a category value"],
//     },
//     price: {
//       type: Number,
//       required: [true, "Please add a price value"],
//     },
//     currentPrice: {
//       type: Number,
//       required: [true, "Please add a price value"],
//     },
//     img: {
//       data: Buffer,
//       contentType: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// mongoose.models = {};
// module.exports = mongoose.model("Goal", goalSchema);

import mongoose, { Schema, Document, Model } from "mongoose";

export interface IGoal extends Document {
  // _id: Types.ObjectId;
  text: string;
  discription: string;
  category: string;
  price: number;
  currentPrice: number;
  img?: {
    data: Buffer;
    contentType: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const goalSchema = new Schema<IGoal>(
  {
    // _id: {
    //   type: Schema.Types.ObjectId,
    //   auto: true, // Mongoose will automatically create an ObjectId
    // },
    text: {
      type: String,
      required: [true, "Please add a name value"],
    },
    discription: {
      type: String,
      required: [true, "Please add a description value"],
    },
    category: {
      type: String,
      required: [true, "Please add a category value"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price value"],
    },
    currentPrice: {
      type: Number,
      required: [true, "Please add a current price value"],
    },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Goal: Model<IGoal> =
  mongoose.models.Goal || mongoose.model<IGoal>("Goal", goalSchema);
export default Goal;
