// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cachedClient = global._mongoClient;

if (!cachedClient) {
  cachedClient = global._mongoClient = { conn: null, promise: null };
}

async function dbConnect() {
  if (cachedClient.conn) {
    return cachedClient.conn;
  }

  if (!cachedClient.promise) {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    cachedClient.promise = client.connect().then((client) => {
      return client;
    });
  }

  cachedClient.conn = await cachedClient.promise;
  return cachedClient.conn;
}

export default dbConnect;
