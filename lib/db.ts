
import { Db, MongoClient, ServerApiVersion } from 'mongodb';


let cachedClient : MongoClient | null = null;
let cachedDb : Db | null = null;

export async function connectToDB(){

    if(cachedClient && cachedDb){
        console.log('Returned cahced connection');
        
        return {db : cachedDb , client : cachedClient};
    }

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.ca4nmum.mongodb.net/?appName=Cluster0`;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
    });

    await client.connect();
    cachedClient = client;
    cachedDb = client.db('simple-db');

    console.log('Connected to DB');
    
    return { client , db: client.db('simple-db')};
}
