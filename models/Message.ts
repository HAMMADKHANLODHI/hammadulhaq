import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  status: "unread" | "read";
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [30, "Name cannot exceed 30 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      maxlength: [150, "Subject cannot exceed 150 characters"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message content is required"],
      minlength: [5, "Message must be at least 5 characters long"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["unread", "read"],
      default: "unread",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "contacts",
  }
);

const Contact = models.Contact || model<IContact>("Contact", ContactSchema);
export default Contact;
