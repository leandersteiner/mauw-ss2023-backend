FROM node:19-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8081

CMD ["npm", "run", "start:prod"]
