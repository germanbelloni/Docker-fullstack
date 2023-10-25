# Establece la imagen base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración del backend
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente del backend
COPY . .

# Expone el puerto 5000 para acceder a la aplicación
EXPOSE 5000

# Inicia la aplicación
CMD ["node", "server.js"]