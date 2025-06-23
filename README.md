# 📰 Dragon News

🔗 **Live Link**: [https://dragon-news-bfaa5.web.app](https://dragon-news-bfaa5.web.app)

## 📌 Overview

**Dragon News** is a responsive Single Page Application (SPA) designed to deliver categorized news content with a clean user interface. Built with **React** and styled using **Tailwind CSS**, it includes secure authentication via **Firebase** and offers both dynamic content and a modern UX.

---

## ✨ Features & Functionality

### 🔹 Dynamic Category Navigation
- LeftNavbar fetches and displays news categories from a public API.
- Active category highlighting improves user navigation.

### 🔹 Latest News Marquee
- Powered by `react-fast-marquee`.
- Continuously scrolls headlines to display trending topics instantly.

### 🔹 News Article Cards
- `NewsCard` component displays:
  - Title, image, short description
  - Author info, published date
  - Views count, star ratings
  - "Read More" link for full article

### 🔹 Detailed News View
- Accessible only to **logged-in users**
- Displays full article, large image, and category-wise navigation
- Implemented in `NewsDetails` and protected by `PrivateRoute`

### 🔹 User Authentication (via Firebase)
- 🔐 **Login**: With email/password, client-side validation, and error handling
- 📝 **Register**: With name, email, password, and profile picture
- 🧑‍💼 **Update Profile**: Allows updating display name & photo URL

### 🔹 Private Routes
- Secures routes like `NewsDetails` and `UpdateProfile`
- Redirects unauthenticated users to `/auth/login`

### 🔹 Social Login Integration
- Google and GitHub sign-in buttons in place (for future implementation)

### 🔹 Right Side Widgets
- **Find Us**: Links to Facebook, Twitter, and Instagram
- **Q-Zone**: Visual section showcasing activities like:
  - Swimming
  - Class
  - Playground

### 🔹 404 Not Found Page
- Custom error page with a redirect link to Home

### 🔹 Loading State
- Spinner displayed during route protection and data fetching

---

## 🧠 ES6+ Features Used

- **Arrow Functions** for concise logic
- **Destructuring** for cleaner state/context access
- **`const` / `let`** for proper scoping
- **Template Literals** for dynamic strings
- **Spread Operator** for object cloning
- **Promises & async/await** for Firebase API calls
- **ES6 Modules**: Organized imports/exports
- **React Hooks**: `useState`, `useEffect`, `useContext`, `useNavigate`, `useLocation`, `useLoaderData`

---

## ⚙️ Technologies Used

- **React.js**
- **React Router DOM**
- **Firebase Auth**
- **Tailwind CSS**
- **react-fast-marquee**
- **react-icons**
- **moment.js**
- **daisiUI**
- **Public News API**:  
  `https://openapi.programming-hero.com/api/news/`

---

## 🚀 Installation & Setup

### ✅ Prerequisites

- Node.js (LTS)
- npm or Yarn
- Firebase Project with Authentication enabled (Email/Password)

### 📦 Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd dragon-news
npm install
# or
yarn install
Firebase Configuration

Create a file:
src/Firebase/Firebase-config.js

js
Copy
Edit
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export default app;

Run the App

bash
Copy
Edit
npm run dev
# or
yarn dev
📁 Project Structure
src/
├── assets/                 # Static images (logo, user icons, Q-zone)
├── components/             # Reusable UI components
│   ├── layout-components/  # Navbar and sidebar layout
├── Firebase/
│   └── Firebase-config.js  # Firebase setup
├── layouts/                # AuthLayout and HomeLayout
├── pages/                  # Login, Register, NewsDetails, UpdateProfile, etc.
├── provider/
│   └── AuthProvider.jsx    # Firebase Auth context provider
├── routes/
│   ├── PrivateRoute.jsx
│   └── Router.jsx
├── App.jsx
├── main.jsx
└── index.css
🤝 Contributing
Contributions are welcome!
Fork the repository → Create a new branch → Make changes → Submit a Pull Request.

🪪 License
This project is open-source under the MIT License.

📬 Contact
Sadikul Mobasshir
📧 Email: sadikulmobasshir22@gmail.com

