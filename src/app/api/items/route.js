import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect(collectionNames.PRACTICE_DATA).find({}).toArray();
  return Response.json(data);
}
export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect(collectionNames.PRACTICE_DATA).insertOne(postedData);
  return Response.json(result);
}
 