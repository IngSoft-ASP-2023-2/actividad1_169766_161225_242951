# ACTIVIDAD 1

Duración: 90 minutos.
Máximo grupos de dos alumnos. (No compañeros de obligatorio) 

Descripción:
En función de este template usted deberá crear un repositorio llamado: Actividad1_nroEstudiante_nroEstudiante. 

Sobre el template desarrollado en nodeJS usted deberá lograr los siguientes puntos:

1. Extensión de funcionalidad

Se debe agregar las siguientes funcionalidades:
- Alta de una tarea
- Alta de una nota
- Listado de notas para una tarea

_La persistencia de esta información debe desarrollarse sobre el servicio de AWS.
Pueden utilizar otras tecnologías diferentes a NodeJS y DynamoDB para el desarrollo de esta actividad._ 
_(Sugerimos nodejs+dynamo porque las dimos en clase)_


2. Portabilidad

La aplicación debe tener especificado correctamente Docker + Docker Compose.

3. Despliegue

La aplicación debe ser desplegada en AWS con su herramienta de preferencia (EB, ECS, EC2, etc). Debe permitir acceder mediante cliente HTTP (ej: CURL, Postman) CURL a la nueva funcionalidad de gestión de tareas.
Al final de la clase deberá mostrar al docente la aplicación desplegada y funcionando.


4. Cuestionario

Responda las siguientes preguntas relacionadas con 12 factor app en el README.md del repositorio:
- Elijan 2 factores que creen haber aplicado correctamente en el desarrollo de la aplicación y expliquen por qué

Control de Versiones: Utilizamos Git como sistema de control de versiones para gestionar el código fuente de nuestra aplicación. Aunque no seguimos estrictamente el flujo de trabajo definido por Git Flow, trabajamos directamente en la rama principal (main).

Backing Services: La aplicación consume servicios a través de la red, conectándose mediante una URL y credenciales. Esto nos brinda la versatilidad de cambiar la base de datos o la tecnología utilizada en cualquier momento, ya que estas credenciales están definidas como variables de entorno, sin necesidad de reconstruir la aplicación. Cumplimos con la premisa de no distinguir entre servicios locales o de terceros; en nuestro caso, la base de datos MySQL alojada en Amazon, que podría ser intercambiada por una base de datos local. Esto permite conectar y desconectar los diferentes recursos a voluntad.


- Elijan 1 factor que no aplicaron y expliquen qué cambios realizarían para que se cumpla.


Configuración de Ambientes: Deberíamos haber considerado la configuración de una base de datos de prueba, es decir, tener tres tipos de entornos: desarrollo, pruebas y producción. Este sería un punto de mejora si contáramos con más tiempo para la actividad.
 
- Pensando en el factor de “Concurrencia”: describa cómo diseñaría el sistema (incluyendo despliegue en AWS) para añadir el envío de las notas por mail.

Para este requerimiento, crearia una queue usando SQS de tal forma que cuando sea "pida" enviar las notas por email, se agregue la informacion necesaria para hacerlo en la cola, despues un worker leeria de esta cola y haria el envio del email.

