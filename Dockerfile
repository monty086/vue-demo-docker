

# FROM monty086/node_nginx:1.0
# ENV NPM_CONFIG_LOGLEVEL warn
# # FROM lifeistech/node_nginx-base
# COPY . /data/
# WORKDIR /data/
# RUN npm install 
# RUN npm run build 
# # COPY ./default.conf /etc/nginx/conf.data
# # RUN cp -r ./dist /usr/share/nginx/html
# EXPOSE 80

# FROM node:8.16.2-jessie-slim
# RUN apt-get update  && apt-get install -y nginx
FROM monty086/node_nginx:v2.0
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN  npm install  && npm run build  && cp -r dist/* /usr/share/nginx/html && rm /etc/nginx/sites-enabled/default && cp default.conf /etc/nginx/sites-enabled/ && rm -rf /app
CMD ["nginx","-g","daemon off;"]