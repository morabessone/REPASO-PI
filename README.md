# REPASO-PI
## Objetivos del Proyecto
Construir una App utlizando React, Redux, Node y Sequelize.

## Comenzando
1. Forkear el repositorio para tener una copia del mismo en sus cuentas
2. Clonar el repositorio en sus computadoras para comenzar a trabajar

***IMPORTANTE:*** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

Node: 12.18.3 o mayor NPM: 6.14.16 o mayor Para verificar que versión tienen instalada:
```
node -v

npm -v
```

## BoilerPlate
El boilerplate cuenta con dos carpetas: ```api``` y ```client```. En estas carpetas estará el código del back-end y el front-end respectivamente.

En api crear un archivo llamado: .env que tenga la siguiente forma:
```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
Reemplazar ```usuariodepostgres``` y ```passwordDePostgres``` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos con el nombre **repasopi**.

El contenido de client fue creado usando: Create React App.

## Enunciado
# Rick and Morty App
En este ejercicio vamos a crear una APP que utilice la API de [Rick and Morty](https://rickandmortyapi.com/). Vamos a crear nuestra app utilizando **REACT* y *REDUX** en la que podremos:
- Ver todos los personajes en la página principal.
- Crear un personaje.

## Backend
El backend tendra los siguientes modelos:

**Character:**
- id
- name
- species
- origin
- image
- created 

**Episode:**
- id
- name

La relación de Character y Episode será de muchos a muchos, ya que un personaje puede aparecer en varios episodios, y en un episodio pueden haber varios personajes.
