FROM node:16 AS builder
ARG API_URL
ENV REACT_APP_API_URL=${API_URL}

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx/unit:1.26.1-minimal
WORKDIR /app

COPY --from=builder /app/build /app
COPY unit-config.json /docker-entrypoint.d/config.json
