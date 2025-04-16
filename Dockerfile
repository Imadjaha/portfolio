FROM node:alpine AS build


WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app (Static Export)
RUN npm run build

# Install a production server for serving the app
FROM node:alpine AS production

WORKDIR /app

COPY --from=build /app ./

RUN npm install --production

EXPOSE 3000

CMD [ "npm","run","dev" ]