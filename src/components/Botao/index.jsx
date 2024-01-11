//BOTÃO
import { useState } from "react";
import styles from "../../styles/Home.module.css"; // Seu arquivo de estilos

export default function Botao({ toggleDarkMode, darkMode }) {
  return (
    <div className={styles.darkModeButtonContainer}>
      {/* Botão de alternância */}
      <button
        onClick={toggleDarkMode}
        className={`${styles.darkModeButton} ${darkMode ? styles.darkMode : ''}`}
        style={{ backgroundColor: darkMode ? 'white' : '' }}
      >
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
    </div>
  );
}
