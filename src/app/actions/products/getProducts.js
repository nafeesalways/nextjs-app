"use server";

import dbConnect from "@/lib/dbConnect";

export const getProducts =async()=>{
       try{
     const data = await dbConnect("practise_data").find({}).toArray();
    return data;
   }catch(err){
    console.log(err);
    
     return [];
   }
}