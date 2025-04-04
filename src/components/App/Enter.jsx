import React from "react";
import Navbar from "../compos/Navbar";
import { Corusel } from "../compos/Corusel";
import Search from "../compos/Search";
import MenuBrends from "../compos/MenuBrends";
import Populor from "../compos/Populor";
import MenuAll from "./MenuAll";
import { Helmet } from "react-helmet"; // Helmetni import qilish

const Enter = () => {
  return (
    <div className="mb-[85px]">
      {/* SEO uchun Helmet */}
      <Helmet>
        {/* Saytning sarlavhasi */}
        <title>The Watch Outlet - Oригинальные часы | Soatlar do'koni</title>

        {/* google metta tags */}
        {/* <meta
          name="google-site-verification"
          content="bUtMdHYEudBsB_KFa95L6U5ZKZW3UcV4CPGfRFQIw0Q"
        /> */}

        {/* Ruscha tavsif */}
        <meta
          name="description"
          content="Tissot, Casio, Seiko, Longines, Frederique Constant va Rolex brendli soatlarni bizdan xarid qiling. Rasmiy do'kon, kafolatli mahsulotlar!"
        />

        {/* Ruscha kalit so'zlar, lekin o'zbekcha so'zlar ham qo'shiladi */}
        <meta
          name="keywords"
          content="soatlar, brendli soatlar, Tissot, Casio, Seiko, Longines, Rolex, arzon soatlar, original soatlar, оригинальные часы, Tissot, Casio, Seiko, Longines, Rolex, купить часы"
        />

        {/* Open Graph tavsifi */}
        <meta
          property="og:title"
          content="The Watch Outlet - Eng yaxshi soatlar | Купить часы"
        />
        <meta
          property="og:description"
          content="O‘zbekistondagi eng yaxshi soatlar do‘koni. Tissot, Rolex, Seiko va boshqa brendlar!"
        />

        {/* Sayt URL */}
        <meta property="og:url" content="https://www.thewatchoutlet.uz/" />

        {/* Saytning rasmiy tili rus tilida
        <meta httpEquiv="Content-Language" content="ru" /> */}

        {/* Open Graph tasviri */}
        <meta
          property="og:image"
          content="https://www.thewatchoutlet.uz/logo-img-mainn.png"
        />

        {/* Qidiruv tizimlari uchun meta */}
        <meta name="robots" content="index, follow" />
        {/* Schema.org JSON-LD ma'lumotlari */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "The Watch Outlet - Oригинальные часы - Soatlar do'koni",
            url: "https://www.thewatchoutlet.uz/", // Saytning sahifasiga havola
            description:
              "Покупаем брендовые часы по выгодным ценам. Оценка и покупка Tissot, Casio, Seiko, Longines, Frederique Constant и других брендов в Ташкенте.",
            image: "https://www.thewatchoutlet.uz/logo-img-mainn.png", // Saytning rasmiy logosi
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Tashkent, Uzbekistan",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "100", // Narxni aniqlash
              availability: "https://schema.org/InStock",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+998977122206",
              contactType: "customer service",
              availableLanguage: ["Russian", "Uzbek"],
            },
          })}
        </script>
      </Helmet>
      <Navbar />
      <Search />
      <Corusel />
      <MenuBrends />
      <Populor />
      <MenuAll />
    </div>
  );
};

export default Enter;
