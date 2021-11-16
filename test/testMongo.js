import Mongo from "../src/daos/MongoDb/MongoClient.js";

let mongo= new Mongo({uri:"mongodb://localhost:27017"});
await mongo.connect();
await mongo.close()