import mongoose from "mongoose";
import claims from "../../../models/claims";
import connectDB from "../../../utils/dbConnect";
import { NextResponse } from "next/server";
export async function POST(req , res){
   await connectDB();
   let passedValue = await new Response(req.body).text();
   let bodyreq = JSON.parse(passedValue);
   const Claim = new claims({
     userId: bodyreq.userId,
        ClaimType: bodyreq.ClaimType,
        ClaimStatus: bodyreq.ClaimStatus,
        ClaimAmount: bodyreq.ClaimAmount,
        PolicyHolder: bodyreq.PolicyHolder,
        PaymentDate: bodyreq.PaymentDate,
        PaymentAmount: bodyreq.PaymentAmount,
        ClaimDate: bodyreq.ClaimDate,
        TransactionID: bodyreq.TransactionID,
   });
   await Claim.save();
   console.log(Claim);
   return NextResponse.json(Claim);
   
   }