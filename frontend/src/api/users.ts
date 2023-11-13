import { User } from "../Interfaces";
import { authAxios, axi } from "./useAxios";

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

export const loginRequest = async (email: string, password: string) => {
 const response =  await axi.post("/users/login/", {email, password})
 return response;
};

export const getUsersRequest = async ({ pageParam = 1 }) => {
  const response = await authAxios.get(`/users/users/?page=${pageParam}&pages=10`);
  return response.data;
}

// Realiza una solicitud PUT para editar un producto en el servidor, utilizando los datos proporcionados, incluida una imagen si está presente.
export const edit_user = async (data: User) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }
    await authAxios.put(`/users/edit/${data.email}/`, formData);
  } catch (error) {
    console.error("Error al editar el producto:", error);
    // Lanzar una excepción o manejar el error según sea necesario
    throw new Error("Ocurrió un error al editar el producto");
  }
};
