import { NextResponse } from "next/server";
import user from "../../../models/user";
import connectDB from "../../../utils/dbConnect";

export async function POST(req, res) {
  await connectDB();
  let passedValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passedValue);
  console.log(bodyreq);
  const { Fullname, Email, Phone, Address, Gender, Occupation } = bodyreq;
  console.log(Fullname);
  console.log(user)
  const person = new user({
    Fullname,
    Email,
    Phone,
    Address,
    Gender,
    Occupation,
    
  });
  await person.save();
  console.log(person);
  return NextResponse.json(person);
}
