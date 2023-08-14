FROM node:18.4-alpine

WORKDIR /app

COPY *.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "prod"]