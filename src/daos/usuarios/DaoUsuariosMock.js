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
                "mail":"pepito123@hotmail.com",
                "pass":"123456",
                "admin":false

            },
            {
                "id":2,
                "mail":"juancito456@hotmail.com",
                "pass":"789123",
                "admin":false
            },
            {
                "id":3,
                "mail":"franzoniclara23@gmail.com",
                "pass":"123456",
                "admin":true
            },
            {
                "id":4,
                "mail":"qa.gcba@gmail.com",
                "pass":"789123",
                "admin":true
            }
        ]
    }
    async getAll() {
        return this.usuarios;
    }
    async userExists(email){
        return this.usuarios.find(user=>user.email===email);
    }
    async createUser(user){
        try{
            userValid= new Usuario(user.email,user.password);
        }catch(error){
            return error
        }
        return this.usuarios.push(user);
    }
}*/