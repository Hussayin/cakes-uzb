import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Send = () => {
  const [image, setImage] = useState(null);
  const [model, setModel] = useState("");
  const [size, setSize] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const botToken = "7504815356:AAFgOfrQsr6TDqydE9z19VJ3uMXR-5Dkdrg"; // Bot tokenni shu joyga yoz
  const chatId = "@OurUsersWatch"; // Telegram chat yoki kanal ID sini yoz

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("model", model);
    formData.append("size", size);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("phone", phone);

    const messageText = `
      Модель: ${model}\n
      Размер: ${size}\n
      Год: ${year}\n
      Цена: ${price}\n
      Имя: ${name}\n
      Телефон: ${phone}
    `;

    // Telegram botga yuborish
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

    const formDataToSend = new FormData();
    formDataToSend.append("chat_id", chatId);
    formDataToSend.append("photo", image);
    formDataToSend.append("caption", messageText);

    try {
      // Rasm va matnni Telegram botga yuborish
      const response = await fetch(telegramApiUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setMessage("100%");
        setModel("");
        setSize("");
        setYear("");
        setPrice("");
        setName("");
        setPhone("");
        setImage(null);
      } else {
        setMessage("Ошибка при отправке данных.");
      }
    } catch (error) {
      console.error("Error sending data", error);
      setMessage("Ошибка при отправке данных.");
    }
  };

  return (
    <div>
      <Link to="/skupka" className="">
        <h1 className="flex items-center bg-[#0f192b] p-[15px] gap-[2px] font-bold font-nunito text-[17px]">
          <FaChevronLeft className="text-[27px]" /> назад
        </h1>
      </Link>
      <div className="mt-[30px] px-[20px] p-[30px] ">
        <h1 className="text-center text-[20px] leading-5 mb-[20px] ">
          Запрос отправьте, и мы обязательно с вами свяжемся
        </h1>
        <form
          className=" flex justify-center items-center flex-col gap-[15px] px-[10px] "
          onSubmit={handleSubmit}
        >
          <div className="inputs">
            <label htmlFor="image">Загрузите изображение</label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="model">Модель</label>
            <input
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="size">Размер</label>
            <input
              type="text"
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="year">Год</label>
            <input
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="price">Цена</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="phone">Телефон</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button
            className=" mt-[20px] rounded-md font-bold bg-green-600 px-[20px] py-[7px] "
            type="submit"
          >
            Отправить
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Send;
