# Configuración de Docker
1.  Crear un archivo docker-compose.yml con la siguiente configuración:

```yml
version: '3.9'

services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: usuario
      POSTGRES_PASSWORD: password
      POSTGRES_DB: my_database
    ports:
      - "5432:5432"
```
Este archivo definirá un servicio para la base de datos PostgreSQL con el usuario, contraseña y nombre de la base de datos que se utilizará en la aplicación. El servicio se ejecutará en el puerto 5432.

2. Para iniciar Docker con la base de datos PostgreSQL, ejecutar `docker-compose up` en la raíz del proyecto. Verificar si el contenedor está corriendo utilizando el comando `docker ps`.

# Configuración del Proyecto
1. Iniciar un proyecto npm con el comando `npm init`en la raíz del projecto.

2. Instalar las dependencias del proyecto utilizando el comando `npm install`:

```bash 
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/node
npm install express
npm install nodemon
npm install --save sequelize
npm install --save-dev sequelize-cli
npm install --save pg pg-hstore
npm install --save-dev cross-env
npm install dotenv
npm install cors
npm install joi
```
3. Crear el archivo `.babelrc`en la raíz del proyecto con el siguiente contenido:

```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```
4. Crear una carpeta llamada `src`y para el proyecto con Express dentro de esa carpeta.

5. Agregar los siguiente comando en el archivo `package.json`:

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon --exec npm run babel-node src/routes/contactRoutes.js",
    "babel-node": "babel-node --presets=@babel/preset-env",
    "build": "babel src --out-dir dist",
    "start": "node dist/index.js"
  }
```
# Generar migración con Sequelize
1. Para generar una migración en Sequelize, utilizar el comando `sequelize migration:generate --name <nombre_de_la_migracion>`. Esto creará un archivo con el nombre especificado en la carpeta migrations que se utilizará para realizar cambios en la estructura de la base de datos.

2. Para ejecutar las migraciones, utilizar el comando `sequelize db:migrate`. Esto aplicará los cambios especificados en las migraciones a la base de datos.

# Ejecución de la aplicación
1. Para ejecutar la aplicación, utilizar el comando `npm run dev`. Esto iniciará el servidor en modo desarrollo en el puerto especificado, por defecto el puerto 3000.

2. Las rutas disponibles para esta aplicación serán:
  - GET:
    - GET http://localhost:3003/contact/ - Listado de todos los contactos
    - GET http://localhost:3003/contact/favourites - Listado de contactos favoritos
    - GET http://localhost:3003/contact/search - Busqueda de un contacto por nombre
    - GET http://localhost:3003/contact/:id - Detalle de un contacto por ID

  - POST:
    - POST http://localhost:3003/contact/ - Creación de un nuevo contacto

  - PUT:
    - PUT http://localhost:3003/contact/:id - Actualización de un contacto por ID

  - DELETE:
    - DELETE http://localhost:3003/contact/:id - Eliminación de un contacto por ID