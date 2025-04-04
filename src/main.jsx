import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import { ThemeProvider } from "./components/context/ThemeContext.jsx";
import { TelegramProvider } from "./components/context/TelegramContext.jsx";
import "./index.css";
import ProductProvider from "./components/context/ProductContext.jsx";
import DetailProvider from "./components/context/DetailContext.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import BasketProvider from "./components/context/BasketContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BasketProvider>
      <DetailProvider>
        <TelegramProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </TelegramProvider>
      </DetailProvider>
    </BasketProvider>
  </ThemeProvider>
);

// Service Worker-ni ro'yxatdan o'tkazish
serviceWorkerRegistration.register();
