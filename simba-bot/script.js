const baseConhecimento = {
    "inicio": {
        "texto": "Olá! Eu sou o Simba, o assistente virtual do Distrito 4521. Como posso te ajudar hoje?",
        "opcoes": [
            { "texto": "📅 Próximos Eventos", "proximo_no": "eventos" },
            { "texto": "🔗 Links e Documentos", "proximo_no": "links" },
            { "texto": "🦁 Liderança e Dúvidas", "proximo_no": "duvidas" }
        ]
    },
    "eventos": {
        "texto": "Temos eventos importantes no calendário distrital. O que deseja consultar?",
        "opcoes": [
            { "texto": "1.1 CODIRC", "proximo_no": "info_codirc" },
            { "texto": "1.2 ADIRC", "proximo_no": "adirc" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "info_codirc": {
        "texto": "A Conferência Distrital (CODIRC), tema <b>Chico Rei</b>, acontece em Ouro Preto de 17 a 19 de julho!<br><br>👉 <a href='http://eventos.rotaract4521.org.br' target='_blank'>eventos.rotaract4521.org.br</a>",
        "opcoes": [{ "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }]
    },
    "adirc": {
        "texto": "A ADIRC é o treinamento para o novo ano rotário. A edição deste ano já aconteceu em BH! Veja as fotos no Drive:<br><br>👉 <a href='https://drive.google.com/drive/folders/1ArJrEuQn-vVqFFBcNI__7m0vteVIuofF' target='_blank'>Acessar Drive</a>",
        "opcoes": [{ "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }]
    },
    "links": {
        "texto": "O que você está precisando acessar?",
        "opcoes": [
            { "texto": "📁 Drive de Materiais", "proximo_no": "links_drive" },
            { "texto": "📝 Formulários", "proximo_no": "links_formularios" },
            { "texto": "📱 Nossas Redes", "proximo_no": "links_redes" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "duvidas": {
        "texto": "Escolha um tema para saber mais:",
        "opcoes": [
            { "texto": "❓ O que é o Rotaract?", "proximo_no": "sobre_rotaract" },
            { "texto": "👤 Liderança e RDR", "proximo_no": "lideranca" },
            { "texto": "🎨 Identidade Visual", "proximo_no": "comunicacao" },
            { "texto": "🌍 Projetos", "proximo_no": "projetos" },
            { "texto": "💰 Pagamentos/Taxas", "proximo_no": "pagamentos" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "sobre_rotaract": {
        "texto": "O Rotaract é um programa global de jovens líderes, a partir de 18 anos, que se dedicam a causar mudanças positivas em suas comunidades através do servir.<br><br>🦁 E o nosso Distrito 4521 orgulhosamente é o maior distrito de Minas Gerais!",
        "opcoes": [{ "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" }]
    },
    "lideranca": {
        "texto": "O RDR é o <b>Pedro Cazita</b> (João Monlevade). A Governadoria cuida da estratégia, suporte aos clubes e implementação das metas.",
        "opcoes": [{ "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" }]
    },
    "comunicacao": {
        "texto": "Use o <b>Brand Center</b>: <a href='https://brandcenter.rotary.org/pt-br/' target='_blank'>brandcenter.rotary.org</a>.<br><br><b>Cores:</b> Rotary Gold, Royal Blue, Azure, Sky Blue e Cranberry.",
        "opcoes": [{ "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" }]
    },
    "projetos": {
        "texto": "Consulte o nosso Drive Distrital ou o portal oficial <b>Rotary Showcase</b> para ver projetos realizados.",
        "opcoes": [{ "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" }]
    },
    "pagamentos": {
        "texto": "O dinheiro das taxas (quota distrital) financia treinamentos (ADIRC), comunicação, subsídios para projetos e manutenção do distrito.",
        "opcoes": [{ "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" }]
    },
    "links_drive": {
        "texto": "Acesse: <a href='https://linktr.ee/rotaract4521' target='_blank'>Linktree</a> ou o <a href='https://drive.google.com/drive/folders/1ArJrEuQn-vVqFFBcNI__7m0vteVIuofF' target='_blank'>Drive Oficial</a>.",
        "opcoes": [{ "texto": "⬅️ Voltar aos Links", "proximo_no": "links" }]
    },
    "links_formularios": {
        "texto": "Relatórios de Secretaria, Tesouraria e Projetos estão nos links do formulário Google do distrito.",
        "opcoes": [{ "texto": "⬅️ Voltar aos Links", "proximo_no": "links" }]
    },
    "links_redes": {
        "texto": "Instagram: @rotaract4521 e @eventos.rotaract4521. YouTube: @Rotaract4521.",
        "opcoes": [{ "texto": "⬅️ Voltar aos Links", "proximo_no": "links" }]
    }
};

const dadosTreinamentoIA = {
    "sobre_rotaract": ["rotaract", "programa", "significado", "maior distrito", "o que é", "idade"],
    "info_codirc": ["codirc", "inscrição", "ouro preto", "conferência", "ingresso"],
    "adirc": ["adirc", "assembleia", "treinamento", "fotos adirc", "data adirc"],
    "lideranca": ["rdr", "pedro cazita", "quem é o líder", "governadoria", "equipe distrital"],
    "comunicacao": ["manual", "marca", "cores", "logo", "brand center", "identidade"],
    "projetos": ["projetos", "showcase", "como fazer projeto", "onde ver projetos"],
    "pagamentos": ["dinheiro", "taxas", "quota", "pagamento", "boleto"],
    "links_drive": ["drive", "arquivos", "documentos", "linktree"],
    "links_formularios": ["relatório", "bimestral", "secretaria", "tesouraria", "formulario"],
    "links_redes": ["instagram", "youtube", "redes sociais"]
};

function mostrarNo(idDoNo) {
    const noAtual = baseConhecimento[idDoNo];
    if (!noAtual) return;
    const elementoTexto = document.getElementById("texto-simba");
    const caixaBotoes = document.getElementById("caixa-botoes");
    if (elementoTexto) { elementoTexto.innerHTML = noAtual.texto; }
    if (caixaBotoes) {
        caixaBotoes.innerHTML = "";
        noAtual.opcoes.forEach(opcao => {
            const b = document.createElement("button");
            b.innerText = opcao.texto;
            b.className = "botao-opcao";
            b.onclick = function() { mostrarNo(opcao.proximo_no); };
            caixaBotoes.appendChild(b);
        });
    }
}

function alternarChat() {
    const janela = document.getElementById("janela-chat");
    const icone = document.getElementById("icone-simba");
    janela.classList.toggle("escondido");
    icone.style.display = janela.classList.contains("escondido") ? "flex" : "none";
}

function processarBuscaTexto() {
    const input = document.getElementById("input-usuario");
    if (!input || input.value.trim() === "") return;
    const perguntaUsuario = input.value.toLowerCase().trim();
    input.value = "";
    
    // Lista de StopWords atualizada com "que", "é", "e" para evitar falsos positivos
    const stopWords = ["o", "a", "os", "as", "de", "da", "do", "para", "com", "em", "um", "uma", "me", "eu", "onde", "como", "achar", "encontrar", "saber", "quero", "qual", "que", "é", "e"];
    const tokensUsuario = perguntaUsuario.split(/\s+/).filter(palavra => !stopWords.includes(palavra));

    let melhorNo = null;
    let maiorPontuacao = 0;

    for (const noId in dadosTreinamentoIA) {
        let pontuacaoDoNo = 0;
        const frasesTreino = dadosTreinamentoIA[noId];
        frasesTreino.forEach(fraseTreino => {
            let correspondencias = 0;
            tokensUsuario.forEach(token => { if (fraseTreino.includes(token)) correspondencias++; });
            if (correspondencias > 0) pontuacaoDoNo += (correspondencias / tokensUsuario.length);
        });
        if (pontuacaoDoNo > maiorPontuacao) {
            maiorPontuacao = pontuacaoDoNo;
            melhorNo = noId;
        }
    }

    if (melhorNo && maiorPontuacao > 0.1) {
        mostrarNo(melhorNo);
    } else {
        document.getElementById("texto-simba").innerHTML = "Não encontrei isso. Tente palavras como <b>'Rotaract'</b>, <b>'ADIRC'</b> ou <b>'Taxas'</b>.";
    }
}

window.onload = function() { mostrarNo("inicio"); };
function verificarTecla(e) { if (e.key === "Enter") processarBuscaTexto(); }