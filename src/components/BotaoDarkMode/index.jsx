//BOTÃO
import { useState } from "react";
import styles from "./BotaoDarkMode.module.css"; // Seu arquivo de estilos

export default function Botao({ toggleDarkMode, darkMode }) {
	console.log(styles.darkModeButton)
	return (
		<div className={styles.darkModeButtonContainer}>
			{/* Botão de alternância */}
			<button onClick={toggleDarkMode} className={`${styles.darkModeButton} ${darkMode ? styles.darkMode : ""}`}>
				{darkMode ? "Modo Claro" : "Modo Escuro"}
			</button>
		</div>
	);
}
