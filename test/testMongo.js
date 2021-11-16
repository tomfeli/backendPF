import Mongo from "../src/daos/MongoDb/Mongo.js";

let mongo= new Mongo("mongodb://localhost:27017");
mongo.connect();