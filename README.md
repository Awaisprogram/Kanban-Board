# TaskGenie - Modern Kanban Board Application

<div align="center">

![TaskGenie Banner](/frontend/public/logo.png)

**Organize chaos. Achieve clarity.**

A powerful, AI-ready Kanban board built for high-performance teams and individuals.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.124+-009166?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## ✨ Features

### Core Functionality

- 📋 **Kanban Board** - Four-column workflow: Backlog, Todo, In Progress, Complete
- 🔄 **Drag & Drop** - Smooth task management with visual feedback
- ➕ **Quick Add** - Create tasks instantly from any column
- 🗑️ **Smart Delete** - Drag tasks to the burn barrel to remove them
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop

### User Experience

- 🎨 **Modern Dark UI** - Sleek violet/indigo theme with smooth animations
- ✨ **Framer Motion** - Fluid transitions and micro-interactions
- 📜 **Smooth Scrolling** - Lenis-powered scrolling experience
- 🌓 **Accessible Components** - Built with Radix UI primitives

### Authentication & Security

- 🔐 **Multiple Auth Methods** - Google OAuth + Email/Password
- 🔑 **Password Reset** - Secure email-based recovery
- 🔒 **JWT Sessions** - Secure session management
- 🔗 **Account Linking** - Link Google accounts to existing credentials

### Developer Experience

- 🛠️ **Type Safety** - Full TypeScript coverage across stack
- 📦 **Modern Stack** - Next.js 16 App Router + FastAPI
- 🗄️ **ORM Ready** - SQLModel (Python) + Drizzle (TypeScript)
- 🌐 **REST API** - Clean API endpoints for todo CRUD operations

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.12+
- PostgreSQL database
- pnpm (recommended) or npm/yarn

### Environment Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/kanban-app.git
   cd kanban-app
   ```

2. **Set up environment variables**

   Create `.env` files for both frontend and backend:

   ```bash
   # web/frontend/.env.local
   DATABASE_URL="postgresql://user:password@localhost:5432/taskgenie"
   AUTH_GOOGLE_ID="your-google-client-id"
   AUTH_GOOGLE_SECRET="your-google-client-secret"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   SMTP_HOST="smtp.example.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@example.com"
   SMTP_PASSWORD="your-app-password"
   ```

   ```bash
   # web/backend/.env
   DATABASE_URL="postgresql://user:password@localhost:5432/taskgenie"
   ```

### Running the Application

**Backend (FastAPI)**

```bash
cd web/backend
uv sync
uv run uvicorn main:app --reload
```

**Frontend (Next.js)**

```bash
cd web/frontend
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to see the application.

---

## 🏗️ Project Structure

```
kanban-app/
├── web/
│   ├── backend/                 # FastAPI backend
│   │   ├── main.py             # API entry point
│   │   ├── pyproject.toml      # Python dependencies
│   │   └── README.md           # Backend docs
│   │
│   └── frontend/               # Next.js frontend
│       ├── src/
│       │   ├── app/           # App Router pages
│       │   │   ├── (auth-routes)/    # Auth pages
│       │   │   ├── api/              # API routes
│       │   │   ├── todo/             # Kanban board
│       │   │   └── page.tsx          # Landing page
│       │   │
│       │   ├── components/    # React components
│       │   │   ├── auth/      # Authentication
│       │   │   ├── home/      # Landing page
│       │   │   ├── layout/    # Navbar, Footer
│       │   │   └── ui/        # Reusable UI
│       │   │
│       │   ├── actions/       # Server actions
│       │   ├── db/            # Database schema
│       │   ├── hooks/         # Custom hooks
│       │   ├── lib/           # Utilities
│       │   └── services/      # API services
│       │
│       ├── package.json
│       ├── tailwind.config.mjs
│       └── tsconfig.json
│
└── README.md
```

---

## 📚 API Reference

### Backend Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | `/`           | API health check |
| GET    | `/todos`      | Get all todos    |
| POST   | `/todos`      | Create new todo  |
| PUT    | `/todos/{id}` | Update todo      |
| DELETE | `/todos/{id}` | Delete todo      |

### API Response Examples

**Get All Todos**

```json
[
  {
    "id": 1,
    "title": "Research AI Model integration",
    "category": "backlog"
  }
]
```

**Create Todo**

```json
{
  "title": "New Task",
  "category": "todo"
}
```

---

## 🛠️ Tech Stack

### Frontend

| Technology                                      | Purpose                         |
| ----------------------------------------------- | ------------------------------- |
| [Next.js 16](https://nextjs.org/)               | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/)   | Type safety                     |
| [Tailwind CSS](https://tailwindcss.com/)        | Utility-first CSS               |
| [NextAuth.js](https://next-auth.js.org/)        | Authentication                  |
| [Drizzle ORM](https://orm.drizzle.team/)        | Database ORM                    |
| [Framer Motion](https://www.framer.com/motion/) | Animations                      |
| [Radix UI](https://www.radix-ui.com/)           | Accessible components           |

### Backend

| Technology                                 | Purpose               |
| ------------------------------------------ | --------------------- |
| [FastAPI](https://fastapi.tiangolo.com/)   | Python web framework  |
| [SQLModel](https://sqlmodel.tiangolo.com/) | ORM and data modeling |
| [PostgreSQL](https://www.postgresql.org/)  | Database              |
| [Uvicorn](https://www.uvicorn.org/)        | ASGI server           |

---

## 📦 Key Dependencies

### Frontend (`web/frontend/package.json`)

```json
{
  "dependencies": {
    "@auth/drizzle-adapter": "^1.11.1",
    "@radix-ui/react-*": "^1.1.x",
    "better-auth": "^1.4.7",
    "drizzle-orm": "^0.41.0",
    "framer-motion": "^12.23.x",
    "lucide-react": "^0.561.x",
    "next": "^16.0.10",
    "next-auth": "^4.24.7",
    "react": "19.2.1"
  }
}
```

### Backend (`web/backend/pyproject.toml`)

```toml
dependencies = [
    "fastapi[standard]>=0.124.4",
    "psycopg[binary]>=3.2",
    "pydantic>=2.12.5",
    "python-dotenv>=1.0.0",
    "sqlmodel>=0.0.27",
]
```

---

## 🔒 Authentication Setup

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to **APIs & Services** → **Credentials**
4. Create **OAuth 2.0 Client ID**
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Secret to `.env.local`

### Email Provider

Configure SMTP settings in `.env.local`:

```bash
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
```

For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833).

---

## 🎨 UI Components

The project uses a custom component library built on Radix UI:

| Component      | Description                   |
| -------------- | ----------------------------- |
| `Button`       | Multi-variant button with CVA |
| `Card`         | Content container             |
| `Input`        | Form input field              |
| `Label`        | Form label                    |
| `Tabs`         | Tab navigation                |
| `Avatar`       | User avatar display           |
| `DropdownMenu` | Dropdown navigation           |

---

## 📈 Future Enhancements

- 🤖 **AI Prioritization** - Auto-sort tasks by urgency
- 📊 **Productivity Analytics** - Completion velocity charts
- 👥 **Team Collaboration** - Share boards with team members
- 🔔 **Real-time Updates** - WebSocket support
- 📱 **Mobile App** - React Native companion app

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Vercel](https://vercel.com/) for Next.js
- [FastAPI](https://fastapi.tiangolo.com/) team
- [Tailwind CSS](https://tailwindcss.com/) community
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

<div align="center">

**Built with ❤️**

[Issues](https://github.com/yourusername/kanban-app/issues) · [Pull Requests](https://github.com/yourusername/kanban-app/pulls)

</div>
