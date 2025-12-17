# --- СТАДИЯ СБОРКИ (Build Stage) ---
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем package.json и package-lock.json для кэширования слоев
COPY package.json package-lock.json* ./

# Установка зависимостей
RUN npm ci --only=production

# Копируем остальное код
COPY . .

# Собираем приложение в режиме production
RUN npm run build

# --- СТАДИЯ ЗАПУСКА (Production Stage) ---
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Создаем непривилегированного пользователя
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только необходимые файлы
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Автоматически использовать standalone режим если он настроен
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Переключаемся на непривилегированного пользователя
USER nextjs

# Указываем порт
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Команда для запуска приложения
CMD ["node", "server.js"]