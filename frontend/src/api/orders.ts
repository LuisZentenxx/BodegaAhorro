import { authAxios } from "./useAxios";
import { Order } from "../Interfaces";


export const solo_order = async (id: number) =>{
    const Response = await authAxios.get(`/orders/solo/${id}/`);
    return Response.data
}
export const my_orders = async () => {
    const Response = await authAxios.get('orders/my/orders')
    return Response.data
};

export const create_order = async (data : Order ) => {
    await authAxios.post('/orders/create/', data)
}