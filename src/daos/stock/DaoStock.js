
export default class DaoStock{
    constructor(){
        this.stock=[
            {
                "id":1,
                "name":"crema1",
                "price":1000,

            },
            {
                "id":2,
                "name":"crema2",
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
                        throw new Error("No hay cantidad en stock");
                        //en teoria esta validado en el frontend
                    }
                }else{
                    i++;
                }
            } 
        })
    }
}