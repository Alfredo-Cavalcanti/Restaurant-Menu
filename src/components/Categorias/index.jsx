import styles from "./Categorias.module.css";
import Image from "next/image";
import { botoes } from "@/data/data-categorias";

const Categorias = ({ handleFiltro, botaoClicado, darkMode }) => {
	return (
		<section className={styles.secao_categorias}>
			<div className={`${styles.container_botoes} ${darkMode ? styles.darkMode : ""}`}>
				{botoes.map((botao) => (
					<button className={botaoClicado === botao.nome ? styles.acenderBtn : styles.apagarBtn} onClick={() => handleFiltro(botao.nome)}>
						<Image className={styles.icone} src={botao.icone} alt="ícone" />
						{botao.nome}
					</button>
				))}
			</div>
		</section>
	);
};

export default Categorias;