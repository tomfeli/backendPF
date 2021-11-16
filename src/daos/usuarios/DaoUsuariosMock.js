export default class DaoUsuariosMock{
    constructor(){
        this.usuarios=[
            {
                "id":1,
                "mail":"pepito123@hotmail.com",
                "pass":"123456",

            },
            {
                "id":2,
                "mail":"juancito456@hotmail.com",
                "pass":"789123",
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
}