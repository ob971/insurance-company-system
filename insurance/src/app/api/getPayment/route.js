import { NextResponse } from "next/server";
import connectDB from "../../../utils/dbConnect";
import payment from "../../../models/payment";

export async function GET(req, res) {
  await connectDB();
  const payments = await payment.find({});
  return NextResponse.json(payments);
}
