import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardGrid from "./components/CardGrid";
import Sidebar from "./components/Sidebar";
import CardModal from "./components/CardModal";
import AddAdModal from "./components/AddAdModal";
import Footer from "./components/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Пвх материал 2й сорт",
      price: 170,
      location: "Казань, р-н Вахитовский",
      date: "10 июля 11:39",
      category: "материалы",
      image: null,
      description: "Качественный ПВХ материал второго сорта",
    },
    {
      id: 2,
      title: "Диван угловой серый",
      price: 15000,
      location: "Москва, р-н Центральный",
      date: "11 июля 14:22",
      category: "мебель",
      image: null,
      description: "Качественный",
    },
    {
      id: 3,
      title: "iPhone 13 Pro 128GB",
      price: 65000,
      location: "Санкт-Петербург",
      date: "12 июля 09:15",
      category: "электроника",
      image: null,
      description: "",
    },
    {
      id: 4,
      title: "Велосипед горный",
      price: 25000,
      location: "Казань, р-н Приволжский",
      date: "10 июля 16:40",
      category: "спорт",
      image: null,
      description: "",
    },
    {
      id: 5,
      title: "Холодильник LG",
      price: 30000,
      location: "Москва, р-н Северный",
      date: "13 июля 10:30",
      category: "бытовая техника",
      image: null,
      description: "",
    },
    {
      id: 6,
      title: "Куртка зимняя новая",
      price: 8000,
      location: "Екатеринбург",
      date: "14 июля 12:00",
      category: "одежда",
      image: null,
      description: "",
    },
  ]);

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddAd = (newAd) => {
    const newCard = {
      id: cards.length + 1,
      title: newAd.title,
      price: parseInt(newAd.price),
      location: newAd.location,
      description: newAd.description,
      image: newAd.image,
      date: new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      }),
      category: "другое",
    };
    setCards([newCard, ...cards]);
    setIsAddFormOpen(false);
  };

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Header onAddClick={() => setIsAddFormOpen(true)} />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <section style={{ paddingBottom: "50px" }}>
        <div
          style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 15px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "30px",
            }}
            className="content-wrapper"
          >
            <CardGrid
              cards={filteredCards}
              searchQuery={searchQuery}
              onCardClick={setSelectedCard}
              onClearSearch={() => setSearchQuery("")}
            />
            <Sidebar />
          </div>
        </div>
      </section>
      {selectedCard && (
        <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
      {isAddFormOpen && (
        <AddAdModal
          onClose={() => setIsAddFormOpen(false)}
          onSubmit={handleAddAd}
        />
      )}
      <Footer />
      <style>{`
        @media(max-width: 991px) {
          .content-wrapper { grid-template-columns: 1fr !important; }
          .sidebar { margin-top: 30px; }
        }
        @media(max-width: 768px) {
          .header-control { display: none !important; }
          .burger-menu { display: flex !important; }
          .search-text { display: none; }
        }
      `}</style>
    </div>
  );
};

export default App;
