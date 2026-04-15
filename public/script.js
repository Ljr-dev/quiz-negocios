let current = 0;
let questions = [];

let profilePoints = {
  iniciante: 0,
  desorganizado: 0,
  travado: 0,
  pronto: 0
};

const profiles = {
  iniciante: {
    nome: "Início sem estratégia",
    diagnostico: "Você ainda não estruturou seu marketing e isso faz com que você perca oportunidades todos os dias."
  },
  desorganizado: {
    nome: "Crescimento desorganizado",
    diagnostico: "Você até tenta crescer, mas falta estratégia clara e consistência nas ações."
  },
  travado: {
    nome: "Negócio travado",
    diagnostico: "Você já investe, mas não está tendo retorno — provavelmente está perdendo dinheiro sem perceber."
  },
  pronto: {
    nome: "Pronto para escalar",
    diagnostico: "Seu negócio já tem base e potencial, mas falta uma estratégia certa para escalar de verdade."
  }
};

function getDor(profile){
  const dores = {
    iniciante: "- Não sei por onde começar no marketing\n- Não consigo atrair clientes de forma previsível",
    desorganizado: "- Faço ações mas sem consistência\n- Não tenho clareza do que realmente funciona",
    travado: "- Já investi dinheiro e não tive retorno\n- Sinto que estou fazendo algo errado mas não sei o que",
    pronto: "- Já tenho resultados, mas não consigo escalar\n- Quero crescer mais rápido e com previsibilidade"
  };
  return dores[profile];
}

async function start(){
  const res = await fetch("/quiz");
  questions = await res.json();
  loadQuestion();
}

function loadQuestion(){
  const q = questions[current];

  if(!q){
    finish();
    return;
  }

  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => answer(opt.type);
    optionsDiv.appendChild(btn);
  });
}

function answer(type){
  profilePoints[type]++;
  current++;
  loadQuestion();
}

function getProfile(){
  return Object.keys(profilePoints).reduce((a, b) =>
    profilePoints[a] > profilePoints[b] ? a : b
  );
}

function finish(){

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const profile = getProfile();
  const data = profiles[profile];

  document.getElementById("result-title").innerText = data.nome;
  document.getElementById("result-text").innerText = data.diagnostico;

  const numero = "5519982144043"; // COLOQUE SEU NÚMERO

  const mensagem = `Olá! Acabei de fazer o diagnóstico do meu negócio.

📊 Resultado: ${data.nome}

${data.diagnostico}

Hoje eu sinto que:
${getDor(profile)}

Queria entender melhor o que posso fazer pra destravar isso e crescer de forma mais consistente. Você pode me ajudar?`;

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  document.getElementById("cta").innerHTML = `
    <br><br>
    <a href="${link}" target="_blank">
      👉 Quero melhorar meu negócio
    </a>
  `;
}

start();