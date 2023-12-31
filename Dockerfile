FROM node:19-alpine3.17 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
