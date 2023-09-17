# Web with Tailwind

Este será un archivo en el cual voy a crear una web con tailwind para aprender y practicar con él.

Aquí tendré todas las anitaciones e intalaciones que sean requeridas.

Este curso que estoy siguiendo es de [UDemy](https://www.udemy.com), más concretamente el de **Tailwind CSS**

## Instalaciones y dependencias

- Inicio el proyecto con **npm** y **vite**

- Tailwind con postCSS y la dependencia **npm install -D tailwindcss postcss autoprefixer** y **npx tailwindcss init -p**

  Cuando instalas los paquetes necesitas que tailwind cree la carpeta styles con todas las dependencias y para ello en el package.json tienes que poner en el **script**:

  ```json
    "build": "tailwind build ./styles/bases.css -o ./css/styles.css"
  ```

  Esto hará que se cree el paquete al ejecutar el comando **npm run build**

- Para tener el autocomplete y demás tienes que crear el archivo **tailwind.config.css** en la raíz del proyecto e incluir:

  ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./**/*.{html,js}"], // no es ["./src/**/*.{html,js}"] con el src porque el html que estoy ejecutando está fuera 😑 por eos no iba
        theme: {
        extend: {},
        },
        plugins: [],
    }
  ```
  
  Además de crear el **postcss.config.js** en el cual tendrás que incluir aquello que vas a usar:

  ```js
    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    }
  ```

  Aunque todo esto está en la [Doc](https://tailwindcss.com/docs/installation/using-postcss) de Tailwind

-

## Comentarios

- Para añadir nuevas reglas, puedes ir al src/input.css y añadir **@layer**. Estos son funionalidades de tailwind que te permiten extender las clases y nombrar un conjunto de ellas para maquetar componentes y hacerlo reutilizable
