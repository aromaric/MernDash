import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
   // rang: { type: String, required: false },
   // unite: { type: String, required: false },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allIncidents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Incident" }],
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;