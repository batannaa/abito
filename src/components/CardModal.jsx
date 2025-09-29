import React from "react";

const CardModal = ({ card, onClose }) => {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          maxWidth: "600px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: "300px",
            background: card.image
              ? "transparent"
              : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
          }}
        >
          {card.image ? (
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <svg width="120" height="120" fill="white" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
            </svg>
          )}
        </div>
        <div style={{ padding: "30px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "15px", color: "#333" }}>
            {card.title}
          </h2>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#256eeb",
              marginBottom: "20px",
            }}
          >
            {card.price.toLocaleString("ru-RU")} ₽
          </p>
          <div style={{ marginBottom: "10px", color: "#666" }}>
            <strong>Местоположение:</strong> {card.location}
          </div>
          <div style={{ marginBottom: "20px", color: "#666" }}>
            <strong>Опубликовано:</strong> {card.date}
          </div>
          <div style={{ marginBottom: "20px", color: "#666" }}>
            <strong>Категория:</strong> {card.category}
          </div>
          {card.description && (
            <div
              style={{
                marginBottom: "25px",
                padding: "15px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
              }}
            >
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                {card.description}
              </p>
            </div>
          )}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#256eeb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Написать продавцу
            </button>
            <button
              onClick={onClose}
              style={{
                padding: "12px 20px",
                backgroundColor: "#f5f5f5",
                color: "#333",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
