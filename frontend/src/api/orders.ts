import { authAxios } from "./useAxios";
import { Order } from "../Interfaces";

/**
 * This code exports several functions related to searching, editing, getting, and creating orders.
 * @param {string} query - A string used for searching orders.
 * @returns The functions `search_order`, `get_orders`, `solo_order`, and `my_orders` are returning the
 * `data` property of the response object. The function `edit_order` is not returning anything. The
 * function `create_order` is not returning anything.
 */

export const search_order = async (query: string) => {
    const response = await authAxios.get(`/orders/search/?query=${query}`);
    return response.data;
  };
  
export const edit_order = async (id: number) => {
    await authAxios.put(`/orders/deliver/${id}/`)
}

export const get_orders = async () =>{
    const Response = await authAxios.get(`/orders/`);
    return Response.data
}

export const solo_order = async (id: number) =>{
    const response = await authAxios.get(`/orders/solo/${id}/`);
    return response.data
}
export const my_orders = async () => {
    const Response = await authAxios.get('orders/my/orders')
    return Response.data
};

export const create_order = async (data : Order ) => {
    await authAxios.post('/orders/create/', data)
}