import styles from "./Categorias.module.css";

import Image from "next/image";

import icone1 from "../../../public/assets/entrada.png";
import icone2 from "../../../public/assets/massa.png";
import icone3 from "../../../public/assets/carne.png";
import icone4 from "../../../public/assets/bebidas.png";
import icone5 from "../../../public/assets/salada.png";
import icone6 from "../../../public/assets/sobremesa.png";

const Categorias = ({ handleFiltro, botaoClicado }) => {
	return (
		<section className={styles.secao_categorias}>
			<div className={styles.container_botoes}>
				<button className={botaoClicado === "Appetizers" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Appetizers")}>
					<Image className={styles.icone} src={icone1} alt="ícone" />
					Appetizers
				</button>

				<button className={botaoClicado === "Pastas" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Pastas")}>
					<Image className={styles.icone} src={icone2} alt="ícone" />
					Pastas
				</button>

				<button className={botaoClicado === "Meats" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Meats")}>
					<Image className={styles.icone} src={icone3} alt="ícone" />
					Meats
				</button>

				<button className={botaoClicado === "Drinks" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Drinks")}>
					<Image className={styles.icone} src={icone4} alt="ícone" />
					Drinks
				</button>

				<button className={botaoClicado === "Salads" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Salads")}>
					<Image className={styles.icone} src={icone5} alt="ícone" />
					Salads
				</button>

				<button className={botaoClicado === "Desserts" ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro("Desserts")}>
					<Image className={styles.icone} src={icone6} alt="ícone" />
					Desserts
				</button>
			</div>
		</section>
	);
};

export default Categorias;