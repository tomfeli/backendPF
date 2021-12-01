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

    async getCollection(db,collection){
        const base = this.client.db(db);
        return base.collection(collection);
    }

    async setDb(){
        try{
        const db =this.client.db("avon");
        await db.createCollection("Items");
        await db.createCollection("Users");
        const items=db.collection("Items");
        const users= db.collection("Users");
        await items.insertMany([
            {
                "id":1,
                "name":"crema1",
                "cant":21,
                "price":1000,

            },
            {
                "id":2,
                "name":"crema2",
                "cant":23,
                "price":1500,
            }
        ]);
        await users.insertMany([
            {
                "id":1,
                "nombre":"pepito",
                "mail":"pepito123@hotmail.com",
                "telefono":"",
                "pass":"123456",
                "admin":false

            },
            {
                "id":2,
                "nombre":"juancito",
                "mail":"juancito456@hotmail.com",
                "telefono":"",
                "pass":"789123",
                "admin":false
            },
            {
                "id":3,
                "nombre":"clara",
                "mail":"franzoniclara23@gmail.com",
                "telefono":"",
                "pass":"123456",
                "admin":true
            },
            {
                "id":4,
                "nombre":"userqa",
                "mail":"qa.gcba@gmail.com",
                "telefono":"",
                "pass":"789123",
                "admin":true
            }
        ]);
        }
        catch(error){
            throw Error(`NOT_FOUND:${error}`);
        }
    }
}