# Bodega Ahorro (Ecommerce)
Este proyecto es una aplicación web que utiliza Django para el backend, React con Vite para el frontend, y Tailwind CSS para estilos.

## Requisitos

- Python (preferiblemente versión 3.7 o superior)
- Node.js (preferiblemente versión LTS)
- npm (normalmente viene con Node.js)
- Git

## Pasos para configurar el proyecto

1. **Clona el repositorio**: 
   Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone https://github.com/LuisZentenxx/BodegaAhorro.git

2. **Configurar el entorno del backend (Django)**: Dirígete al directorio del proyecto:
    ```bash
    cd Bodega Ahorro
3. **Crea y activa un entorno virtual**: En el directorio principal del proyecto ejecuta los siguientes comandos.
   1. ```bash
      python -m venv env
   2. ```bash
      env\Scripts\activate
4. **Instala las dependencias de Python***
   ```bash
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
5. **Configura el entorno del frontend (React con Vite y Tailwind.css)**: Cambia al directorio del frontend.
    ```bash
    cd ../frontend
6. **Instala Node.Js en tu equipo**: Ve al siguiente link y descarga la versión LTS. https://nodejs.org/en
7. **Instala las dependencias de Node.js con npm**: Abre una terminal, luego dirigete al directorio de frontend y ejecuta el siguiente comando.
    ```bash
    npm install
8. **Iniciar la aplicación web**: Para iniciar la aplicación, es necesario tener tanto el servidor de Django como el servidor de desarrollo del frontend en ejecución. Abre dos terminales separadas, una para el backend y otra para el frontend.
   1. En la terminal del backend (tuproyecto/backend), inicia el servidor de Django.
        ```bash
        npm install
    2. En la terminal del frontend inicia el servidor de desarrollo de React con Vite:
        ```bash
        npm run dev
9. **Acceder a la aplicación**: Abre un navegador web y navega a http://localhost:5173 para visualizar la aplicación en ejecución.

## Estructura del Proyecto

- **backend/** : Contiene el código del backend desarrollado con Django.
- **frontend/** : Contiene el código del frontend desarrollado con React (Vite) y los archivos relacionados con Tailwind.css.
- **requirements.txt** : Lista de dependencias de Python para el backend.
- **package.json**: Archivo de configuración de Node.js para el frontend.
