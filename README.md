# Proyecto Express con EJS

Este es un proyecto basado en Node.js y Express.js que utiliza EJS como motor de plantillas. Implementa sesiones, mensajes flash y configuración mediante variables de entorno.

## Características
- Servidor web con Express.js
- Motor de plantillas EJS con Express Layouts
- Manejo de sesiones con `express-session`
- Flash messages con `connect-flash`
- Métodos HTTP extendidos con `method-override`
- Configuración mediante variables de entorno
- Conexión a una base de datos mediante `connectDB`
- Archivos estáticos servidos desde la carpeta `public`

## Instalación
1. Clonar el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Crear un archivo `.env` en la raíz del proyecto con la siguiente configuración:
   ```env
   PORT=5000
   MONGO_URI=tu_cadena_de_conexion_a_mongodb
   ```
4. Ejecutar el servidor:
   ```sh
   npm start
   ```

## Uso
- El servidor se ejecutará en `http://localhost:5000` por defecto.
- Las rutas de la aplicación están definidas en `./server/routes/customer.js`.
- El diseño general está definido en `./layouts/main.ejs`.
- La vista para páginas no encontradas (`404`) está en `views/404.ejs`.

## Estructura del Proyecto
```
📂 <NOMBRE_DEL_PROYECTO>
├── 📂 public/          # Archivos estáticos (CSS, JS, imágenes)
├── 📂 server/
│   ├── 📂 config/      # Configuración de la base de datos
│   ├── 📂 routes/      # Rutas del servidor
│   ├── 📂 views/       # Vistas en EJS
│   └── 📂 layouts/     # Layouts para las vistas
├── .env               # Variables de entorno
├── package.json       # Dependencias y configuración del proyecto
├── server.js          # Archivo principal del servidor
```

## Dependencias
Este proyecto utiliza las siguientes dependencias:
```json
{
  "express": "^4.18.2",
  "express-ejs-layouts": "^2.5.0",
  "method-override": "^3.0.0",
  "connect-flash": "^0.1.1",
  "express-session": "^1.17.3",
  "dotenv": "^16.0.3",
  "mongoose": "^6.8.0"
}
```

## Contribución
Si deseas contribuir, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadida nueva funcionalidad'`).
4. Sube tu rama (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT.

## Contact

- Website [https://serrato.dev/](https://serrato.dev/)
- GitHub [@angel-serrato](https://github.com/angel-serrato)
- LinkedIn [/in/angel-serrato/](https://www.linkedin.com/in/angel-serrato/)

## Credits

https://www.reddit.com/r/node/comments/4aylzz/javascript_typeerror_reqflash_is_not_a_function/ connect-flash error

https://www.youtube.com/watch?v=V8dYGNfHjfk creating the connection and crud operations

https://www.youtube.com/watch?v=QzEjUOYNoIs connecting to mongodb atlas

https://www.youtube.com/watch?v=PAm_QcN6Ffs inspiration

https://www.youtube.com/watch?v=-NfsmF-6BHo dotenv variables

https://www.youtube.com/watch?v=rleozFydcKk nodemailer con gmail

https://nodemailer.com/about/#example nodemailer configuration example

https://www.youtube.com/watch?v=mm9oIxR8YDU&t=4s express js express sessions connect-flash

https://www.youtube.com/watch?v=lSa1EIJapLg&t=11s Display Node.js Flash Messages using Connect Flash and EJS
