#no funciona 
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5173
#CMD ["npm", "run", "dev"]
RUN npm run build
