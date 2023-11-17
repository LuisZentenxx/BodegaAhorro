import { Product } from "../Interfaces";
import { authAxios, axi } from "./useAxios";

/*
  @async: Para manejar operaciones que pueden demorar, como solicitudes de red.
  @await : Se utiliza junto a @async para esperar la respuesta de las solicitudes HTTP antes de proceder.
  @authAxios : Realiza solicitudes HTTP a rutas específicas para realizar operaciones en productos y categorías.
*/ 

export const create_review = async (description : string, rating : number, productId : number) => {
  await authAxios.post(`/products/review/${productId}/`)
};
// Devuelve las categorías de los productos
export const cate_api = async (category: string) => {
  const response = await authAxios.get(`/products/cate/${category}/`);
  return response.data;
};

// Devuelve los productos buscados en la barra de busqueda
export const search_prod = async (query: string) => {
  const response = await authAxios.get(`/products/search/?query=${query}`);
  return response.data;
};


export const get_solo = async (slug: string) => {
  const response = await authAxios.get(`/products/get/${slug}/`);
  return response.data;
};

export const get_solo_product = async (id: number) => {
  const response = await authAxios.get(`/products/get/admin/${id}/`);
  return response.data;
};

// Realiza una solicitud PUT para editar un producto en el servidor, utilizando los datos proporcionados, incluida una imagen si está presente.
export const editProduct = async (data: Product) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("count_in_stock", data.count_in_stock.toString());
    formData.append("category", data.category);
    formData.append("price", data.price.toString());
    if (data.image) {
      formData.append("image", data.image);
    }
    await authAxios.put(`/products/edit/${data.id}/`, formData);
  } catch (error) {
    console.error("Error al editar el producto:", error);
    // Lanzar una excepción o manejar el error según sea necesario
    throw new Error("Ocurrió un error al editar el producto");
  }
};

// Realiza una solicitud DELETE para eliminar un producto en el servidor.
export const deleteProduct = async (id: number) => {
  await authAxios.delete(`/products/delete/${id}/`);
};

// Realiza una solicitud POST para crear un producto en el servidor.
export const postProduct = async (data: Product) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("count_in_stock", data.count_in_stock.toString());
  formData.append("category", data.category);
  formData.append("price", data.price.toString());
  if (data.image) {
    formData.append("image", data.image);
  }
  await authAxios.post("products/post/", formData);
};

export const get_products = async ({ pageParam = 1 }) => {
  const response = await axi.get(`/products/?page=${pageParam}&pages=9`);
  return response.data;
};
