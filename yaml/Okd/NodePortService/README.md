# NodePort Services
###### Pruebas de concepto de servicios tipo NodePort.
###### **En este ejemplo, tanto MS1 como MS2 son accesibles desde el exterior.**
###### Despues de aplicar los archivos se tendrá acceso a:
#### DNS Interno
###### Los pods tendrán acceso a las URLs:
```
http://ms1
http://ms2
```
#### Exterior
###### Desde el exterior de los pods, se tendrán acceso a los mismos por la URL del cluster y el puerto asignado por el servicio
##### Obtener la URL si se usa Minikube
```
 minikube status
```
##### Obtener el puerto en el que corre el servicio
```
 kubectl get services
```
##### Ejemplo de URL
```
http://192.168.99.100:30856/
```