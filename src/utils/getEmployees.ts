import { useToken } from "../composables/useToken";
import { DataEmployees } from "../interfaces/employees";

const getListEmployees = async (
  page: number,
  limit: number
): Promise<DataEmployees | undefined> => {
  const { authFetchOptions } = useToken();
  try {
    const response = await fetch(
      `https://fepruebatecnicaculqi-backend-production.up.railway.app/empleados?limit=${limit}&page=${page}`,
      authFetchOptions()
    );

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData.message === "Token inválido") {
        // Manejar el caso de "Token inválido"
      } else {
        // Manejar otros errores
        throw new Error(errorData.message || "Error en la solicitud");
      }
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error("Error al realizar la solicitud:", err);
    // Manejar errores generales
  }
};

const getEmployees = async (page: number, limit: number) => {
  const employees = await getListEmployees(page, limit);
  return employees;
};

export default getEmployees;
