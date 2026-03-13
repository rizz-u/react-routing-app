# ⬡ React Routing Example

A beautifully designed React application demonstrating **React Router v6** with:

- 🏠 Home Page
- 📖 About Page
- 🔍 404 Not Found Page (with auto-redirect countdown)
- 📱 Responsive navigation with mobile hamburger menu
- ✨ Smooth animated page transitions

---

## 🚀 Getting Started in VS Code

### Prerequisites
- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

### 1. Open in VS Code
```bash
# Open the project folder in VS Code
code react-routing-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

### 4. Open in browser
Visit [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

```
src/
├── pages/
│   ├── Home.jsx         # Home page with hero, concepts & features
│   ├── Home.css
│   ├── About.jsx        # About page with logic explanation & improvements
│   ├── About.css
│   ├── NotFound.jsx     # 404 page with auto-redirect countdown
│   └── NotFound.css
├── components/
│   ├── Navbar.jsx       # Responsive navbar with active link detection
│   └── Navbar.css
├── App.jsx              # Route definitions + page transitions
├── App.css
├── main.jsx             # Entry point — wraps app with BrowserRouter
└── index.css            # Global styles & CSS variables
```

---

## 🧠 Concepts Covered

| Concept | Description |
|---|---|
| `BrowserRouter` | Provides routing context using the browser History API |
| `Routes` | Container that renders the first matching `Route` |
| `Route` | Maps a URL path to a React component |
| `Link` | Navigates without a full page reload |
| `useLocation` | Hook to read the current URL path |
| `useNavigate` | Hook for programmatic navigation |

---

## 💡 Possible Improvements

- **Protected Routes** — Guard routes behind authentication
- **Lazy Loading** — Split code with `React.lazy()` + `Suspense`
- **Nested Routes** — Shared layout components with `Outlet`
- **useSearchParams** — Read/write URL query strings
- **NavLink** — Built-in active class support

---

## 🛠 Tech Stack

- [React 18](https://react.dev/)
- [React Router v6](https://reactrouter.com/en/main)
- [Vite](https://vitejs.dev/)
