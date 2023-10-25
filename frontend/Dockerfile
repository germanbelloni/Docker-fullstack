# Establece la imagen base
FROM node:14 as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración del frontend
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente del frontend
COPY ./src ./src
COPY ./public ./public

# Construye la aplicación React
RUN npm run build

# Crea una nueva imagen más ligera para producción
FROM nginx:alpine

# Copia los archivos de construcción del frontend en el directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]