# nodejs-express-react-boiler-plate

nodejs-express-react-boiler-plate is a basic setup for a react front end server behind nginx reaching a node.js backend server deliverable in docker containers.

# Installation & Usage

Complete installation and usage requires docker and nginx to be installed on local machine.

## Open terminal and clone repository

`git clone https://github.com/anthonyss09/nodejs-express-react-boiler-plate.git`

## cd into project and istall dependencies

From root directory

`cd client`

`npm install`

`docker build -t name-your-front-end .`

From root directory

`cd server`

`npm install`

`docker build -t name-your-back-end .`

## Configure nginx

Find local nginx.conf at /usr/local/etc/nginx

Add the following location directives to server block

```
location / {
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header Host $host;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_pass http://localhost:3000;
          proxy_pass_request_headers      on;
        }
        location /node-server/ {
            proxy_hide_header "Access-Control-Allow-Origin";
            add_header 'Access-Control-Allow-Origin' "http://localhost:3000" always;
            add_header 'Access-Control-Allow-Credentials' 'true' always;
            add_header 'Access-Control-Allow-Headers' "Origin, X-Requested-With, Content-Type, Accept" always;
            proxy_set_header Host $host;
            proxy_pass http://localhost:8080;
            proxy_buffering on;
            proxy_redirect off;
        }

```

Open new terminal & start nginx

`nginx`

## Run scripts or test contaiers with docker compose

### Run scripst

From root directory

`cd server`

`npm run dev`

### Docker compose

From root directory

`docker compose up`

Take containers down

`docker compose down`

Stop nginx in resptective terminal

`nginx -s stop`

Project can now be viewed in browser at http://localhost:3000
