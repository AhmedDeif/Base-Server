FROM node:latest
WORKDIR /app
COPY package.json package.json
COPY . .
EXPOSE 8080
