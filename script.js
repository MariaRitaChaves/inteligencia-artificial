const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você acorda e percebe que dormiu pouco por ficar no celular. O que faz?",
    alternativas: [
      {
        texto: "Levanto mesmo cansado(a) e sigo o dia.",
        afirmacao: "Começou o dia mais cansado(a), e percebeu que o sono afeta muito sua disposição."
      },
      {
        texto: "Decido dormir mais cedo nas próximas noites.",
        afirmacao: "Aprendeu que o sono é tão importante quanto alimentação e exercício físico."
      }
    ]
  },
  {
    enunciado: "No café da manhã, sente fome. O que escolhe?",
    alternativas: [
      {
        texto: "Salgadinho e refrigerante da cantina.",
        afirmacao: "Sentiu fome logo depois e percebeu que escolhas rápidas nem sempre sustentam."
      },
      {
        texto: "Fruta ou sanduíche natural com água ou suco.",
        afirmacao: "Se alimentou bem e teve mais energia e foco para o dia."
      }
    ]
  },
  {
    enunciado: "Durante o intervalo escolar, seus colegas estão no celular. Você decide...",
    alternativas: [
      {
        texto: "Ficar no celular também.",
        afirmacao: "Ficou parado e percebeu que seu corpo precisa de movimento."
      },
      {
        texto: "Dar uma volta ou se movimentar um pouco.",
        afirmacao: "Sentiu-se mais disposto e notou os benefícios do movimento."
      }
    ]
  },
  {
    enunciado: "Após as aulas, você pode...",
    alternativas: [
      {
        texto: "Ficar deitado(a) no sofá o dia todo.",
        afirmacao: "Percebeu que o sedentarismo te deixa mais cansado e sem energia."
      },
      {
        texto: "Praticar alguma atividade física.",
        afirmacao: "Sentiu mais disposição e menos estresse após o exercício."
      }
    ]
  },
  {
    enunciado: "À noite, você está ansioso(a). O que faz?",
    alternativas: [
      {
        texto: "Assiste vídeos ou joga até tarde.",
        afirmacao: "Isso distrai, mas te deixa mais cansado no dia seguinte."
      },
      {
        texto: "Faz algo relaxante, como meditar ou conversar.",
        afirmacao: "Sentiu mais leveza e dormiu melhor."
      }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";

  perguntaAtual.alternativas.forEach(alternativa => {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.addEventListener("click", () => {
      historiaFinal += alternativa.afirmacao + " ";
      atual++;
      mostraPergunta();
    });
    caixaAlternativas.appendChild(botao);
  });
}

function mostraResultado() {
  caixaPerguntas.textContent = "No futuro...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.innerHTML = "";
}

mostraPergunta();
