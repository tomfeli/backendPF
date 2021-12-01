import DaoUsuariosMock from "./DaoUsuariosMock.js";
import {CONFIG_MONGO} from "../../config/config.js"
const dao =new DaoUsuariosMock(CONFIG_MONGO);

export function getDaoUsuarios(){
    return dao;
}