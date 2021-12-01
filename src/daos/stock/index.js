import DaoStock from "./DaoStock.js";
import {CONFIG_MONGO} from "../../config/config.js"
const daoStock=new DaoStock(CONFIG_MONGO);

export function getDaoStock(){
    return daoStock;
}