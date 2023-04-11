const palavras = [
    "exceto",
    "mister",
    "vereda",
    "apogeu",
    "utopia",
    "escopo",
    "casual",
    "anseio",
    "hostil",
    "pressa",
    "legado",
    "alheio",
    "gentil",
    "nocivo",
    "infame",
    "adorno",
    "aferir",
    "astuto",
    "solene",
    "limiar",
    "julgar",
    "formal",
    "ensejo",
    "eficaz",
    "ocioso",
    "outrem",
    "difuso",
    "embora",
    "alento",
    "dispor",
    "escusa",
    "perene",
    "abster",
    "nuance",
    "acento",
    "objeto",
    "isento",
    "acesso",
    "axioma",
    "sisudo",
    "mazela",
    "eximir",
    "buscar",
    "receio",
    "remoto",
    "vulgar",
    "avidez",
    "penhor",
    "defina",
    "asseio",
    "ciente",
    "insano",
    "sempre",
    "alocar",
    "linear",
    "diante",
    "prover",
    "vedado",
    "esmero",
    "quando",
    "rancor",
    "esteio",
    "lograr",
    "faceta",
    "rotina",
    "altivo",
    "danado",
    "enxuto",
    "ironia",
    "formos",
    "aderir",
    "grande",
    "apatia",
    "aludir",
    "abjeto",
    "inerte",
    "perfil",
    "inveja",
    "credor",
    "adepto",
    "herege",
    "coagir",
    "cessar",
    "agonia",
    "emanar",
    "avante",
    "nativo",
    "melhor",
    "pensar",
    "enigma",
    "lacuna",
    "franco",
    "venham",
    "arguir",
    "brando",
    "decoro",
    "servir",
    "lavrar",
    "sereno",
    "limite",
    "arauto",
    "tirano",
    "estima",
    "inibir",
    "engodo",
    "beleza",
    "adorar",
    "pessoa",
    "viagem",
    "encher",
    "conter",
    "clamar",
    "estado",
    "teoria",
    "sovina",
    "proeza",
    "trazer",
    "colher",
    "alarde",
    "dotado",
    "deixar",
    "emitir",
    "exalar",
    "devido",
    "vermos",
    "pleito",
    "apenas",
    "jamais",
    "prisma",
    "esnobe",
    "piegas",
    "sentir",
    "frisar",
    "forjar",
    "cismar",
    "dilema",
    "ajudar",
    "inepto",
    "frugal",
    "suprir",
    "quanto",
    "acordo",
    "senhor",
    "polido",
    "semear",
    "tornar",
    "triste",
    "deriva",
    "pseudo",
    "sabido",
    "talvez",
    "abismo",
    "divino",
    "sermos",
    "galgar",
    "patife",
    "condiz"
];

const baseDeDados = [];

palavras.forEach((elemento) => {
    baseDeDados.push(elemento.split(""));
});

let palavraSorteada = baseDeDados[Math.floor(Math.random() * baseDeDados.length)];

// #################################################################################

let palavraAuxiliar = [];
for (let i = 0; i < palavraSorteada.length; i++) {
    palavraAuxiliar.push(" ");
}

const frm = document.querySelector("form");

const letra1 = document.getElementById("letra1-palavra");
const letra2 = document.getElementById("letra2-palavra");
const letra3 = document.getElementById("letra3-palavra");
const letra4 = document.getElementById("letra4-palavra");
const letra5 = document.getElementById("letra5-palavra");
const letra6 = document.getElementById("letra6-palavra");

const outVidas = document.getElementById("outVidas");
const outLetrasTentadas = document.getElementById("outLetrasTentadas");

const textOutputDerrota = document.getElementById("textOutputLimiteErros");
const palavraOutput = document.getElementById("palavraOutput");
const textOutputVitoria = document.getElementById("textOutputAcerto");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");

let letrasTentadas = [];
let letrasTentadasFormatadoHTML = [];
var maxErros = 6;
var erros = 0;

function mostraLetrasDaPalavra(lista) {
    letra1.innerText = lista[0].toUpperCase();
    letra2.innerText = lista[1].toUpperCase();
    letra3.innerText = lista[2].toUpperCase();
    letra4.innerText = lista[3].toUpperCase();
    letra5.innerText = lista[4].toUpperCase();
    letra6.innerText = lista[5].toUpperCase();
    if (lista[0] != " ") {
        letra1.classList.remove("negativo");
        letra1.classList.add("acerto");
    }
    if (lista[1] != " ") {
        letra2.classList.remove("negativo");
        letra2.classList.add("acerto");
    }
    if (lista[2] != " ") {
        letra3.classList.remove("negativo");
        letra3.classList.add("acerto");
    }
    if (lista[3] != " ") {
        letra4.classList.remove("negativo");
        letra4.classList.add("acerto");
    }
    if (lista[4] != " ") {
        letra5.classList.remove("negativo");
        letra5.classList.add("acerto");
    }
    if (lista[5] != " ") {
        letra6.classList.remove("negativo");
        letra6.classList.add("acerto");
    }
}

function mostraVidas() {
    let textoAuxiliar = ""
    for (let i = 0; i < (maxErros - erros); i++) {
        textoAuxiliar += '<img src="https://cdn-icons-png.flaticon.com/512/3756/3756484.png" alt="full hearth">';
    }
    for (let i = 0; i < (erros); i++) {
        textoAuxiliar += '<img src="https://cdn-icons-png.flaticon.com/512/3395/3395509.png" alt="empty hearth">';
    }
    outVidas.innerHTML = textoAuxiliar;
}

function mostraLetrasTentadas(lista) {
    outLetrasTentadas.innerHTML = lista.join(" ").toUpperCase();
}

mostraLetrasDaPalavra(palavraAuxiliar);
mostraVidas();

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let letraTentada = frm.userInput.value.toLowerCase();

    if (letrasTentadas.includes(letraTentada)) {
        alert("Essa lentra já foi tentada, digite outra!");
    } else if ((letraTentada.length != 1) || !isNaN(letraTentada)) {
        alert("Entrada inválida. Digite novamente.");
    } else {
        let verificaErro = true;
        for (let i = 0; i < palavraSorteada.length; i++) {
            if (palavraSorteada[i] === letraTentada) {
                palavraAuxiliar[i] = letraTentada;
                verificaErro = false;
            }
        }

        letrasTentadas.push(letraTentada);

        if (verificaErro) {
            erros++;
            letrasTentadasFormatadoHTML.push(`<span style = "color: #e63946;">${letraTentada}</span>`);
            if (erros === maxErros) {
                textOutputDerrota.innerText = `Suas chances acabaram. A palavra era:`;
                palavraOutput.innerText = `${palavraSorteada.join("").toUpperCase()}`
                frm.btnTentarLetra.disabled = true;
                frm.userInput.disabled = true;
                btnJogarNovamente.className = "visivel"
            }
        } else {
            letrasTentadasFormatadoHTML.push(`<span style = "color: #283618;">${letraTentada}</span>`);
            if (!palavraAuxiliar.includes(" ")) {
                textOutputVitoria.innerText = `PARABÉNS! Você acertou a palavra!`;
                frm.btnTentarLetra.disabled = true;
                frm.userInput.disabled = true;
                btnJogarNovamente.className = "visivel"
            }
        }
        mostraLetrasDaPalavra(palavraAuxiliar);
        mostraVidas();
        mostraLetrasTentadas(letrasTentadasFormatadoHTML);
    }
    frm.userInput.value = "";
    frm.userInput.focus();
});

btnJogarNovamente.addEventListener("click", () => {
    // limpa o array da palavra auxiliar
    palavraAuxiliar.length = 0;
    palavraAuxiliar = []
    // resorteia uma palavra
    palavraSorteada = baseDeDados[Math.floor(Math.random() * baseDeDados.length)];
    // adiciona os espaços em branco na palavra auxiliar
    for (let i = 0; i < palavraSorteada.length; i++) {
        palavraAuxiliar.push(" ");
    }
    mostraLetrasDaPalavra(palavraAuxiliar);

    // limpa array de letras tentadas
    letrasTentadas.length = 0;
    letrasTentadas = [];
    letrasTentadasFormatadoHTML.length = 0;
    letrasTentadasFormatadoHTML = [];
    mostraLetrasTentadas(letrasTentadasFormatadoHTML);

    // limpa os campo de saida de texto
    textOutputDerrota.innerText = "";
    palavraOutput.innerText = "";
    textOutputVitoria.innerText = "";

    // reseta as vidas para 6
    erros = 0;
    mostraVidas();

    // volta os box das letras para a classe inicial (negativo)
    letra1.classList.add("negativo");
    letra1.classList.remove("acerto");

    letra2.classList.add("negativo");
    letra2.classList.remove("acerto");

    letra3.classList.add("negativo");
    letra3.classList.remove("acerto");

    letra4.classList.add("negativo");
    letra4.classList.remove("acerto");

    letra5.classList.add("negativo");
    letra5.classList.remove("acerto");

    letra6.classList.add("negativo");
    letra6.classList.remove("acerto");

    // reativa o input de texto e o botão para tentar a letra
    frm.btnTentarLetra.disabled = false;
    frm.userInput.disabled = false;

    // oculta o botão jogar novamente
    btnJogarNovamente.className = "oculto"

    // limpa o input de texto e o focaliza para facilitar a escrita
    frm.userInput.value = "";
    frm.userInput.focus();
});