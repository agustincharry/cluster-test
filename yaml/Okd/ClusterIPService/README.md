# ClusterIP Services
###### Pruebas de concepto de servicios tipo ClusterIP y NodePort.
###### **En este ejemplo, SOLO MS1 es accesibles desde el exterior, y MS2 desde el interior del cluster.**
###### Despues de aplicar los archivos se tendrá acceso a:
#### DNS Interno
###### Los pods tendrán acceso a las URLs:
```
http://ms1
http://ms2
```
#### Exterior
###### Desde el exterior de los pods, se tendrán acceso a los mismos por la URL del cluster y el puerto asignado por el servicio
###### **En este caso SOLO a MS1**
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