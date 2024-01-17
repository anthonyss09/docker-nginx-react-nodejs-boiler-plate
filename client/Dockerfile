# Stage one container build
# Build from official docker image
FROM node:current-alpine as build
# Set working directory
WORKDIR /app
# Copy package.json into working directory
COPY package*.json /app/
# Install dependancies
RUN npm install
# Copy entire application into container
COPY . .
# Build react app folder for production
RUN npm run build

# Stage two container build
# Build production server from official nginx docker image
FROM nginx:alpine

# Copy react app build from stage one into nginx's web server directory
COPY --from=build /app/build/ /usr/share/nginx/html

# Copy custom nginx.conf file into nginx's default configuration file
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for nginx server
EXPOSE 80

# Start nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]