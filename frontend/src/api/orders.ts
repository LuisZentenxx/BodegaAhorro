import { authAxios } from "./useAxios";
import { Order } from "../Interfaces";


export const create_order = async (data : Order ) => {
    await authAxios.post('/orders/create/', data)
}