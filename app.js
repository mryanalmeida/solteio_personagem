/**
 * Jogo Personagens!
 * @author Marcos Ryan
 * @version 1.0
 * @link https://github.com/emmanuel-lacerd4/uno
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
    { nome: "jett", img: "img/jett.png" },
    { nome: "kayo", img: "img/kayo.png" },
    { nome: "killjoy", img: "img/killjoy.png" },
    { nome: "neon", img: "img/neon.png" },
    { nome: "omen", img: "img/omen.png" },
    { nome: "phoenix", img: "img/phoenix.png" },
    { nome: "raze", img: "img/raze.png" },
    { nome: "reyna", img: "img/reyna.png" },
    { nome: "sage", img: "img/sage.png" },
    { nome: "skye", img: "img/skye.png" },
    { nome: "sova", img: "img/sova.png" },
    { nome: "viper", img: "img/viper.png" },
    { nome: "vyse", img: "img/vyse.png" },
    { nome: "yoru", img: "img/yoru.png" },
]

function sortear() {
    // Lógica principal do sorteio da carta.
    let index = Math.floor(Math.random() * faces.length);
    let face = faces[index];

    // Renderizar a imagem da carta.
    let cc = document.getElementById('centro');
    cc.innerHTML = `<img src="${face.img}" alt="${face.nome}" style="width: 100%; height: auto;">`; // Adiciona a imagem

    // Remover textos dos cantos
    document.getElementById('supEsq').innerText = ""; // Limpa o canto superior esquerdo
    document.getElementById('infDir').innerText = ""; // Limpa o canto inferior direito
}
