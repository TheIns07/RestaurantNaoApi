README - Funcionamiento del Backend y Frontend
Este README proporciona una descripción del funcionamiento del backend y frontend de la aplicación desarrollada con ReactJS, Axios y Mongoose.

Backend (npm run dev)
El backend de la aplicación se encarga de gestionar las solicitudes y respuestas del cliente. Está construido utilizando Node.js y Express.js como framework principal. También se utiliza Mongoose para interactuar con la base de datos MongoDB. Para ejecutar el backend, sigue estos pasos:

Instalación de dependencias: Abre una terminal en la carpeta raíz del proyecto y ejecuta el comando npm install. Esto instalará todas las dependencias necesarias para el backend.

Configuración de la base de datos: Asegúrate de tener MongoDB instalado y en ejecución en tu máquina. Luego, configura la conexión con la base de datos MongoDB en el archivo config.js ubicado en la carpeta config.

Iniciar el servidor: Para iniciar el servidor backend, ejecuta el comando npm run dev. El servidor se ejecutará en el puerto especificado en el archivo config.js (por defecto, se utilizará el puerto 3001). Verifica en la consola que el servidor se ha iniciado correctamente sin errores.

Endpoints disponibles: El backend proporcionará una serie de endpoints para interactuar con los datos de la base de datos. Puedes encontrar la lista de estos endpoints y su funcionalidad en el código fuente en la carpeta routes.

Frontend (npm start)
El frontend de la aplicación está desarrollado en ReactJS, una biblioteca de JavaScript ampliamente utilizada para la construcción de interfaces de usuario. Para ejecutar el frontend, sigue los siguientes pasos:

Instalación de dependencias: Abre una terminal en la carpeta raíz del proyecto y ejecuta el comando npm install. Esto instalará todas las dependencias necesarias para el frontend.

Configuración del backend: Asegúrate de que el backend esté en ejecución en el puerto especificado en el archivo config.js.

Iniciar la aplicación: Para iniciar la aplicación frontend, ejecuta el comando npm start. Esto iniciará la aplicación en tu navegador web predeterminado, accediendo a la dirección http://localhost:3000 (o el puerto que hayas especificado en el archivo .env).

Interacción con el backend: La aplicación frontend se comunicará con el backend a través de peticiones HTTP utilizando la biblioteca Axios. Asegúrate de que ambos servidores (backend y frontend) estén en funcionamiento para garantizar el correcto funcionamiento de la aplicación.