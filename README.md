# K8s Test
###### Pruebas de concepto de Docker y Kubernetes.
###### Contiene dos micro servicios MS1 y MS2 que se comunican entre sí. En la carpeta de cada uno se encuentra el "README.md" para mayor información.
## Contenido

## Tecnologías usadas
* NodeJS
* ExpressJS
* Docker
* Kubernetes

## Conceptos importantes usados
* Imagen Docker
* Archivos YML o YAML
* Servicios de Kubernetes
	* ClusterIP
	* NodePort
	* LoadBalancer

## Tabla de Contenido
* [Docker](#docker)
	* [Listar imágenes](#dockerImages)
	* [Listar contenedores](#dockerPs)
	* [Construir imagen](#dockerBuild)
	* [Correr imagen](#dockerRun)
	* [Parar contenedor](#dockerStop)
	* [Subir imagen](#dockerPush)
* [Kubernetes](#kubernetes)
	* [Listar pods](#k8sgetPods)
	* [Listar Servicios](#k8sgetServices)
	* [Listar deployments](#k8sgetDeploy)
	* [Ejecutar Deplyment y servicio](#k8sapply)


## Comandos Usados

<a name="docker"/>

### Docker

<a name="dockerImages"/>

#### Listar imágenes
```
docker images
```

<a name="dockerPs"/>

#### Listar contenedores
```
docker ps
```

<a name="dockerBuild"/>

#### Construir imagen
###### Este comando se debe ejecutar en la carpeta del micro servicio que se desee contruir.
* ###### Donde dice "agustincharry" reemplazar por el nombre de usuario en dockerhub.
* ###### Donde dice "ms1" reemplazar por el nombre del micro servicio a construir.
* ###### Donde dice "1.1" reemplazar por la versión que desea poner al micro servicio.

```
docker build --tag=agustincharry/ms1:1.1 .
```
<a name="dockerRun"/>

#### Correr imagen en contenedor - Probar funcionamiento
###### La aplicación corre en el puerto 4000 en el contenedor, pero se mapea al 3000 para ser accedido desde el exterior.
```
docker run -p 3000:4000 agustincharry/ms1:1.1
```
###### Ingresar a la URL
```
http://192.168.99.100:3000/
```
<a name="dockerStop"/>

#### Parar contenedor
###### Reemplazar "8c8016588ae1" por el ID del contenedor en ejecución.
```
docker container stop 8c8016588ae1
```
<a name="dockerPush"/>

#### Subir imagen a Dockerhub
```
docker push agustincharry/ms1:1.1
```



<a name="kubernetes"/>

### Kubernetes

<a name="k8sgetPods"/>

#### Listar pods
```
kubectl get pods
```

<a name="k8sgetServices"/>

#### Listar servicios
```
kubectl get services
```

<a name="k8sgetDeploy"/>

#### Listar deployments
```
kubectl get deployments
```

<a name="k8sapply"/>

#### Ejecutar Deplyment y servicio
```
kubectl apply -f ms1Deployment.yaml
kubectl.exe apply -f ms1ServiceNodePort.yaml
```