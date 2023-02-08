# API de bromas

Para solidificar lo que hemos aprendido sobre comandos de mongoose y express, creemos un nuevo proyecto express desde cero llamado "Chistes".

![imagen de apoyo](https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/JokeAPI_%282%29.png)

## Indicaciones a seguir

-   Cree una carpeta de proyecto llamada "Chistes"
-   dentro de "Chistes", cree una estructura de carpetas modularizada (servidor ==> controladores, rutas, modelos, configuración, servidor.js)
-   inicializar un archivo json de paquete usando npm
-   instalar express y mangoose
-   crea un archivo mongoose.config.js y configura su función mongoose.connect
-   crea un jokes.model.js, jokes.controller.js y jokes.routes.js en las carpetas correspondientes
-   en el archivo jokes.model crear y JokeSchema y exportar el mongoose.model ("broma", JokeSchema)
-   en el jokes.controller importa tu modelo desde el archivo de modelos
-   Exportar una función para obtener todos los chistes
-   Exporta una función para obtener un chiste
-   Exportar una función para crear un chiste
-   Exportar una función para actualizar una broma
-   Exportar una función para eliminar un chiste
-   en el archivo jokes.routes: importe \* desde su archivo de controlador y agregue una ruta rápida para cada ruta enumerada en la estructura alámbrica
-   En tu archivo server.js: configura express, importa tus rutas de broma y ejecuta tu servidor
-   Usa Postman para crear nuevos chistes y usa el navegador para verlos.
-   Usa Postman para realizar las operaciones POST DELETE y PUT y usa el navegador para obtenerlas
