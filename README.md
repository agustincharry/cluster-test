# K8s Test
###### Pruebas de concepto de Docker y Kubernetes.
###### Contiene dos micro servicios MS1 y MS2 que se comunican entre sí. En la carpeta de cada uno se encuentra el "README. md" para mayor información.
#
#
## Comandos Usados
#### Listar imágenes
```
docker images
```
#### Listar contenedores
```
docker ps
```
#### Construir imagen
###### Este comando se debe ejecutar en la carpeta del micro servicio que se desee contruir.
* ###### Donde dice "agustincharry" reemplazar por el nombre de usuario en dockerhub.
* ###### Donde dice "ms1" reemplazar por el nombre del micro servicio a construir.
* ###### Donde dice "1.1" reemplazar por la versión que desea poner al micro servicio.
#
```
docker build --tag=agustincharry/ms1:1.1 .
```
#### Correr imagen en contenedor - Probar funcionamiento
###### La aplicación corre en el puerto 4000 en el contenedor, pero se mapea al 3000 para ser accedido desde el exterior.
#
```
docker run -p 3000:4000 agustincharry/ms1:1.1
```
###### Ingresar a la URL 
#
```
http://192.168.99.100:3000/
```
#
#### Parar contenedor
###### Reemplazar "8c8016588ae1" por el ID del contenedor en ejecución.
#
```
docker container stop 8c8016588ae1
```
#### Subir imagen a Dockerhub
```
docker push agustincharry/ms1:1.1
```