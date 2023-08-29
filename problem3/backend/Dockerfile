FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./prisma/schema.prisma ./prisma/


RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]