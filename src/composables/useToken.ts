import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
//import type { User } from '@/interfaces/user';

export const useToken = () => {
  const setToken = (token: string) => {
    cookies.set("AUTH_TOKEN", token, "7d");
  };

  const getToken = () => {
    if (cookies.get("AUTH_TOKEN")) {
      return cookies.get("AUTH_TOKEN");
    }
    return null;
  };

  const setAuthData = (user: any) => {
    cookies.set("AUTH_DATA", user, "7d");
  };

  const getAuthData = () => {
    if (cookies.get("AUTH_DATA")) {
      return cookies.get("AUTH_DATA");
    } else {
      return {};
    }
  };

  const authFetchOptions = () => {
    const token = getToken();
    if (token) {
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      });

      // Agrega los headers a la configuración de la solicitud (si estás usando fetch en otros lugares)
      const requestOptions = {
        headers: headers,
      };

      return requestOptions;
      // Agrega este requestOptions a las solicitudes fetch
      // fetch('/tu/ruta', requestOptions())
    }
  };

  const removeToken = () => {
    cookies.remove("AUTH_TOKEN");
    cookies.remove("AUTH_DATA");
  };

  return {
    setToken,
    getToken,
    setAuthData,
    getAuthData,
    authFetchOptions,
    removeToken,
  };
};
