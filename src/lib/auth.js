import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


let client;
if (!global._mongoClient) {
  client = new MongoClient(process.env.MONGO_URI);
  global._mongoClient = client;
} else {
  client = global._mongoClient;
}

const db = client.db('assignment_08');

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  },
  database: mongodbAdapter(db, {
    client
  }),
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  },
});