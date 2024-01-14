import mongoose, { Schema } from "mongoose";

const mongodbUri = process.env.MONGODB_URI || ""; // Set a default value if MONGODB_URI is undefined
mongoose.connect(mongodbUri);

mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
