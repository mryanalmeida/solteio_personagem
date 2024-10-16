/**
 * Jogo Personagens!
 * @author Marcos Ryan
 * @version 1.0
 * @link
 */

let faces = [
    { nome: "astra", img: "img/astra.png" },
    { nome: "breach", img: "img/breach.png" },
    { nome: "brimstone", img: "img/brimstone.png" },
    { nome: "chamber", img: "img/chamber.png" },
    { nome: "clove", img: "img/clove.png" },
    { nome: "cypher", img: "img/cypher.png" },
    { nome: "deadlock", img: "img/deadlock.png" },
    { nome: "fade", img: "img/fade.png" },
    { nome: "gekko", img: "img/gekko.png" },
    { nome: "harbor", img: "img/harbor.png" },
    { nome: "iso", img: "img/iso.png" },
    { nome: "jett", img: "img/jett.png" }, // Carta rara
    { nome: "kayo", img: "img/kayo.png" },
    { nome: "killjoy", img: "img/killjoy.png" },
    { nome: "neon", img: "img/neon.png" },
    { nome: "omen", img: "img/omen.png" },
    { nome: "phoenix", img: "img/phoenix.png" }, // Carta rara
    { nome: "raze", img: "img/raze.png" },
    { nome: "reyna", img: "img/reyna.png" }, // Carta rara
    { nome: "sage", img: "img/sage.png" },
    { nome: "skye", img: "img/skye.png" },
    { nome: "sova", img: "img/sova.png" },
    { nome: "viper", img: "img/viper.png" },
    { nome: "vyse", img: "img/vyse.png" },
    { nome: "yoru", img: "img/yoru.png" },
];

let raras = ["jett", "phoenix", "reyna"]; // Personagens raros

function sortear() {
    // Lógica principal do sorteio da carta.
    let index = Math.floor(Math.random() * faces.length);
    let face = faces[index];

    // Renderizar a imagem da carta.
    let cc = document.getElementById('centro');
    cc.innerHTML = `<img src="${face.img}" alt="${face.nome}" style="width: 100%; height: auto;">`;

    // Verificar se a carta sorteada é rara e adicionar a classe "rara".
    let cartaDiv = document.querySelector('.carta');
    let raroIndicador = document.getElementById('raro-indicador');

    if (raras.includes(face.nome)) {
        cartaDiv.classList.add('rara'); // Adicionar borda dourada
        raroIndicador.classList.remove('oculto'); // Exibir "Personagem RARO"
    } else {
        cartaDiv.classList.remove('rara'); // Remover borda dourada
        raroIndicador.classList.add('oculto'); // Ocultar "Personagem RARO"
    }

    // Remover textos dos cantos
    document.getElementById('supEsq').innerText = "";
    document.getElementById('infDir').innerText = "";
}
