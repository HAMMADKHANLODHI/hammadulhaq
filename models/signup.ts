import mongoose, { Schema, Document, models, model} from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minlength: [2, "Username must be at least 2 characters long"],
      maxlength: [30, "Username cannot exceed 30 characters"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      maxlength: [100, "Password cannot exceed 100 characters"],
      trim: true,
      
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "users",
  }
);

const User = models.User || model<IUser>("User", UserSchema);
export default User;