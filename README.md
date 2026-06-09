🚀 Bug Tracker API

Backend de un sistema de gestión de incidencias inspirado en herramientas como Jira y Trello, desarrollado con NestJS, PostgreSQL y TypeORM.

El sistema permite registrar usuarios, autenticar sesiones mediante JWT, gestionar tickets de errores y controlar permisos según roles dentro de un equipo de desarrollo de software.

📋 Descripción del Proyecto

Bug Tracker API simula el flujo de trabajo utilizado en equipos ágiles de desarrollo donde:

Los usuarios QA reportan errores.
Los Administradores supervisan y asignan tareas.
Los Desarrolladores corrigen incidencias asignadas.

La aplicación implementa autenticación, autorización basada en roles y gestión centralizada de tickets.

🎯 Objetivo

Construir una aplicación backend moderna utilizando buenas prácticas de desarrollo empresarial:

Arquitectura modular.
Autenticación JWT.
Autorización basada en roles.
API REST.
Persistencia de datos con PostgreSQL.
Separación de responsabilidades mediante servicios y controladores.

🛠️ Tecnologías Utilizadas

Backend
NestJS
TypeScript
TypeORM
PostgreSQL
JWT Authentication
bcrypt
Seguridad
Password Hashing con bcrypt
JSON Web Tokens (JWT)
Guards para autorización
Roles de usuario

🔐 Roles del Sistema

👨‍💼 Administrador

Puede:
Gestionar usuarios.
Visualizar todos los tickets.
Crear tickets.
Asignar tickets.
Supervisar el flujo de trabajo.

🧪 QA

Puede:
Reportar errores.
Crear tickets.
Asignar incidencias.
Validar correcciones.

👨‍💻 Desarrollador

Puede:
Consultar tickets asignados.
Actualizar estados de corrección.
Gestionar incidencias asignadas.

📊 Modelo de Datos
Usuario
{
  "id": 1,
  "nombre": "Juan Jose",
  "email": "juan@test.com",
  "password": "hashedPassword",
  "rol": "Developer"
}
Ticket
{
  "id": 1,
  "titulo": "Error en Login",
  "descripcion": "No valida credenciales",
  "prioridad": "Alta",
  "estado": "Abierto",
  "usuario": "juan@test.com"
}

🔑 Endpoints Principales

Usuarios
Registrar Usuario

POST
/users/register
Iniciar Sesión

POST
/users/login
Consultar Usuarios

GET
/users
Tickets
Crear Ticket

POST
/tickets
Consultar Tickets

GET
/tickets
Actualizar Estado

PATCH

/tickets/:id
