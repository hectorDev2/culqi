
# Reto de programacion para Culqi

Culqi desea ofrecer un sistema para el manejo de personal a los comercios que tiene como cliente.

Para ello se tiene un diseño que cubre dos funcionalidades básicas:

- Autenticación
- Listado de empleados


## Stack Tecnologico

 - [Vue](https://vuejs.org/)
 - [Pinia](https://pinia.vuejs.org/)
 - [Consumo de API rest](https://www.redhat.com/es/topics/api/what-is-a-rest-api)


## API Reference

#### GET ALL EMPLOYEES usando el api proporcionado en las especificaciones del proyecto 

```http
  GET /empleados?limit=10&page=4
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `VITE_API_CULQI` | `string` | **Required**. Api otorgada por Culqi |

#### Inicio de sesion con token

```http
  POST /auth/login
```

```json
{
  "correo": "c.quispe@culqi.com",
  "password": "admin123"
}
```


teniendo como respuesta 
```json
{
    "status": "success",
    "data": {
        "token": "eyJ...0ROjxM",
        "user": {
            "id": 1,
            "nombre": "Christian Quispe",
            "correo": "c.quispe@culqi.com",
            "cargo": "System Administrator",
            "departamento": "IT Team",
            "oficina": "Culqi Office",
            "estadoCuenta": "Activada"
        }
    }
}
```

usaremos el token para hacer la navegacion dentro de nuestra APP

## Deployment

To deploy this project run

```bash
  yarn dev
  npm run dev
```


## Por evaluar

- Dominio de Vue 3 + Typescript
- Dominio de maquetación
- Imágenes, iconos y colores
- Entrega


## Instalacion y deploy

clonar este repositorio

```bash
  1.- cd culqi
  2.- yarn add or npm install
  3.- yarn dev or npm run dev
```


## Para test

clonar este repositorio

```bash
  yarn test or npm run test
``` 
## Authors

- [@hectorDev2](https://github.com/hectorDev2)

