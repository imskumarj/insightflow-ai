FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY src src
COPY .env .env

EXPOSE 3000

CMD ["node", "src/server.js"]
