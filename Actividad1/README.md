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
- Elijan 1 factor que no aplicaron y expliquen qué cambios realizarían para que se cumpla.
- Pensando en el factor de “Concurrencia”: describa cómo diseñaría el sistema (incluyendo despliegue en AWS) para añadir el envío de las notas por mail.


