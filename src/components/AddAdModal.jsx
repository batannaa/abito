import React, { useState } from "react";

const AddAdModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (formData.title && formData.price && formData.location) {
      onSubmit(formData);
      setFormData({
        title: "",
        price: "",
        location: "",
        description: "",
        image: null,
      });
      setImagePreview(null);
    }
  };

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
          maxWidth: "500px",
          width: "100%",
          padding: "30px",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
          Подать объявление
        </h2>

        {/* Загрузка фото */}
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#333",
              fontSize: "14px",
            }}
          >
            Фото товара
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          />
          {imagePreview && (
            <div style={{ marginTop: "10px", position: "relative" }}>
              <img
                src={imagePreview}
                alt="Превью"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <button
                onClick={() => {
                  setFormData({ ...formData, image: null });
                  setImagePreview(null);
                }}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ✕
              </button>
            </div>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#333",
              fontSize: "14px",
            }}
          >
            Название *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Введите название товара"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#333",
              fontSize: "14px",
            }}
          >
            Цена (₽) *
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            placeholder="Введите цену"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#333",
              fontSize: "14px",
            }}
          >
            Местоположение *
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="Город, район"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#333",
              fontSize: "14px",
            }}
          >
            Описание
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Расскажите о товаре"
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "14px",
              outline: "none",
              resize: "vertical",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleSubmit}
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
            Опубликовать
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
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAdModal;
