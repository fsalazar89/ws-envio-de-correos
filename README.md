## Servicio Envio de correos
Web Service que se conecta con una cuenta de Google y permite realizar el envió de correos electrónicos.
- El servicio de realy permite enviar adjuntos y el cuerpo del correo recibe formato de codigo HTML

## Configuración

1. Clonar el repositorio:
- ```git clone https://github.com/fsalazar89/ws-envio-de-correos/tree/produccion```

2. Instalar las dependencias:
- ```cd Servicio_EnvioCorreos```
- ```npm i```

3. Configurar las variables de entorno:

- Crea un archivo con el nombre `.env` en la raíz del proyecto, en este archivo se deben almacenar las variables de entorno necesarias para el proyecto.
- PORT
- APIKEY
- APITOKEN
- GOOGLE_HOST
- GOOGLE_PORT
- GOOGLE_CORREO
- GOOGLE_CLAVE
- GOOGLE_ALIAS

## Despliegue

1. Iniciar la aplicación:
- Ìniciar la el servicio: `npm run local`
- Iniciar directamente con pm2 `pm2 start node src/app.js --name Servicio_EnvioCorreos`
- Comandos para garantizar que la aplicacion se ejecute de manera continua y se reinicie automáticamente en caso de fallos.
 - -> `pm2 startup`
 - -> `pm2 save`


## Mantenimiento

- Para detener la aplicación en el entorno de producción: `pm2 stop Servicio_EnvioCorreos`

- Para reiniciar la aplicación en el entorno de producción: `pm2 restart Servicio_EnvioCorreos --update-env`

- Para ver los registros de la aplicación en el entorno de producción: `pm2 logs Servicio_EnvioCorreos`

## Consumo de se los servicios "login_aplicaciones"
* Metodo: POST
* Url: http://localhost:xxxx/api/V1/enviar-correo/google

* Body:
```
{
    "destinatarios":"xxxxxxxxxx@xxxx.com",
    "asunto":"xxxxxxxx",
    "texto":"adsfasdxxxxxxxfasdf",
    "html":"<h1>Hola Mundo</h1>"
}
```