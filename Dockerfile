FROM node:lts-buster
RUN git clone https://github.com/THEMASTER5093/THE-MASTER-MD/root/themaster-tech 
WORKDIR /root/THE MASTER5093
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
