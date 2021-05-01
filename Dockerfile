FROM node:15.10.0-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]