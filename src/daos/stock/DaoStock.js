
export default class DaoStock{
    constructor(){
        this.stock=[
            {
                "id":001,
                "name":"crema1",
                "price":1000,

            },
            {
                "id":002,
                "name":"crema2",
                "price":1500,
            }
        ]
    }
    async getAll() {
        return this.stock;
    }
}