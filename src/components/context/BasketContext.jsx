import { useState, createContext, useEffect } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  // Savatchani state
  const [cart, setCart] = useState([]);

  // Sahifa yuklanganda `localStorage`dan mahsulotlarni yuklash
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Har safar `cart` o'zgarganda `localStorage`ga yozish
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Mahsulotni savatga qo'shish
  const addToCart = (product) => {
    // Agar mahsulot allaqachon savatda bo'lsa, qaytaramiz
    if (cart.some((item) => item.id === product.id)) {
      return;
    }

    // Yangi mahsulotni qo'shamiz
    setCart([...cart, { ...product, amount: 1 }]);
  };

  // Mahsulotni savatdan o'chirish
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <BasketContext.Provider value={{ addToCart, removeFromCart, cart }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
