import mongoose from "mongoose";
import payment from "../../../models/payment";
import connectDB from "../../../utils/dbConnect";
import { NextResponse } from "next/server";
 export async function POST(req , res){
    await connectDB();
    let passedValue = await new Response(req.body).text();
    let bodyreq = JSON.parse(passedValue);
    const Payment = new payment({
        userId: bodyreq.userId,
        PaymentId: bodyreq.PaymentId,
        Payer: bodyreq.Payer,
        PaymentAmount: bodyreq.PaymentAmount,
        PaymentDate: bodyreq.PaymentDate,
        Reason: bodyreq.Reason,
        TransactionMethod: bodyreq.TransactionMethod,
        PaymentReason: bodyreq.PaymentReason,
    });
    await Payment.save();
    console.log(Payment);
    return NextResponse.json(Payment);
    }