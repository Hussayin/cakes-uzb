import { BrowserRouter, Route, Routes } from "react-router-dom";
//* compos
import Enter from "./Enter";
import InstallPrompt from "./InstallModal";
import ScrollManager from "./ScrollManager";

import { ToastContainer } from "react-toastify"; // Toastni qo'shamiz
import "react-toastify/dist/ReactToastify.css"; // Toast stilini import qilamiz

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <HelmetProvider> */}
        <ScrollManager />
        <InstallPrompt />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Enter />} />
        </Routes>
        {/* </HelmetProvider> */}
      </BrowserRouter>
      {/* Toastlarni chiqarish uchun kerak */}
      <ToastContainer className="my-toast" />
    </div>
  );
};

export default App;

// {
//   "name": "Sanat Hali",
//   "short_name": "Sanat Hali",
//   "start_url": "/",
//   "display": "standalone",
//   "background_color": "#fff7ed",
//   "theme_color": "#fff7ed",
//   "icons": [
//     {
//       "src": "/image192.jpg",
//       "sizes": "192x192",
//       "type": "image/jpg"
//     },
//     {
//       "src": "/image512.jpg",
//       "sizes": "512x512",
//       "type": "image/jpg"
//     }
//   ]
// }
