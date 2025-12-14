import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import { ThemeProvider } from "./components/context/ThemeContext.jsx";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// Service Worker-ni ro'yxatdan o'tkazish
serviceWorkerRegistration.register();
