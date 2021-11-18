export default class DaoUsuariosMock{
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
}