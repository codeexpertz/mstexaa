"use server";

import { signIn, signOut } from "./auth";
import { Contact, Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
// import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
  const formDataObject = Object.fromEntries(formData);

  const {
    userId,
    title,
    slug,
    desc,
    head,
    view_count,
    tags,
    is_published,
    publish_date,
    author,
    excerpt,
    content,
    read_time,
    featured_image,
  } = formDataObject;

  // Log the form data to see what is being received
  console.log("Form Data:", formDataObject);

  try {
    await connectToDb();

    const newPost = new Post({
      userId,
      title,
      slug,
      desc,
      head,
      view_count,
      tags,
      is_published: is_published === "on",
      publish_date: new Date(publish_date),
      author,
      excerpt,
      content,
      read_time,
      // Add handling for featured_image if necessary
    });

    // Handle the featured_image file upload
    if (featured_image && featured_image.size > 0) {
      const imageBuffer = await featured_image.arrayBuffer();
      newPost.featured_image = {
        data: Buffer.from(imageBuffer),
        contentType: featured_image.type,
        name: featured_image.name,
      };
    }

    await newPost.save();
    console.log("Saved to DB:", newPost);

    // revalidatePath("/blog");
    // revalidatePath("/admin");
    return { success: true, post: newPost };
  } catch (err) {
    console.log("Error:", err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    // revalidatePath("/blog");
    // revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    await connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    // revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    // revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    await connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const contactForm = async (previousState, formData) => {
  const { name, email, phone, message } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await newContact.save();
    console.log("Contact form saved to the database");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteContact = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDb();
    await Contact.findByIdAndDelete(id);
    console.log("deleted from db");
    // revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
