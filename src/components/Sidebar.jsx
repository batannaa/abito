import React from "react";
import ServiceItem from "./ServiceItem";

const Sidebar = () => {
  const services = [
    {
      icon: "🚚",
      title: "Доставка",
      description:
        "Проверка при получении и возможность бесплатно вернуть товар",
    },
    {
      icon: "🚗",
      title: "Автотека",
      description:
        "Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах",
    },
    {
      icon: "🏠",
      title: "Онлайн-бронирование жилья",
      description:
        "Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России",
    },
  ];

  return (
    <aside className="sidebar">
      <h3 style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
        Сервисы и услуги
      </h3>
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </aside>
  );
};

export default Sidebar;
