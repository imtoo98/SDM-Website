# SDM — System Dies and Mould Website

Professional business website for **System Dies and Mould (SDM)**, a manufacturing company based in Karachi, Pakistan. Built with Next.js (frontend) and Node.js/Express (backend).

---

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | Next.js 14, React 18, Three.js    |
| Backend  | Node.js, Express.js               |
| Email    | Nodemailer + Gmail SMTP           |

---

## Features

- Full SDM-branded site — Navy/gold theme
- AI Chatbot — Floating chat bubble (bottom-right)
- WhatsApp direct link button
- Contact form — Sends enquiry email to SDM
- Chat feedback — Chat summaries emailed to SDM
- Responsive — Works on mobile, tablet, desktop
- 3D animated background (Three.js)

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher — [Download here](https://nodejs.org) (choose LTS)
- **npm** (comes bundled with Node.js)

Verify your installation:
```bash
node --version
npm --version
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create your environment file by copying the example:

```bash
# Windows (PowerShell)
Copy-Item .env.example .env

# Mac/Linux
cp .env.example .env
```

Open `backend/.env` and fill in your Gmail credentials:

```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_character_app_password
FEEDBACK_EMAIL=info@systemdiesandmould.com
FRONTEND_URL=http://localhost:3000
```

> **How to get a Gmail App Password:**
> 1. Go to your Google Account → Security
> 2. Enable **2-Step Verification** (required)
> 3. Go to **App Passwords**
> 4. Generate a new app password for "Mail"
> 5. Copy the 16-character password into `SMTP_PASS`
>
> Note: Use an App Password — NOT your regular Gmail login password.

Start the backend:

```bash
npm run dev    # Development mode (auto-restarts on file changes)
# or
npm start      # Production mode
```

Backend runs at: `http://localhost:5000`

---

### 3. Frontend Setup

Open a **new terminal window**, then:

```bash
cd frontend
npm install
```

Create your environment file:

```bash
# Windows (PowerShell)
Copy-Item .env.local.example .env.local

# Mac/Linux
cp .env.local.example .env.local
```

The default frontend `.env.local` works out of the box for local development:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Frontend runs at: `http://localhost:3000`

---

### 4. Open in Browser

With both backend and frontend running, open:

```
http://localhost:3000
```

---

## Running Both Servers

You need **two terminal windows** open simultaneously:

| Terminal | Command | URL |
|----------|---------|-----|
| Terminal 1 | `cd backend && npm run dev` | http://localhost:5000 |
| Terminal 2 | `cd frontend && npm run dev` | http://localhost:3000 |

---

## Project Structure

```
SDM Github/
├── frontend/               # Next.js React application
│   ├── pages/              # Page routes (Home, Services, Projects, etc.)
│   ├── components/         # Reusable React components
│   ├── public/             # Static assets (images, logos)
│   ├── styles/             # CSS stylesheets
│   ├── next.config.js      # Next.js configuration
│   └── package.json
│
├── backend/                # Node.js/Express API server
│   ├── routes/             # API route handlers (chat, contact, projects)
│   ├── services/           # Business logic (email, chat)
│   ├── server.js           # Express entry point
│   ├── .env.example        # Environment variable template
│   └── package.json
│
└── .gitignore
```

---

## Environment Variables Reference

### Backend (`backend/.env`)

| Variable        | Description                                | Example                          |
|-----------------|--------------------------------------------|----------------------------------|
| `PORT`          | Port the backend server runs on            | `5000`                           |
| `SMTP_HOST`     | Email SMTP host                            | `smtp.gmail.com`                 |
| `SMTP_PORT`     | SMTP port                                  | `587`                            |
| `SMTP_USER`     | Gmail address used to send emails          | `you@gmail.com`                  |
| `SMTP_PASS`     | Gmail App Password (16 chars, no spaces)   | `abcd efgh ijkl mnop`            |
| `FEEDBACK_EMAIL`| Email address that receives contact forms  | `info@systemdiesandmould.com`    |
| `FRONTEND_URL`  | Frontend URL (for CORS)                    | `http://localhost:3000`          |

### Frontend (`frontend/.env.local`)

| Variable                  | Description                  | Example                     |
|---------------------------|------------------------------|-----------------------------|
| `NEXT_PUBLIC_BACKEND_URL` | Backend API base URL         | `http://localhost:5000`     |

---

## Contact Details

- **Company**: System Dies and Mould (SDM)
- **Director**: Farasat Karim
- **Phone**: 0331-2134341
- **Email**: c47.sdm@gmail.com
- **Address**: C-47, SITE, Super Highway, Karachi
