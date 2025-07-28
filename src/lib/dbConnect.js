import { MongoClient, ServerApiVersion } from 'mongodb';
async function dbConnect(collectionName){
try{
      const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b4gl5td.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
return await client.db(process.env.DB_NAME).collection(collectionName)
}catch(err){
  console.log(err);
  
}
}
export default dbConnect; 