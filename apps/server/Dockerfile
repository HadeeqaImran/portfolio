FROM node:18

WORKDIR /apps

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install -g pm2

EXPOSE 5000

CMD ["pm2-runtime", "ecosystem.config.js"]
