FROM node as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn install --production --frozen-lockfile

COPY --from=builder /usr/src/app/build ./build

CMD [ "node", "build/index.js" ]