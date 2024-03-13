# Use official Node.js image as base
FROM node:alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory inside the container
WORKDIR /src

# Copy package.json and pnpm-lock.yaml to the container
COPY ["package.json", "pnpm-lock.yaml", "./"]

# Install dependencies using pnpm
RUN pnpm i

# Copy the rest of the application code to the container
COPY . .

# Expose the port that Next.js is running on
EXPOSE 5173

# Start the Next.js application
CMD ["pnpm", "dev"]
