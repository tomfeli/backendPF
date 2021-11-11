export default class DaoUsuariosMock{
    constructor(){
        this.usuarios=[
            {
                "id":001,
                "mail":"pepito123@hotmail.com",
                "pass":"123456",

            },
            {
                "id":002,
                "mail":"juancito456@hotmail.com",
                "pass":"789123",
            }
        ]
    }
    async getAll() {
        return this.usuarios;
    }
    async userExists(mail){
        return this.usuarios.find(user=>user.mail==mail);
    }
}