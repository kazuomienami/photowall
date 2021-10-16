# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /photowall

# add `/app/node_modules/.bin` to $PATH
ENV PATH /photowall/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]