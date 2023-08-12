FROM node:18.4-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY ./dist ./dist

COPY ./env ./env

CMD ["npm", "run", "prod"]