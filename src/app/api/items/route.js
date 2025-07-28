import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect('practise_data').find({}).toArray();
  return Response.json(data);
}
export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect('practise_data').insertOne(postedData);
  return Response.json(result);
}
 