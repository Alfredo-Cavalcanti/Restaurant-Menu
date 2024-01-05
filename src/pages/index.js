import Image from 'next/image';
import styles from "../styles/Home.module.css";
import Banner from "../../public/assets/banner.png";
import { useState } from "react";
import {filtrarProdutos, buscarProduto, produtosEntradas} from "../service";
import Head from 'next/head'
import Cards from '../components/Cards'
import Categorias from '../components/Categorias'
import CampoDeBusca from '../components/CampoDeBusca'
import { produtos } from "../data/data-produtos.js";

export default function Home() {

    const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
    const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

    const [botaoClicado, setBotaoClicado] = useState("Entradas");

    const handleBusca = (textoDigitado) => {
        setTextoBuscaDigitado(textoDigitado);
        textoDigitado.length >= 4 && setDadosFiltrados(buscarProduto(textoDigitado));
        setBotaoClicado("");
    };

    const handleFiltro = (categoria) => {
        setTextoBuscaDigitado("");
        setDadosFiltrados(filtrarProdutos(categoria));
        setBotaoClicado(categoria);
    };

    return (
        <>
            <Head>
                <title>RESTAURANTE</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap" rel="stylesheet" />
            </Head>
            <header className={styles.banner}>
                <Image src={Banner} alt="banner" />
                <div>
                    <h1>RESTAURANTE</h1>
                    <p>
                        De pratos clássicos a criações surpreendentes, nosso cardápio é um
                        requinte de sabores refinados.
                    </p>
                </div>
            </header>
            <main className={styles.container_principal}>
                <Categorias
                    handleFiltro={handleFiltro}
                    botaoClicado={botaoClicado}
                />

                <CampoDeBusca
                    textoBuscaDigitado={textoBuscaDigitado}
                    handleBusca={handleBusca}
                />

                <section className={styles.secao_cards}>
                    <div>
                        <h2>Cardápio</h2>
                    </div>

                    <div className={styles.container_cards}>
                        {dadosFiltrados.map((produto) => (
                            <Cards key={produto.id} produto={produto} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}