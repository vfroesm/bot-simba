// =========================================================================
// PROJETO: ASSISTENTE VIRTUAL "GIGANTE" - DISTRITO 4521 (VERSÃO TURBO)
// =========================================================================

// 1. BASE DE CONHECIMENTO EXPANDIDA (MAIS PALAVRAS-CHAVE = MAIS INTELIGÊNCIA)
const baseConhecimento = {
    "saudacao": {
        "palavrasChave": ["oi", "ola", "bom dia", "boa tarde", "boa noite", "ajuda", "cumprimento", "hey", "testando", "teste"],
        "resposta": "Olá! Que ótimo falar com você. Eu sou o <strong>Gigante</strong>, o assistente virtual do Distrito 4521. 🦁<br><br>Você pode digitar sua dúvida a qualquer momento ou clicar em um dos atalhos abaixo:"
    },
    "rotaract": {
        "palavrasChave": ["o que e rotaract", "rotaract", "sobre o rotaract", "clube", "programa", "jovens", "membros", "associados"],
        "resposta": "O <strong>Rotaract</strong> é um programa do Rotary International que une jovens a partir de 18 anos para desenvolver liderança, realizar ações humanitárias e promover a paz através do serviço comunitário global!"
    },
    "rotary": {
        "palavrasChave": ["rotary", "international", "rotarianos", "rede", "fundacao", "padrinho", "patrocinador"],
        "resposta": "O <strong>Rotary</strong> é uma rede global de líderes comunitários, amigos e vizinhos que se unem para causar mudanças positivas e duradouras em suas comunidades e pelo mundo inteiro."
    },
    "rdr": {
        "palavrasChave": ["rdr", "representante distrital", "lider do distrito", "quem manda", "chefe", "comandando", "quem e o rdr", "liderança distrital"],
        "resposta": "O Representante Distrital de Rotaract (<strong>RDR</strong>) da nossa gestão é o(a) <strong>Pedro Cazita</strong>! Ele(a) é a liderança máxima do nosso distrito, responsável por guiar os clubes, alinhar as metas e representar o 4521 perfeitamente."
    },
    "codirc": {
        "palavrasChave": ["codirc", "conferencia", "ouro preto", "chico rei", "inscricao", "evento", "quando", "lote", "ingressos", "festa"],
        "resposta": "A <strong>CODIRC</strong> (Conferência Distrital de Rotaract Clubs) deste ano será realizada na cidade histórica de Ouro Preto! É o maior evento do nosso distrito.<br><br>Garanta a sua inscrição acessando o nosso site oficial: <br>🎟️ <a href='https://eventos.rotaract4521.org.br/' target='_blank'>Site de Eventos - CODIRC</a>"
    },
    "adirc": {
        "palavrasChave": ["adirc", "assembleia", "fotos da adirc", "treinamento", "passou", "aconteceu", "fotos do evento"],
        "resposta": "A <strong>ADIRC</strong> (Assembleia Distrital de Rotaract Clubs) já aconteceu e foi um grande sucesso!<br><br>Para relembrar os momentos, conferir os treinamentos e ver a cobertura de fotos, acesse o nosso drive: <br>📸 <a href='https://drive.google.com/drive/folders/1ArJrEuQn-vVqFFBcNI__7m0vteVIuofF' target='_blank'>Fotos e Arquivos ADIRC</a>"
    },
    "links": {
        "palavrasChave": ["link", "drive", "documentos", "manual", "arquivos", "acesso", "linktree", "materiais", "pasta", "pdf", "identidade visual", "logo"],
        "resposta": "Todos os nossos manuais de cargo, documentos oficiais e materiais de identidade visual estão centralizados no Drive Oficial. Você também encontra atalhos úteis no nosso Linktree:<br><br>📂 <a href='https://drive.google.com/drive/folders/1ArJrEuQn-vVqFFBcNI__7m0vteVIuofF' target='_blank'>Drive Distrital Completo</a><br>🔗 <a href='https://linktr.ee/rotaract4521' target='_blank'>Nossos Links Úteis (Linktree)</a>"
    },
    "redes": {
        "palavrasChave": ["instagram", "youtube", "linkedin", "redes", "sociais", "seguir", "perfil", "face", "canal", "videos"],
        "resposta": "Acompanhe todos os projetos, avisos e novidades do Distrito 4521 pelas nossas redes oficiais:<br><br>📱 <a href='https://www.instagram.com/rotaract4521/' target='_blank'>Instagram (@rotaract4521)</a><br>▶️ <a href='https://www.youtube.com/@Rotaract4521' target='_blank'>YouTube</a><br>💼 <a href='https://www.linkedin.com/company/rotaract4521/' target='_blank'>LinkedIn</a>"
    },
    "abreviacoes": {
        "palavrasChave": ["dqa", "sigla", "significado", "abreviacao", "siglas", "o que significa"],
        "resposta": "No ecossistema rotário usamos muitas siglas! <br><br>• <strong>RDR:</strong> Representante Distrital de Rotaract (líder máximo do distrito).<br>• <strong>DQA:</strong> Desenvolvimento do Quadro Associativo (comitê focado em expandir e engajar os membros dos clubes)."
    },
    "taxas": {
        "palavrasChave": ["taxa", "distrital", "pagamento", "tesouraria", "dinheiro", "valores", "pagar", "custo", "boleto", "quanto custa"],
        "resposta": "As <strong>taxas distritais</strong> são fundamentais para manter os projetos e eventos do nosso distrito ativos. Os valores exatos e prazos de pagamento são enviados pela nossa equipe financeira diretamente aos tesoureiros de cada clube."
    },
    "ajuda_humana": {
        "resposta": "Hum, eu ainda não tenho essa informação exata na minha base de dados atual. 😕<br><br>Mas não se preocupe! Envie sua dúvida diretamente para a nossa secretaria e a equipe vai te responder rapidinho:<br>✉️ <a href='mailto:secretaria@rotaract4521.org.br'>secretaria@rotaract4521.org.br</a>"
    }
};

// 2. MAPEAMENTO DE ELEMENTOS DO DOM
const chatIcon = document.getElementById("chat-icon");
const chatContainer = document.getElementById("chat-container");
const closeChatBtn = document.getElementById("close-chat");
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

let chatIniciado = false;

// 3. CONTROLE DE ABERTURA E FECHAMENTO
chatIcon.addEventListener("click", () => {
    chatContainer.style.display = "flex";
    chatIcon.style.display = "none";
    if (!chatIniciado) {
        mostrarMensagemInicial();
        chatIniciado = true;
    }
});

closeChatBtn.addEventListener("click", () => {
    chatContainer.style.display = "none";
    chatIcon.style.display = "flex"; 
});

// 4. ENVIO DE MENSAGENS
sendBtn.addEventListener("click", processarMensagemUsuario);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") processarMensagemUsuario();
});

function processarMensagemUsuario() {
    const textoDigitado = userInput.value.trim();
    if (textoDigitado === "") return;

    adicionarBolhaMensagem("user", textoDigitado);
    userInput.value = "";

    exibirIndicadorDigitando();

    setTimeout(() => {
        removerIndicadorDigitando();
        const respostaFinal = calcularMelhorResposta(textoDigitado);
        adicionarBolhaMensagem("assistant", respostaFinal);
        adicionarBotoesAtalho();
    }, 1200);
}

// 5. NOVO ALGORITMO DE BUSCA INTELIGENTE (COINCIDÊNCIA DE SUBSTRINGS E CONTEXTO)
function calcularMelhorResposta(texto) {
    // Normaliza o texto removendo acentos e caracteres especiais
    const textoLimpo = texto.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let melhorTopico = null;
    let maiorPontuacao = 0;

    for (const topico in baseConhecimento) {
        if (topico === "ajuda_humana" || topico === "saudacao") continue;

        let pontuacaoAtual = 0;
        const chaves = baseConhecimento[topico].palavrasChave;

        chaves.forEach(chave => {
            // SE a frase digitada contiver a palavra-chave ou vice-versa, pontua o tópico
            if (textoLimpo.includes(chave) || chave.includes(textoLimpo)) {
                pontuacaoAtual += 2; 
            }
        });

        if (pontuacaoAtual > maiorPontuacao) {
            maiorPontuacao = pontuacaoAtual;
            melhorTopico = topico;
        }
    }

    if (maiorPontuacao > 0 && melhorTopico) {
        return baseConhecimento[melhorTopico].resposta;
    } else {
        // Fallback de segurança para saudações
        const saudaChaves = baseConhecimento["saudacao"].palavrasChave;
        let isSaudacao = false;
        saudaChaves.forEach(chave => {
            if (textoLimpo.includes(chave)) isSaudacao = true;
        });

        return isSaudacao ? baseConhecimento["saudacao"].resposta : baseConhecimento["ajuda_humana"].resposta;
    }
}

// 6. FUNÇÕES DE INTERFACE
function mostrarMensagemInicial() {
    adicionarBolhaMensagem("assistant", baseConhecimento["saudacao"].resposta);
    adicionarBotoesAtalho();
}

function adicionarBolhaMensagem(remetente, texto) {
    const divObjeto = document.createElement("div");
    divObjeto.classList.add("message", remetente);
    divObjeto.innerHTML = texto; 
    chatMessages.appendChild(divObjeto);
    scrollParaOFinal();
}

function adicionarBotoesAtalho() {
    const containersAntigos = document.querySelectorAll(".shortcut-container");
    containersAntigos.forEach(c => c.remove());

    const botonsContainer = document.createElement("div");
    botonsContainer.classList.add("shortcut-container");
    
    const botoes = [
        { texto: "Inscrição CODIRC", chave: "codirc" },
        { texto: "Fotos ADIRC", chave: "adirc" },
        { texto: "Quem é o RDR?", chave: "rdr" },
        { texto: "Drive e Documentos", chave: "links" }
    ];
    
    botoes.forEach(botao => {
        const btn = document.createElement("button");
        btn.classList.add("shortcut-btn");
        btn.innerText = Math.trunc ? botao.texto : botao.texto; // Tratamento genérico de renderização
        
        btn.addEventListener("click", () => {
            adicionarBolhaMensagem("user", botao.texto);
            exibirIndicadorDigitando();
            
            setTimeout(() => {
                removerIndicadorDigitando();
                adicionarBolhaMensagem("assistant", baseConhecimento[botao.chave].resposta);
                adicionarBotoesAtalho();
            }, 1200);
        });
        botonsContainer.appendChild(btn);
    });
    
    chatMessages.appendChild(botonsContainer);
    scrollParaOFinal();
}

function exibirIndicadorDigitando() {
    const divDigitando = document.createElement("div");
    divDigitando.id = "typing-indicator";
    divDigitando.classList.add("message", "assistant", "typing");
    divDigitando.innerText = "Gigante está digitando...";
    chatMessages.appendChild(divDigitando);
    scrollParaOFinal();
}

function removerIndicadorDigitando() {
    const indicador = document.getElementById("typing-indicator");
    if (indicador) indicador.remove();
}

function scrollParaOFinal() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}