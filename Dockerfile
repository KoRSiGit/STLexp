# Use lightweight Node.js LTS image
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy all files and compile front/back bundles
COPY . .
RUN npm run build

# Stage 2: Runtime image
FROM node:20-alpine

WORKDIR /app

# Install production dependencies only
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled static assets and server output from builder
COPY --from=builder /app/dist ./dist

# Expose server port
EXPOSE 3000

ENV NODE_ENV=production

# Start Express server bundler
CMD ["node", "dist/server.cjs"]
