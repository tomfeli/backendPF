import DaoUsuariosMock from "./DaoUsuariosMock";

const dao =new DaoUsuariosMock();

export default function getUsuarios(){
    return dao;
}