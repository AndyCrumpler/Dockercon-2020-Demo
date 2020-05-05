FROM node

COPY ./ /app

WORKDIR /app

RUN npm install

# Get wait command which will wait for mongodb to start
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD ["npm", "test"]