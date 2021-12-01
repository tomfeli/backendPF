import Mongo from "../MongoDb/MongoClient.js";

export default class DaoUsuariosMock{
    
    constructor(config){
        this.mongoClient=new Mongo(config);
    }



    async getAll() {
        await this.mongoClient.connect();
        let result=[];
        try{
            let client=await(this.mongoClient.getClient())
            let db=client.db("avon");
            let collection=  db.collection("Users");
            let searchCursor =await collection.find();
            while(await searchCursor.hasNext()){
                result.push(await searchCursor.next());
            }
        }
        catch(error){
            throw new Error(`INVALID_ARGS:${error}`);
        }
        await this.mongoClient.close();
        return result;
    }
    async getById(id){
        let resultado=null;
        let client=await this.mongoClient.getClient();
            let db=client.db("avon");
            let collection= db.collection("Users");
            let searchCursor = await collection.findOne({"id":id});
            if(await searchCursor.hasNext()){
                resultado=await searchCursor.next();
            }
        return resultado;
    }
    async getByEmail(email){
        await this.mongoClient.connect();
        let resultado=null;
        let collection=await this.mongoClient.getCollection("avon","Users");
        let searchCursor = await collection.find({"mail":email});
            if(await searchCursor.hasNext()){
                resultado=await searchCursor.next();
            }
        return resultado;
    }
    async save(user){
        let collection=await this.mongoClient.getCollection("avon","Users");
        user.id=await collection.count;
        const insertCursor=await collection.insertOne({
            "id":user.id,
            "nombre":user.nombre,
            "mail":user.mail,
            "telefono":user.telefono,
            "pass":user.password,
            "admin":user.admin,
        });
        return insertCursor;
    }
}
/*export default class DaoUsuariosMock{
    constructor(){
        this.usuarios=[
            {
                "id":1,
                "nombre":"Pepe",
                "mail":"ajhonatan@gmail.com",
                "telefono":555555,
                "password":"123456"
            },
            {
                "id":2,
                "nombre":"Juan",
                "mail":"juancito456@hotmail.com",
                "telefono":111111,
                "pass":"789123"
            },
            {
                "id":3,
                "nombre":"Franco",
                "mail":"franzoniclara23@gmail.com",
                "telefono":222222,
                "pass":"123456"
            },
            {
                "id":4,
                "nombre":"Kike",
                "mail":"qa.gcba@gmail.com",
                "telefono":3541515,
                "pass":"789123"
            }
        ]
    }
    async getAll() {
        return this.usuarios;
    }
    async getById(id){
        return this.usuarios.find(user=>user.id===id);
    }
    async getByEmail(email){
        return this.usuarios.find(user=>user.mail===email);
    }
    async save(user){
        return this.usuarios.push(user);
    }
}*/