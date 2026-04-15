const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/quiz", (req, res) => {

  const quiz = [
    {
      question: "Você investe em marketing hoje?",
      options: [
        { text: "Não invisto", type: "iniciante" },
        { text: "Às vezes", type: "desorganizado" },
        { text: "Invisto mas não dá retorno", type: "travado" },
        { text: "Invisto e funciona", type: "pronto" }
      ]
    },
    {
      question: "Você sabe quanto custa um cliente?",
      options: [
        { text: "Não faço ideia", type: "iniciante" },
        { text: "Mais ou menos", type: "desorganizado" },
        { text: "Sei mas não controlo", type: "travado" },
        { text: "Sei exatamente", type: "pronto" }
      ]
    },
    {
      question: "Você já fez tráfego pago?",
      options: [
        { text: "Nunca", type: "iniciante" },
        { text: "Tentei mas parei", type: "desorganizado" },
        { text: "Faço mas não escala", type: "travado" },
        { text: "Faço e funciona", type: "pronto" }
      ]
    },
    {
      question: "Você tem funil de vendas?",
      options: [
        { text: "Não", type: "iniciante" },
        { text: "Improvisado", type: "desorganizado" },
        { text: "Tenho mas não converte", type: "travado" },
        { text: "Tenho e converte", type: "pronto" }
      ]
    },
    {
      question: "Seu negócio cresce todo mês?",
      options: [
        { text: "Não", type: "iniciante" },
        { text: "Oscila", type: "desorganizado" },
        { text: "Cresce pouco", type: "travado" },
        { text: "Cresce bem", type: "pronto" }
      ]
    }
  ];

  res.json(quiz);
});

app.listen(3000, () => {
  console.log("🚀 Rodando em http://localhost:3000");
});const express = require("express");
const app = express();

// middlewares
app.use(express.static("public"));
app.use(express.json());

// rota principal (evita erro 404 na raiz)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// rota do quiz
app.get("/quiz", (req, res) => {

  const quiz = [
    {
      question: "Você investe em marketing hoje?",
      options: [
        { text: "Não invisto", type: "iniciante" },
        { text: "Às vezes", type: "desorganizado" },
        { text: "Invisto mas não dá retorno", type: "travado" },
        { text: "Invisto e funciona", type: "pronto" }
      ]
    },
    {
      question: "Você sabe quanto custa um cliente?",
      options: [
        { text: "Não faço ideia", type: "iniciante" },
        { text: "Mais ou menos", type: "desorganizado" },
        { text: "Sei mas não controlo", type: "travado" },
        { text: "Sei exatamente", type: "pronto" }
      ]
    },
    {
      question: "Você já fez tráfego pago?",
      options: [
        { text: "Nunca", type: "iniciante" },
        { text: "Tentei mas parei", type: "desorganizado" },
        { text: "Faço mas não escala", type: "travado" },
        { text: "Faço e funciona", type: "pronto" }
      ]
    },
    {
      question: "Você tem funil de vendas?",
      options: [
        { text: "Não", type: "iniciante" },
        { text: "Improvisado", type: "desorganizado" },
        { text: "Tenho mas não converte", type: "travado" },
        { text: "Tenho e converte", type: "pronto" }
      ]
    },
    {
      question: "Seu negócio cresce todo mês?",
      options: [
        { text: "Não", type: "iniciante" },
        { text: "Oscila", type: "desorganizado" },
        { text: "Cresce pouco", type: "travado" },
        { text: "Cresce bem", type: "pronto" }
      ]
    }
  ];

  res.json(quiz);
});

// 🔥 PORTA DINÂMICA (OBRIGATÓRIO NO RENDER)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Servidor rodando na porta " + PORT);
});