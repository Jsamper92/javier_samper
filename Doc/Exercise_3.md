# README EXERCISE_3

#### Docker-compose.yml
Para poder conectar a la base de datos creamos una nueva imagen de mongodb.

#### Index.js
Conectamos la base de datos mediante un seTimeOut porque teniamos el problema de que se levantaba el docker antes que la base de datos.

#### User.js
Creamos un modelo que utilizaremos para guardar registros en la base de datos.

#### Messages.js 
Hacemos la peticion para enviar el mensaje,utilizamos un timeout en el que controlamos que el mensaje no tarde más de un tiempo concreto, además de los métodos correspondientes para crear registros en la base de datos y obtener el listado de todos las inserciones.

#### messageClient.js
Recibimos el mensaje, en caso de cumplir la condición del timeout, entraria al then y ejecutaria el método para hacer inserciones en la base de datos además de mostrar al cliente el mensaje de "Registro guardado en base de datos y mensaje enviado". En caso de no cumplir esta condición, entraría al catch comprobaria con una condición si la respuesta fue un error 408(tiempo de espera superado),ejecutaria el metodo para hacer la inserción en la base de datos pero mostraria el mensaje de "Mensaje enviado pero no confirmado en el registro", de lo contrario, completariamos la misma acción con la diferencia de mostrar el mensaje "Registro guardado en base de datos,pero el mensaje no fue enviado".

#### ¿Qué pasa si se envía si la base de datos da un error? 
Se envía el mensaje pero no existe confirmación de envio en la base de datos. Podriamos solucionarlo con un timeout con el que cuando diese error lo seguiria intentando hasta obtener un intento exitoso, aplicando de la esta manera lo que se conoce como idempotencia.

#### ¿Es igual de importante el error en el envío de un mensaje o en la consulta del registro?
Depende de la situación, personalmente si soy un usuario que envia un mensaje, llega un momento que quiero consultar todos mis mensajes y da error tras repetidas ocasiones, posiblemente llegaría un momento que me frustraría y dejaria de usar la aplicación, dado que no cubre mis exigencias.