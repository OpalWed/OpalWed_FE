FROM node:18 AS build

WORKDIR /opal

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS runner

COPY --from=build /bachhoasi/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=build /bachhoasi/dist .

CMD ["nginx", "-g", "daemon off;"]