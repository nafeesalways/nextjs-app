"use server";

import dbConnect from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const connection= await dbConnect();
   const db = connection.db('apollo2');
    const data =await db.collection('practise_data').find({}).toArray();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);

    return [];
  }
};
