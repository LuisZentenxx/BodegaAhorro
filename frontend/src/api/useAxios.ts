import axios, {AxiosRequestHeaders} from "axios";
import { useAuthStore } from "../store/auth";
import jwt_decode from "jwt-decode"
import {Token} from '../Interfaces'

// Realiza el cierre de sesión y redirige a la página '/login'.
function logOutFun() {
  useAuthStore.getState().logout()
  window.location.href = '/login'
}

// Almacena la URL del backend, permitiendo configurar dinámicamente la conexión entre el frontend y el backend.
const baseURL = import.meta.env.VITE_BACKEND_URL;

export const axi = axios.create({
  baseURL
})

export const authAxios = axios.create({
  baseURL,
  withCredentials: true,
});

// Interceptor de Axios para agregar el token de acceso a los encabezados de autorización en las solicitudes realizadas por el cliente HTTP.
authAxios.interceptors.request.use(async (config) => {
  const token : string = useAuthStore.getState().access;
  config.headers = {
    Authorization: `Bearer ${token}`,
  } as AxiosRequestHeaders;

  // Descodifica el token de acceso
  const tokenDecoded : Token = jwt_decode(token)

  // Compara la diferencia de tiempo entre la fecha de expiración del token y la fecha actual.
  const expiration = new Date(tokenDecoded.exp * 1000);
  const now = new Date();
 
  const fiveMinutes = 1000 * 60 * 5;

   // Si la diferencia es menor a cinco minutos, intenta actualizar el token haciendo una solicitud POST con el token de actualización.
  if(expiration.getTime() - now.getTime() < fiveMinutes)
  try {
    const res = await axi.post('/users/refresh/', { refresh: useAuthStore.getState().refresh })
    useAuthStore.getState().setToken(res.data.access, res.data.refresh)

    // Si la solicitud de actualización falla y el código de respuesta es 401 (no autorizado), se ejecuta la función logOutFun(), que realiza el cierre de sesión.
  } catch (err: any ) {
    if (err.response.status == 401) {
      logOutFun()
    }
  }
  return config

});