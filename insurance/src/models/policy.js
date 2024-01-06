import mongoose from "mongoose";

const Policy = mongoose.Schema({
  policyId: { type: String, required: true },
  InsuredProperty: { type: String, required: true },
  PolicyHolder: { type: String, required: true },
  PolicyStartDate: { type: String, required: true },
  PolicyRenewal: { type: String, required: true },
  TotalCost: { type: String, required: true },
  NextPaymentDate: { type: String, required: true },
  Premium: { type: String, required: true },
});

export default mongoose.model.Policy || mongoose.model("Policy", Policy);