import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnect("practise_data").findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(singleData);
}
export async function DELETE(req, { params }) {
  const p = await params;
  const result = await dbConnect("practise_data").deleteOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(result);
}
export async function PATCH(req, { params }) {
  const p = await params;
  const postedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const result = await dbConnect("practise_data").updateOne(filter, {
    $set: { ...postedData },
  });
  return Response.json(result);
}
