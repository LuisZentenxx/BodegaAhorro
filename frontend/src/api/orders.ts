import { authAxios } from "./useAxios";
import { Order } from "../Interfaces";

export const edit_order = async (id: number) => {
    await authAxios.put(`/orders/deliver/${id}`)
}

export const get_orders = async () =>{
    const Response = await authAxios.get(`/orders/`);
    return Response.data
}

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