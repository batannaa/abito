import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        padding: "30px 0",
        textAlign: "center",
        color: "#999",
        fontSize: "13px",
        borderTop: "1px solid #eee",
      }}
    >
      <div>
        <p>© ООО «Абито», 2025</p>
        <p style={{ marginTop: "5px" }}>
          Политика конфиденциальности • Обработка данных
        </p>
      </div>
    </footer>
  );
};

export default Footer;
