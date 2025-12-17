# --- СТАДИЯ СБОРКИ (Build Stage) ---
FROM node:18-alpine AS builder

WORKDIR /app

# Устанавливаем yarn
RUN npm install -g yarn

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Установка зависимостей
RUN yarn install --frozen-lockfile

# Копируем остальное код
COPY . .

# Собираем приложение
RUN yarn build

# --- СТАДИЯ ЗАПУСКА (Production Stage) ---
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production

# Копируем собранные файлы
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000

# Команда для запуска (используем npx чтобы не зависеть от yarn/npm)
CMD ["npx", "next", "start"]