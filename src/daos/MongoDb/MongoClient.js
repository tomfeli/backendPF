import {MongoClient} from "mongodb";
export default class Mongo{
    constructor(config){
        this.client= new MongoClient(config.uri);
    }
    async close(){
        try{
            await this.client.close();
        }
        catch(error){
            throw Error(`NOT_FOUND:${error}`);
        }
        
    }
    async connect(){
        try{
            await this.client.connect();
        }
        catch(error){
            throw Error(`NOT_FOUND:${error}`);
        }
    }
}