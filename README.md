## Servicio Envio de correos
Web Service que se conecta con una cuenta de Google y permite realizar el envió de correos electrónicos.
- El servicio de realy permite enviar adjuntos y el cuerpo del correo recibe formato de codigo HTML

## Configuración

1. Clonar el repositorio:
- git clone xxxxxxxxxxxxxxxxxxxxxxxxxx

2. Instalar las dependencias:
- cd Servicio_EnvioCorreos
- npm i

3. Configurar las variables de entorno:

- Crea un archivo con el nombre `.env` en la raíz del proyecto, en este archivo se deben almacenar las variables de entorno necesarias para el proyecto.
- NODE_ENV
- PORT
- LOGFILE
- APIKEY
- APITOKEN
- USRPROSPECTO
- PWDPROSPECTO
- DBPROSPECTO
- SRVPROSPECTO

## Despliegue

1. Iniciar la aplicación:
- En local: `npm run dev`
- En produccion o pruebas: `npm run start` (Esto iniciará la aplicación utilizando PM2)
- Iniciar directamente con pm2 `pm2 start node src/app.js --name 8021_Servicio_EnvioCorreos`
- Comandos para garantizar que la aplicacion se ejecute de manera continua y se reinicie automáticamente en caso de fallos.
 - -> `pm2 startup`
 - -> `pm2 save`

2. Verificar que la aplicación funcione correctamente
- En local: `http://localhost:8021/api`
- En pruebas: `http://172.16.83.112:8021/api`
- En producicon: `http://172.16.8.143:8021/api`

## Mantenimiento

- Para detener la aplicación en el entorno de producción: `pm2 stop 8021_Servicio_EnvioCorreos`

- Para reiniciar la aplicación en el entorno de producción: `pm2 restart 8021_Servicio_EnvioCorreos --update-env`

- Para ver los registros de la aplicación en el entorno de producción: `pm2 logs 8021_Servicio_EnvioCorreos`

## Servidor de aplicacion PROD
- IP: 172.16.8.143
- Ruta del proyecto: /root/Servicio_EnvioCorreos
- Puerto: 8021

## Servidor de aplicacion QA
- IP: 172.16.83.112
- Ruta del proyecto: /var/proyectos_flamingo/Servicio_EnvioCorreos
- Puerto: 8021

## Consumo de se los servicios "login_aplicaciones"
* Metodo: POST
* Url: http://localhost:8021/api/enviar_correo_relay
* Headers: 
```
{
    "service_flamingo_key":"key_envio_email",
    "service_flamingo_token":"xxxxxxxxxxxxxxxxxx"
}
```
* Body:
```
{
    "archivo":"xxxxxxxxx",
    "to":"xxxxxxx",
    "subject":"xxxxxxx",
    "html":"xxxxxxx"
}
```

## Consumo de se los servicios "listar_aplicaciones"
* Metodo: POST
* Url: http://localhost:8021/api/enviar_correo_SP_prospectosporcanal
* Headers: 
```
{
    "service_flamingo_key":"key_envio_email",
    "service_flamingo_token":"xxxxxxxxxxxxxxxxxx"
}
```
* Body:
```
{
    "destinatarios":"xxxxxxxxx",
    "asunto":"xxxxxxxxx",
    "mensaje":"xxxxxxxxx"
}
```

## Consumo de se los servicios "autorizar_aplicacion"
* Metodo: POST
* Url: http://localhost:8021/api/enviar_correo_icomm
* Headers: 
```
{
    "service_flamingo_key":"key_envio_email",
    "service_flamingo_token":"xxxxxxxxxxxxxxxxxx"
}
```
* Body:
```
{
    "remitente":"xxxxxxxxx",
    "destinatarios":"xxxxxxx",
    "asunto":"xxxxxxx",
    "cuerpo":"xxxxxxx"
}
```

## Consumo de se los servicios "autorizar_aplicacion"
* Metodo: POST
* Url: http://localhost:8021/api/enviar_correo_gmail
* Headers: 
```
{
    "service_flamingo_key":"key_envio_email",
    "service_flamingo_token":"xxxxxxxxxxxxxxxxxx"
}
```
* Body:
```
{
    "destinatarios":"xxxxxxxxx",
    "asunto":"xxxxxxxxx",
    "mensaje":"xxxxxxxxx"
}
```