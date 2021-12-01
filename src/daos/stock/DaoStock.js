import Mongo from "../MongoDb/MongoClient.js";

export default class DaoStock{
    
    constructor(config){
        this.mongoClient=new Mongo(config);
    }

    async getAll(){
        await this.mongoClient.connect();
        let result=[];
        try{
            let client=this.mongoClient.getClient();
            let db=client.db("avon");
            let collection=db.collection("Items");
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
    async findbyId(id,collection){
        let searchCursor = await collection.find({"id":id});
        if(await searchCursor.hasNext()){
            return await searchCursor.next();
        }
    }
    async getItemsById(ids){
        
        await this.mongoClient.connect();
        let collection=await this.mongoClient.getCollection("avon","Items");
        let resultado = await Promise.all(ids.map(async (id)=>{
            return await this.findbyId(id,collection);   
        })
        )
        await this.mongoClient.close();
        if(resultado.length>0){
            return resultado;
        }
        else{
            throw new Error("INVALID_ARGS:No se encontraron items con el id solicitado")
        }
    }
    async descontarProductos(pedido){
        await this.mongoClient.connect();
        let collection=await this.mongoClient.getCollection("avon","Items");
        await pedido.forEach(async (itemPedido)=>{
            let resultado=await this.findbyId(itemPedido.id,collection)
            if(resultado.cant>=itemPedido.cant){
                let updateCursor=await collection.updateOne(
                    {"id":itemPedido.id},
                    {"$set":
                        {
                            "cant":resultado.cant-itemPedido.cant
                        }
                    }
                );
            }else{
                throw new Error("INVALID_ARGS:No hay cantidad en stock");
            }
        })
    }
    async update(item){
        await this.mongoClient.connect();
        let collection=await this.mongoClient.getCollection("avon","Items");
        let updateCursor=await collection.updateOne(
            {"id":item.id},
            {"$set":
                {
                    "name":item.name,
                    "cant":item.cant,
                    "price":item.price
                }
            }
        );
        await this.mongoClient.close();
        if( updateCursor.modifiedCount>0){
            return item;
        } else {
            throw new Error('INVALID_ARGS:no existe item con ese id')
        }

    }
}
/*export default class DaoStock{
    constructor(){
        this.stock=[
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
        ]
    }
    async getAll() {
        return this.stock;
    }
    
    async getItemsById(ids){
        let resultado=[]
        ids.forEach((id)=>{
            resultado.push(this.stock.find((item)=>item["id"]===id));
        })
        if(resultado.length>0){
            return resultado;
        }
        else{
            throw new Error("INVALID_ARGS:No se encontraron items con el id solicitado")
        }
        
    }
    async descontarProductos(pedido){
        pedido.forEach((itemPedido)=>{
            let find=false;        
            let i=0;
            while(i<this.stock.length() && !find){
                if(this.stock[i]["id"]===itemPedido["id"]){
                    if(itemPedido["cant"]<this.stock[i]["cant"]){
                        this.stock[i]["cant"]=this.stock[i]["cant"]-itemPedido["cant"];
                        find=true;
                    }
                    else{
                        throw new Error("INVALID_ARGS:No hay cantidad en stock");
                        //en teoria esta validado en el frontend
                    }
                }else{
                    i++;
                }
            } 
        })
    }
}*/