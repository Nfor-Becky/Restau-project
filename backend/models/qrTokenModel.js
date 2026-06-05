import mongoose from "mongoose";

const qrTokenSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    token: {
      type: String,
      required: true,
    },

    qrDate: {
      type: String,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QRToken = mongoose.model("QRToken", qrTokenSchema);

export default QRToken;