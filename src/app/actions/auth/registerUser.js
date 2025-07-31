"use server"

import dbConnect, { collectionNames } from "@/lib/dbConnect"

export const registerUser = async(payload)=>{
    //need to check if unique username was given


   try{
     const result = await dbConnect(collectionNames.TEST_USER).insertOne(payload);
     console.log(payload,result)
    return result;
   }catch(err){
    console.log(err);
    
   }
}
