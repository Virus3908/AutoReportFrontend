# 🧠 Автопротоколирование

Проект для автоматического протоколирования совещаний, включая загрузку видео, транскрибацию, разметку участников и генерацию отчетов.

## 📦 Стек

- Frontend: React + Vite + TypeScript
- Middleware: Go
- Backend: Python
- Веб-сервер: Nginx
- Сборка: Docker

---

## 🔗 Зависимости

⚠️ Перед запуском frontend необходимо запустить **backend** и **дополнительные сервисы**:

| Сервис | Репозиторий | Назначение |
|--------|-------------|------------|
| 🧠 middleware | [middleware](https://github.com/Virus3908/AutoReportMiddleware) | основной API backend |
| 🧊 backend | [backend](https://github.com/Virus3908/AutoReporterBack) | воркер по обработке |

Все сервисы, кроме backend, должны быть **в одной сети Docker** (`my-net`) и слушать свои порты, которые указаны в proxy nginx.

---

## 🚀 Быстрый старт

### 📁 1. Клонируй репозиторий

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

⸻

⚙️ 2. Создай .env

Файл .env используется в момент сборки фронта:
```
VITE_API_URL=/api
```

⸻

🐳 3. Собери frontend-контейнер
```bash
docker build -t my-frontend-app .
```

⸻

🐳 4. Запусти backend (Go)

⸻

🐳 5. Запусти frontend

docker network create my-net  # только один раз
```bash
docker run -d \
  --name frontend \
  --network my-net \
  -p 3000:80 \
  my-frontend-app
```
Теперь открой http://localhost:3000

⸻

🌐 Взаимодействие через Nginx

Во фронтенде используется nginx, который:<br/>
	•	отдаёт статику (/)<br/>
	•	проксирует API-запросы (/api/*) на backend middleware:8080<br/>

nginx.conf:
```
location /api/ {
  proxy_pass http://middleware:8080;
}
```

⸻

🛠 Полезные команды

🔍 Проверить сетку
```
docker network inspect my-net
```
🧼 Очистить все
```
docker rm -f frontend middleware
docker rmi my-frontend-app middleware-app
docker network rm my-net
```

⸻

🤝 Контакты

Разработка: virus3908<br/>
Обратная связь приветствуется!
