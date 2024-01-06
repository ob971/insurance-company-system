import mongoose from "mongoose";
const Claim = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ClaimType: { type: String, required: true },
    ClaimStatus: { type: String, required: true },
    ClaimAmount: { type: String, required: true },
    PolicyHolder: { type: String, required: true },
    PaymentDate: { type: String, required: true },
    PaymentAmount: { type: String, required: true },
    ClaimDate: { type: String, required: true },
    TransactionID: { type: String, required: true },
    });
export default mongoose.models.Claim || mongoose.model("Claim", Claim);
