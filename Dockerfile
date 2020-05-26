FROM node:13.12.0-alpine

# create working directory
RUN mkdir -p /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install --silent

COPY . .

RUN npm install react-scripts@3.4.0 -g --silent

EXPOSE 3000

# start app

CMD [ "npm", "start" ]