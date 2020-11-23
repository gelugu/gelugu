FROM node:alpine

VOLUME ./build:/app/build

# RUN npm i -g react-scripts
COPY . /app

WORKDIR /app
RUN npm i

CMD ["react-scripts", "build"]
