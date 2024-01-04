import mongoose from "mongoose";
//  Claim ID
//  Claim Type
//  Claim Status
//  Claim Amount
//  Policy holder
//  Payment date
//  Payment amount
//  Claim date
//  Transaction ID
const Claim = mongoose.Schema({
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
