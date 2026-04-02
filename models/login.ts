import mongoose, { Schema, Document, models, model } from "mongoose";
import argon2 from "argon2"; // Import correctly here too

export interface IUser extends Document {
  username: string;
  password: string;
  role: "admin" | "user";
  comparePassword(candidate: string): Promise<boolean>; // Add this to interface
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, select: false }, // Gold Standard: Hide password by default
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true, collection: "users" }
);

// --- ATTACH THE METHOD ---
UserSchema.methods.comparePassword = async function (candidate: string) {
  return await argon2.verify(this.password, candidate);
};

const User = models.User || model<IUser>("User", UserSchema);
export default User;