import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      // required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    head: {
      type: String,
    },
    view_count: {
      type: String,
    },
    tags: {
      type: String,
    },
    featured_image: {
      type: mongoose.Schema.Types.Mixed,
    },
    is_published: {
      type: String,
    },
    publish_date: {
      type: String,
    },
    author: {
      type: String,
    },
    excerpt: {
      type: String,
    },
    content: {
      type: String,
    },
    read_time: {
      type: String,
    },
  },
  { timestamps: true }
);

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Contact =
  mongoose.models?.Contact || mongoose.model("Contact", contactSchema);
