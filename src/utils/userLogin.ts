import type { DataUser } from "../interfaces/user";
import { useUserStore } from "../store/user";

const userAuth = async (
  email: string,
  password: string
): Promise<DataUser | undefined> => {
  const user = useUserStore();

  try {
    const response = await fetch(
      `https://fepruebatecnicaculqi-backend-production.up.railway.app/auth/login/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: email,
          password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    return result.data !== undefined ? result.data : result;
  } catch (err) {
    const error = err as Error;
    user.setError(error.message || "Error");
  }
};

const userLogin = async (email: string, password: string) => {
  const users = await userAuth(email, password);
  console.log(users, "users");

  return users;
};

export default userLogin;
