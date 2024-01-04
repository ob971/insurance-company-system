import mongoose from "mongoose";
  
const User = new mongoose.Schema({
  Fullname: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
  Address: { type: String, required: true },
  Gender: { type: String, required: true },
  Occupation: { type: String, required: true },
});
export default mongoose.models.User || mongoose.model("User", User);
