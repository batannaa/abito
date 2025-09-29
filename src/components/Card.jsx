import React from "react";

const Card = ({ card, onClick }) => {
  return (
    <div
      onClick={() => onClick(card)}
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          background: card.image
            ? "transparent"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          <svg width="80" height="80" fill="white" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
          </svg>
        )}
      </div>
      <div style={{ padding: "15px" }}>
        <div
          style={{
            color: "#256eeb",
            fontSize: "16px",
            marginBottom: "8px",
            fontWeight: "500",
          }}
        >
          {card.title}
        </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          {card.price.toLocaleString("ru-RU")} ₽
        </div>
        <div style={{ color: "#999", fontSize: "13px", marginBottom: "3px" }}>
          {card.location}
        </div>
        <div style={{ color: "#999", fontSize: "13px" }}>{card.date}</div>
      </div>
    </div>
  );
};

export default Card;
