import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    

    name: String,
    email: String,
    resume_link: String,
    cover_note: String,
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);