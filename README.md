# ✈️ AI Trip Planner

> An AI-powered travel planning app that generates day-wise itineraries, hotel suggestions, and budget breakdowns in seconds — powered by Google Gemini AI.

![GitHub repo size](https://img.shields.io/github/repo-size/Faizanpathan-dev/ai-trip-planner)
![GitHub last commit](https://img.shields.io/github/last-commit/Faizanpathan-dev/ai-trip-planner)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🚀 Features

- 🗓️ **Day-wise Itineraries** — Personalized travel plans for any destination
- 🏨 **Hotel Suggestions** — Curated hotel recommendations with details
- 💰 **Budget Breakdown** — Smart budget estimates for your entire trip
- 🔍 **Unsplash Integration** — Beautiful destination images fetched dynamically
- ⚡ **Instant Results** — Powered by Google Gemini AI for fast, intelligent responses

---

## 🛠️ Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React 19, Vite, React Router DOM, Axios |
| Backend   | Spring Boot 3, Java 21, Spring AI       |
| AI Model  | Google Gemini (via Spring AI)           |
| API Docs  | SpringDoc OpenAPI (Swagger UI)          |
| Utilities | Lombok, Unsplash API                    |

---

## 📁 Project Structure

```
ai-trip-planner/
├── ai-trip-planner-frontend/   # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── TripForm.jsx
│   │   │   ├── TripResult.jsx
│   │   │   ├── DayCard.jsx
│   │   │   ├── HotelCard.jsx
│   │   │   ├── BudgetBreakdown.jsx
│   │   │   └── SuggetionList.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   └── UnsplashServises.js
│   └── package.json
│
└── ai-trip-planner-backend/    # Spring Boot backend
    ├── src/
    └── pom.xml
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- Java 21
- Maven
- Google Gemini API Key
- Unsplash API Key (optional, for images)

---

### 🖥️ Frontend Setup

```bash
cd ai-trip-planner-frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

### 🔧 Backend Setup

```bash
cd ai-trip-planner-backend
```

Create an `application.properties` or `application.yml` file with your API keys:

```properties
spring.ai.google.genai.api-key=YOUR_GEMINI_API_KEY
server.port=8080
```

Then run:

```bash
./mvnw spring-boot:run
```

The backend API will be available at `http://localhost:8080`

📄 Swagger UI: `http://localhost:8080/swagger-ui/index.html`

---

## 🔑 Environment Variables

| Variable                          | Description              |
|-----------------------------------|--------------------------|
| `spring.ai.google.genai.api-key`  | Google Gemini API Key    |
| `VITE_UNSPLASH_ACCESS_KEY`        | Unsplash API Access Key  |

---

## 📸 Screenshots

> *Coming soon*

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/Faizanpathan-dev">Faizanpathan-dev</a>
</div>
