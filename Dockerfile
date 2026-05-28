

# --- Stage 1: Build frontend (Vite React) ---
FROM node:20-alpine AS frontend-build
WORKDIR /app
COPY package*.json ./
COPY vite.config.ts ./
COPY tsconfig*.json ./
COPY index.html ./
COPY src ./src
COPY public ./public
RUN npm install --frozen-lockfile || npm install
RUN npm run build

# --- Stage 2: Build server (Express) ---
FROM node:20-alpine AS server-build
WORKDIR /app
COPY package*.json ./
RUN npm install stripe express
COPY server ./server
COPY tsconfig.server.json ./
RUN npx tsc -p tsconfig.server.json

# --- Stage 3: Production image ---
FROM node:20-alpine
WORKDIR /app
# Copy built frontend into server's dist
COPY --from=frontend-build /app/dist ./dist
COPY --from=server-build /app/dist-server ./server/dist-server
COPY --from=server-build /app/node_modules ./node_modules
COPY --from=server-build /app/package*.json ./
EXPOSE 8080
CMD ["node", "server/dist-server/index.js"]
