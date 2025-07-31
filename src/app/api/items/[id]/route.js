import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnect(collectionNames.PRACTICE_DATA).findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(singleData);
}
export async function DELETE(req, { params }) {
  const p = await params;
  const result = await dbConnect(collectionNames.PRACTICE_DATA).deleteOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(result);
}
export async function PATCH(req, { params }) {
  const p = await params;
  const postedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const result = await dbConnect(collectionNames.PRACTICE_DATA).updateOne(filter, {
    $set: { ...postedData },
  });
  return Response.json(result);
}
