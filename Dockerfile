FROM node:10
WORKDIR /usr/src/app

COPY package.json ./package.json
COPY index.js ./index.js
COPY dist/ ./dist

RUN npm install

EXPOSE 80
CMD ["node", "index.js"]