import DaoUsuariosMock from "./DaoUsuariosMock.js";

const dao =new DaoUsuariosMock();

export function getDaoUsuarios(){
    return dao;
}