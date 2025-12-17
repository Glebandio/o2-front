# --- СТАДИЯ СБОРКИ (Build Stage) ---
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем package.json и package-lock.json для кэширования слоев
COPY package.json yarn.lock* package-lock.json* ./

# Установка зависимостей
RUN yarn install --frozen-lockfile # или npm install --frozen-lockfile

# Копируем остальное код
COPY . .

# Собираем приложение в режиме production
RUN yarn build # или npm run build

# --- СТАДИЯ ЗАПУСКА (Production Stage) ---
FROM node:18-alpine AS runner

WORKDIR /app

# Копируем только собранные файлы и node_modules из стадии сборки
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Указываем порт, на котором будет работать Next.js
EXPOSE 3000

# Команда для запуска приложения в production
CMD ["npm", "start"]