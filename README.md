
Para comenzar, debemos dirigirnos a nuestro archivo .env y modificaremos estas dos variables:




APP_ENV=production
APP_DEBUG=false



En el caso que estemos utilizando webpack mix, debemos ejecutar en la consola, en la raiz de nuestro proyecto en siguiente comando:

npm run production





una vez hecho esto ejecutaremos también:

composer dumpautoload




Tras esto, estamos listos para comenzar con la subida de nuestra aplicación.
