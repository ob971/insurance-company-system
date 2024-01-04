import mongoose from "mongoose";
const Payment = mongoose.Schema({
    Payer: { type: String, required: true },
    PaymentAmount: { type: String, required: true },
    PaymentDate: { type: String, required: true },
    TransactionMethod: { type: String, required: true },
    PaymentReason: { type: String, required: true },
    });
export default mongoose.models.Payment || mongoose.model("Payment", Payment);
