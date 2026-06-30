const btnCoracao = document.querySelector(".btn-coracao");
const btnLike = document.querySelector(".btn-like");
const btnDeslike = document.querySelector(".btn-deslike");

let coracoes = 0;
let likes = 0;
let deslikes = 0;

btnCoracao.addEventListener("click", () => {
    coracoes++;
    btnCoracao.innerHTML = `❤️ Favoritar (${coracoes})`;
});

btnLike.addEventListener("click", () => {
    likes++;
    btnLike.innerHTML = `👍 Like (${likes})`;
});

btnDeslike.addEventListener("click", () => {
    deslikes++;
    btnDeslike.innerHTML = `👎 Deslike (${deslikes})`;
});
