const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    text: {
      type: String,
      required: [true, "Please add a name value"],
    },
    discription: {
      type: String,
      required: [true, "Please add a discription value"],
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
      required: [true, "Please add a price value"],
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

mongoose.models = {};
module.exports = mongoose.model("Goal", goalSchema);
