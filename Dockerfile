FROM node:18 AS build

WORKDIR /opal

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine AS runner

COPY --from=build /opal/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /opal/dist .

CMD ["nginx", "-g", "daemon off;"]