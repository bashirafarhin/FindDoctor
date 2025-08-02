# 🩺 FindDoctor – Full Stack Doctor Search Platform

A responsive full-stack web application that allows users to search for doctors by location and specialty. Built using modern technologies with a mobile-first approach and clean UI based on the provided screenshots.

> 📸 This project was built to match the UI/UX based on the provided screenshots.  
> 🔗 [Screenshot 1](https://example.com/screenshot1)  
> 🔗 [Screenshot 2](https://example.com/screenshot2)

---

## 🌐 Live Links

- **Frontend (Next.js + TypeScript on Vercel)**: [https://find-doctor-olive.vercel.app](https://find-doctor-olive.vercel.app)
- **Backend (Express + TypeScript on Render)**: [https://finddoctor-5f7k.onrender.com](https://finddoctor-5f7k.onrender.com)

---

## 🧩 Tech Stack

### 🚀 Frontend

- [Next.js 14+](https://nextjs.org/) with App Router
- TypeScript
- Tailwind CSS v4
- Redux Toolkit
- Axios
- Lucide Icons
- Fully responsive, accessible, mobile-friendly design

### 🛠️ Backend

- Node.js with Express
- TypeScript

> ⚠️ **Note**: No database is used in this project. The doctor data is **hardcoded** on the backend as per assignment instructions which emphasized frontend/backend integration only.

---

## Features

- Search for doctors by location and specialty
- Simple and clean UI with Tailwind CSS
- State management with Redux Toolkit
- Full mobile and desktop responsiveness

---

## 📁 Project Structure

### Frontend

Located in the `client/` directory.

```bash
client/
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── Providers/
│   ├── Redux/
│   └── lib/
├── public/
├── tsconfig.json
└── package.json
```

client/.env

```
NEXT_PUBLIC_BACKEND_API="http://localhost:8000/api"
```

### Backend

Located in the `server/` directory.

```bash
server/
├── src/
│   ├── data/
│   ├── routes/
│   ├── controllers/
│   ├── app.ts/
│   └── server.ts
├── tsconfig.json
└── package.json
```

server/.env

```
FRONTEND_URL="http://localhost:3000"
NODE_ENV="development"
PORT=8000
```
