import Mongo from "./MongoClient.js";
import {MONGO_CONFIG} from "../../config/config.js"
const Mongo=new Mongo(MONGO_CONFIG)

export function getMongoClient(){
    return Mongo;
}
