FROM node

COPY ./ /app

WORKDIR /app

RUN npm install

# Credit to ufoscout https://github.com/ufoscout
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm test