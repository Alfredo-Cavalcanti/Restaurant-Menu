import espaguete from "../../public/assets/img/espaguete.jpg";
import lasanha from "../../public/assets/img/lasanha.jpg";
import ravioli from "../../public/assets/img/ravioli.jpg";
import capeletti from "../../public/assets/img/capeletti.jpg";
import nhoque from "../../public/assets/img/nhoque.jpg";
import bruschetta from "../../public/assets/img/bruschetta.jpg";
import carpaccio from "../../public/assets/img/carpaccio.jpg";
import paella from "../../public/assets/img/paella.jpg";
import ebiSpicy from "../../public/assets/img/ebi-spicy.jpg";
import aligot from "../../public/assets/img/aligot.jpg";
import fileMignon from "../../public/assets/img/file-mignon.jpg";
import picanha from "../../public/assets/img/picanha.png";
import bifeAncho from "../../public/assets/img/bife-ancho.jpg";
import tomahwankSteak from "../../public/assets/img/tomahawk-steak.jpg";
import primeRib from "../../public/assets/img/prime-rib.jpg";
import tiramisu from "../../public/assets/img/tiramisu.jpg";
import cheesecake from "../../public/assets/img/cheesecake.jpg";
import banoffee from "../../public/assets/img/banoffee.png";
import milFolhas from "../../public/assets/img/mil-folhas.jpg";
import pudim from "../../public/assets/img/pudim.jpg";
import cerveja from "../../public/assets/img/cerveja.jpg";
import refrigerante from "../../public/assets/img/refrigerante.jpg";
import suco from "../../public/assets/img/suco.jpg";
import whiskey from "../../public/assets/img/whiskey.jpg";
import agua from "../../public/assets/img/agua.jpg";
import saladaCeasar from "../../public/assets/img/salada-ceasar.jpg";
import saladaCaprese from "../../public/assets/img/salada-caprese.jpg";
import saladaWaldorf from "../../public/assets/img/salada-waldorf.jpg";
import saladaGrega from "../../public/assets/img/salada-grega.jpg";
import saladaNicoise from "../../public/assets/img/salada-nicoise.jpg";

export const produtos = [
    {
        id: 1,
        nome: "Spaghetti",
        categoria: "Pastas",
        preco: 20.0,
        descricao:
            "Delicioso espaguete que pode ser combinado com diversos molhos, como bolonhesa, carbonara, alho e oleo e pesto",
        imagem: espaguete,
    },
    {
        id: 2,
        nome: "Lasagna",
        categoria: "Pastas",
        preco: 25.0,
        descricao:
            "Maravilhosa lasanha com recheios variados como carne moída, frango, presunto e queijo, legumos e molho branco ou vermelho",
        imagem: lasanha,
    },
    {
        id: 3,
        nome: "Ravioli",
        categoria: "Pastas",
        preco: 24.25,
        descricao:
            "Massa recheada com diferentes ingredientes como queijo, carne, espinafre ou cogumelos",
        imagem: ravioli,
    },
    {
        id: 4,
        nome: "Capeletti",
        categoria: "Pastas",
        preco: 25.5,
        descricao:
            "Massa simples servida com diversos tipos de molhos como bolonhesa, carbonara, alfredo, pesto ou manteiga e sálvia",
        imagem: capeletti,
    },
    {
        id: 5,
        nome: "Gnocchi",
        categoria: "Pastas",
        preco: 8.99,
        descricao:
            "Massa feita de farinha de trigo e ovos, servida com molhos simples ou elaborados como, manteiga e parmesão, frango ao creme ou camarão alho e oleo",
        imagem: nhoque,
    },
    {
        id: 6,
        nome: "Bruschetta",
        categoria: "Appetizers",
        preco: 9.2,
        descricao:
            "Prato original da Itália, que leva fatias de pão italiano torrado, tomate picado, alho, manjericão e azeite",
        imagem: bruschetta,
    },
    {
        id: 7,
        nome: "Carpaccio",
        categoria: "Appetizers",
        preco: 32.0,
        descricao:
            "Prato de origem francesa, que leva fatias finas de salmão cru, alcaparras, queijo parmesão ralado e molho mostarda",
        imagem: carpaccio,
    },
    {
        id: 8,
        nome: "Paella",
        categoria: "Appetizers",
        preco: 65.0,
        descricao:
            "Prato tipico do leste da Espanha, que leva arroz e frutos do mar como mariscos, polvo, camarões, mexilhões e lulas",
        imagem: paella,
    },
    {
        id: 9,
        nome: "Ebi Spicy",
        categoria: "Appetizers",
        preco: 62.0,
        descricao:
            "Prato tipico do Japão, que leva camarões empanados em massa tempurá, maionese e molho picante",
        imagem: ebiSpicy,
    },
    {
        id: 10,
        nome: "Aligot",
        categoria: "Appetizers",
        preco: 18.99,
        descricao:
            "Irrestível purê de batata francês com queijo gruyere e meia cura",
        imagem: aligot,
    },
    {
        id: 11,
        nome: "Filet mignon",
        categoria: "Meats",
        preco: 41.99,
        descricao:
            "Com pouca gordura e fibras, além de muito macia, essa carne vai bem com diversos tipos de molhos",
        imagem: fileMignon,
    },
    {
        id: 12,
        nome: "Rump Cap",
        categoria: "Meats",
        preco: 35.99,
        descricao:
            "Execelente carne que tem uma capa de gordura e fibras generosas que acentuam o sabor e a maciez do corte",
        imagem: picanha,
    },
    {
        id: 13,
        nome: "Entrecôte",
        categoria: "Meats",
        preco: 39.99,
        descricao:
            "Carne que tem um ótimo nível de marmoreio e um sabor delicado, podendendo ser feita tanto na grelha ou na frigideira",
        imagem: bifeAncho,
    },
    {
        id: 14,
        nome: "Tomahawk Steak",
        categoria: "Meats",
        preco: 159.99,
        descricao:
            "Carne que combina duas texturas e sabores diferentes em uma só peça, e pode ser feita na grelha ou no forno",
        imagem: tomahwankSteak,
    },
    {
        id: 15,
        nome: "Prime Rib",
        categoria: "Meats",
        preco: 59.99,
        descricao:
            "Parte dianteira da costela bovina, muito suculenta e saborosa, que pode ser feita na grelha ou no forno",
        imagem: primeRib,
    },
    {
        id: 16,
        nome: "Tiramisu",
        categoria: "Desserts",
        preco: 15.99,
        descricao:
            "Sobremesa italiana que leva pão de ló, café, queijo mascarpone, ovos, açucar e cacau em pó",
        imagem: tiramisu,
    },
    {
        id: 17,
        nome: "Cheesecake",
        categoria: "Desserts",
        preco: 8.99,
        descricao:
            "Típica sobremesa dos Estados Unidos, que leva bolo, cream cheese e calda de frutas",
        imagem: cheesecake,
    },
    {
        id: 18,
        nome: "Banoffee",
        categoria: "Desserts",
        preco: 9.99,
        descricao:
            "Sobremesa inglesa, feita a base de biscoito triturado com manteiga, uma camada de doce de leite, banana fatiada e chantilly",
        imagem: banoffee,
    },
    {
        id: 19,
        nome: "Mille-Feuille",
        categoria: "Desserts",
        preco: 9.99,
        descricao:
            "Sobremesa de origem francesa, feita com massa folhada crocante e recheio cremoso de baunilha, chocolate ou frutas e açucar de confeiteiro",
        imagem: milFolhas,
    },
    {
        id: 20,
        nome: "Pudding",
        categoria: "Desserts",
        preco: 5.99,
        descricao:
            "Sobremesa cremosa e gelada muito popular no Brasil, feita com leite condesado, leite e ovos",
        imagem: pudim,
    },
    {
        id: 21,
        nome: "Craft Beer",
        categoria: "Drinks",
        preco: 12.99,
        descricao:
            "Cerveja artesanal de produção alemã que leva ingredientes nobres como malte, lúpulu, água e levedura ",
        imagem: cerveja,
    },
    {
        id: 22,
        nome: "Soda",
        categoria: "Drinks",
        preco: 7.99,
        descricao:
            "Refrescante refrigerante de cola com pequenos pedaços de limão e raspas de hortelã",
        imagem: refrigerante,
    },
    {
        id: 23,
        nome: "Juice",
        categoria: "Drinks",
        preco: 6.99,
        descricao:
            "Mais puro suco de laranjas holandesas frescas e levemente adocicada",
        imagem: suco,
    },
    {
        id: 24,
        nome: "Whiskey",
        categoria: "Drinks",
        preco: 17.99,
        descricao:
            "Poderoso whiskey sabor bourbon, envelhecido em barris de carvalho branco carbonizado",
        imagem: whiskey,
    },
    {
        id: 25,
        nome: "Water",
        categoria: "Drinks",
        preco: 4.99,
        descricao: "Água mineral saborizada com limão siciliano",
        imagem: agua,
    },
    {
        id: 26,
        nome: "Ceasar Salad",
        categoria: "Salads",
        preco: 19.8,
        descricao:
            "Salada preparada com alface-romana, torrada, queijo parmesão e molho Ceasar",
        imagem: saladaCeasar,
    },
    {
        id: 27,
        nome: "Caprese Salad",
        categoria: "Salads",
        preco: 22.0,
        descricao:
            "Salada italiana, feita com mussarela fresca, tomate e manjericão, temperada com sal e azeite",
        imagem: saladaCaprese,
    },
    {
        id: 28,
        nome: "Waldorf Salad",
        categoria: "Salads",
        preco: 40.0,
        descricao:
            "Criada em 1893 no Waldorf Hotel, essa salada leva uma fatia de maça e aipo, nozes cortadas, maionese",
        imagem: saladaWaldorf,
    },
    {
        id: 29,
        nome: "Greek Salad",
        categoria: "Salads",
        preco: 13.99,
        descricao:
            "Versão original da salada que leva tomate, pepino, pimentão, cebola roxa, pimenta-do-reino, orégano, azeite e queijo feta",
        imagem: saladaGrega,
    },
    {
        id: 30,
        nome: "Niçoise Salad",
        categoria: "Salads",
        preco: 22.99,
        descricao:
            "Salada tradicional da cidade de Nice, feita com tomate, ovos cozidos, azeitona niçoise, azeite e atum",
        imagem: saladaNicoise,
    },
];