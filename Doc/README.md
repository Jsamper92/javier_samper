# README

#### Case 1:

 ```
 {
	"destination":"",
	"body":""
}
```
 Error: Acepta campos vacios

#### Case 2:

 ```
 {
	"destination":"dssd",
	"body":""
}
```
 Error: Acepta un campo vacio mientras los demás tienen contenido




#### Case 3:

 ```
 {
	"destination":"dssdjkskskskskskskskskskkskskskskkskkskkskskkskskssskksksskkskskskk",
	"body":""
}
```
 Error: Acepta campos con un excesivo número de caracteres

#### Case 4:

 ```
{
	
	"destination": "😀",
	"body": ""
}
```
 Error: Acepta campos que no son string

#### Case 5:

 ```
{
	
	"destination": 9,
	"body": ""
}
```
 Error: Controlar cuando es un numero

## Documentación API

#### GET
##### Index
Tenemos un get que obtiene la respuesta y la devuelve

#### POST



##### Messages
Tenemos un post que obtiene el cuerpo de la petición y ejecutamos unas cuantas validaciones expuestas a continuación antes de hacer la propia petición, si estas validaciones se superán con éxito ejecutamos la función explicada en MessageClients.

Validaciones planteadas:
- los campos no pueden estar vacios o tener un solo caracter: comprobamos la longitud de caracteres que tienen ambos campos y si es 0 o 1, sacamos error.
- los campos no pueden tener más de 20 caracteres: comprobamos la longitud de caracteres que tienen ambos campos y si es mayor que 20, imprimimos error.
- los campos no pueden ser distintos de tipo string: comprobamos el tipo de objeto que estamos tratando, y al igualarlo decimos que todos los que no sean string devolvemos error.
- el destino debe ser un correo: Por medio de includes, ejecutamos una condición de manera que si el campo destination, no tiene @, lo que supondria que no es un correo, imprimimos el error.

##### MessageClients
Creamos una función que ejecutaremos en message,donde hacemos la petición y nos devolverá en caso de exito el cuerpo de la petición, y en caso de error propio del servidor "internal error".

##### CheckErrors
Creamos una función donde hacemos una petición, a la vez que como argumento pedimos el payload, y al ejecutar le pasamos como parametro este mismo payload. De manera que al ejecutarse estas peticiones, se imprime en consola el resultado de las peticiones.

