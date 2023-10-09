# Use the official nginx image as the base image
FROM nginx:alpine

# Copy your project files to the appropriate location in the container
COPY . /usr/share/nginx/html
