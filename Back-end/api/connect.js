// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI = "mongodb+srv://Joao:Moose17@cluster0.yh5eafb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(URI);

export const db = client.db("Spotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
