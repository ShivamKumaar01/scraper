import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      required: true,
    },

    points: {
      type: Number,
      default: 0,
    },

    author: {
      type: String,
      required: true,
    },

    postedAt: {
      type: String,
    },

    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Story", storySchema);