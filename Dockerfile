# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the project (both frontend and backend)
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# # Define the command to run the app
# CMD ["npm", "start"]
