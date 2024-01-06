import { NextResponse } from "next/server";
import connectDB from "../../../utils/dbConnect";
import Payment from "../../../models/payment";

export async function GET(req) {
  await connectDB();
  // const { userId } = req.query;
  const payments = await Payment.find({
      userId: "6598fb57804b9630c26887bc",
   
  });

   return NextResponse.json(payments);
}
