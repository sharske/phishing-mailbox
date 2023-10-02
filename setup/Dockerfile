FROM node:20-alpine3.17

WORKDIR /app

RUN npm install nodemailer

COPY ./sendMail.js .

ENTRYPOINT node sendMail.js