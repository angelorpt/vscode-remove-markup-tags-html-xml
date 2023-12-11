FROM node:20-slim

RUN apt-get update \
    && apt-get install -y \
        git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g \
    yo \
    generator-code \
    vsce \
    typescript \
    ts-node \
    pnpm