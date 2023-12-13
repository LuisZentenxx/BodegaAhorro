import { User } from "../Interfaces";
import { authAxios, axi } from "./useAxios";


/**
 * This code contains various functions for interacting with a user API, including getting a single
 * user, editing a user, deleting a user, searching for users, getting all users, registering a user,
 * logging in a user, and getting a paginated list of users.
 * @param {number} id - The `id` parameter is used to specify the user ID when fetching a solo user,
 * editing a user, or deleting a user. It is a number that uniquely identifies a user in the system.
 * @returns The functions `get_solo_user`, `search_users`, `get_users`, and `getUsersRequest` are
 * returning the response data from the server. The functions `edit_user`, `delete_user`,
 * `registerRequest`, and `loginRequest` are not returning anything.
 */

export const get_solo_user = async (id: number) => {
  const response = await authAxios.get(`/users/get/solo/${id}/`)
  return response.data
};

// Realiza una solicitud PUT para editar un producto en el servidor, utilizando los datos proporcionados, incluida una imagen si está presente.
export const edit_user = async (data: User) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  if (data.avatar) {
    formData.append("avatar", data.avatar);
  }
  await authAxios.put(`/users/edit/${data.email}/`, formData);

};

export const delete_user = async (id: number) => {
  await authAxios.delete(`/users/delete/${id}/`) 
};

export const search_users = async (query: string) => {
  const response = await authAxios.get(`/users/search/?query=${query}`)
  return response.data
}

export const get_users = async () => {
  const response = await authAxios.get("/users/get/")
  return response.data
}

export const registerRequest = async (email: string, name: string,  password: string) => {
  await axi.post("/users/register/", {email, name, password})
};

export const resetPasswordRequest = async (email: string, name: string,  password: string) => {
  await axi.post("/users/reset/password/", {email, name, password})
};


export const loginRequest = async (email: string, password: string) => {
 const response =  await axi.post("/users/login/", {email, password})
 return response;
};

export const getUsersRequest = async ({ pageParam = 1 }) => {
  const response = await authAxios.get(`/users/users/?page=${pageParam}&pages=10`);
  return response.data;
}
