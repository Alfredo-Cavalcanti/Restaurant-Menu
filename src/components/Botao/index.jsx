//BOTÃO
import { useState } from "react";
import styles from "../../styles/Home.module.css"; // Seu arquivo de estilos

export default function Botao({ toggleDarkMode, darkMode }) {
  return (
    <div>
      {/* Botão de alternância */}
      <button onClick={toggleDarkMode} className={darkMode ? styles.darkMode : ''}>
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
    </div>
  );
}
