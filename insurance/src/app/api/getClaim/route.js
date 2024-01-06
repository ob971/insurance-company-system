import { NextResponse } from "next/server";
import connectDB from "../../../utils/dbConnect";
import Claim from "../../../models/claims";

export async function GET(req) {
  await connectDB();
  const { userId } = req.query;
  const payments = await Claim.find({ userId });
  return new NextResponse().json(payments);
}
