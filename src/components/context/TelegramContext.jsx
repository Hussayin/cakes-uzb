// TelegramContext.js
import React, { createContext } from "react";

// Context yaratish
export const TelegramContext = createContext();

// Telegramga yuborish funksiyasi
const sendToTelegram = async (product) => {
  const BOT_TOKEN = "7504815356:AAFgOfrQsr6TDqydE9z19VJ3uMXR-5Dkdrg"; // O'zingizning Telegram bot tokeningizni yozing
  const CHAT_ID = "@OurUsersWatch"; // Telegram chat ID
  const MESSAGE = `
🛒 *Product Info:*
- *Title:* ${product.title}
- *Price:* ${product.price}$
- *Code:* ${product.rafcode}
- [Rasmni ko'rish](${product.mainImage})
  `;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: MESSAGE,
        parse_mode: "Markdown",
      }),
    });
    console.log("Message sent to Telegram!");
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};

// Provider yaratish
export const TelegramProvider = ({ children }) => {
  return (
    <TelegramContext.Provider value={{ sendToTelegram }}>
      {children}
    </TelegramContext.Provider>
  );
};
