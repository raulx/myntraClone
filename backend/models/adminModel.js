import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  id: String,
  password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
