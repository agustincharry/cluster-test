# LoadBalancer Services
###### Pruebas de concepto de servicios tipo LoadBalancer.
###### **En este ejemplo se creará un balanceador de carga que usará a MS1 y a MS2. Los dos serán accedidos desde el mismo EndPoint**
###### Despues de aplicar los archivos se tendrá acceso a:
#### Exterior
###### Desde el exterior de los pods, se tendrá acceso al balanceador de carga que dirigirá la petición a MS1 o a MS2 eveluando el que esté disponible.
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