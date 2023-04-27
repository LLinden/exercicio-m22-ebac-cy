FROM cypress/included:latest

WORKDIR /home/cypress/

COPY . /home/cypress/

VOLUME [ "/home/cypress/mochawesome" ]

RUN npm install

CMD [ "npm", "run", "test" ]