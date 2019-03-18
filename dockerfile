FROM node:10.7.0

WORKDIR /usr/app

COPY . /usr/app
RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start"]