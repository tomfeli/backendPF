import {MongoClient} from "mongodb";
export default class MongoClient{
    constructor(config){
        this.client= new MongoClient(config.uri);
    }
    async close(){
        try{
            this.mongoClient.close();
        }
        catch(error){
            throw new Error(`NOT_FOUND:${error.message}`);
        }
        
    }
    async connect(){
        try{
            await this.client.connect();
        }
        catch(error){
            throw new Error(`NOT_FOUND:${error.message}`);
        }
    }
}