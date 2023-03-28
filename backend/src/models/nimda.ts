import mongoose from "mongoose";

export interface adminModel extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  mobileNumber: number;
  gender: string;
  facebook: string;
  twitter: string;
  google: string;
  instagram: string;
  linkedin: string;
  website: string;
  profileImage: string;
}

export const adminSchema = new mongoose.Schema<adminModel>({
  name: { type: String, default: "" },
  email: { type: String, unique: true },
  password: { type: String, default: "" },
  mobileNumber: { type: Number, default: 0 },
  facebook: { type: String, default: "" },  
  twitter: { type: String, default: "" },
  google: { type: String, default: "" },
  instagram: { type: String, default: "" },
  linkedin: { type: String, default: "" },
  gender: { type: String, default: "" },
  website: { type: String, default: "" },
  profileImage: { type: String, default: "" },
});

const admin = mongoose.model<adminModel>("nimda", adminSchema);
export default admin;
