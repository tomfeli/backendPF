export default class DaoUsuariosMock{
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
}