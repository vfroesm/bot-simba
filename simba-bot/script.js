const arvoreDecisao = {
    "inicio": {
        "texto": "Olá! Eu sou o Simba, o assistente virtual do Distrito 4521. Como posso te ajudar hoje?",
        "opcoes": [
            { "texto": "📅 Próximos Eventos", "proximo_no": "eventos" },
            { "texto": "🔗 Links e Documentos Úteis", "proximo_no": "links" },
            { "texto": "❓ Dúvidas Frequentes", "proximo_no": "duvidas" }
        ]
    },
    "eventos": {
        "texto": "Como estamos marcando o fim do ano rotário, a nossa grande celebração final é a CODIRC! Os eventos da próxima gestão ainda serão organizados.<br><br>Qual evento quer conferir?",
        "opcoes": [
            { "texto": "1.1 CODIRC (Conferência Distrital)", "proximo_no": "info_codirc" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "info_codirc": {
        "texto": "A Conferência Distrital de Rotaract (CODIRC), com o tema <b>Chico Rei</b>, acontece em Ouro Preto entre 17 e 19 de julho!<br><br>As inscrições ainda estão abertas! Garanta sua vaga através do site oficial:<br>👉 <a href='http://eventos.rotaract4521.org.br' target='_blank' style='color:#d41367; font-weight:bold;'>eventos.rotaract4521.org.br</a>",
        "opcoes": [
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "links": {
        "texto": "O que você está precisando acessar?",
        "opcoes": [
            { "texto": "📁 Drive de Materiais e Linktree", "proximo_no": "links_drive" },
            { "texto": "📝 Formulários Bimestrais", "proximo_no": "links_formularios" },
            { "texto": "📱 Nossas Redes Sociais", "proximo_no": "links_redes" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "links_drive": {
        "texto": "Aqui estão os nossos links principais para você encontrar treinamentos, editais e materiais gerais:<br><br>📌 <a href='https://linktr.ee/rotaract4521' target='_blank'>Linktree do Distrito</a><br>📌 <a href='https://drive.google.com/drive/folders/1ArJrEuQn-vVqFFBcNI__7m0vteVIuofF' target='_blank'>Drive Oficial 4521</a>",
        "opcoes": [
            { "texto": "⬅️ Voltar aos Links", "proximo_no": "links" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "links_formularios": {
        "texto": "Estes são os relatórios enviados pelos clubes do distrito para controle, prestação de contas e projetos. Escolha o formulário que deseja preencher:<br><br>📊 <a href='https://docs.google.com/forms/d/e/1FAIpQLSdqsC7Q-W-sluVOLil2NQ3vrtDPAbUUN0SJRD_gJ9PwgO8xbQ/viewform' target='_blank'>Relatório de Secretaria</a><br>💰 <a href='https://docs.google.com/forms/d/e/1FAIpQLSc9wWnXnB3DaTdjTZsfBfN1PDlVqAvFmmkclEQo55nLmL2yOQ/viewform' target='_blank'>Relatório de Tesouraria</a><br>💡 <a href='https://docs.google.com/forms/d/e/1FAIpQLSfSgu10_eFSJNNeVu7Grxty50qJ75INw-cvLZoeqpN4R-0Vnw/viewform' target='_blank'>Relatório de Projetos</a>",
        "opcoes": [
            { "texto": "⬅️ Voltar aos Links", "proximo_no": "links" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "links_redes": {
        "texto": "Acompanhe tudo que acontece no distrito através dos nossos canais oficiais:<br><br>📸 <a href='https://instagram.com/rotaract4521' target='_blank'>Instagram @rotaract4521</a><br>📸 <a href='https://instagram.com/eventos.rotaract4521' target='_blank'>Instagram @eventos.rotaract4521</a><br>▶️ <a href='https://youtube.com/@Rotaract4521' target='_blank'>YouTube @Rotaract4521</a>",
        "opcoes": [
            { "texto": "⬅️ Voltar aos Links", "proximo_no": "links" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "duvidas": {
        "texto": "O conhecimento é a nossa melhor ferramenta! O que você gostaria de saber?",
        "opcoes": [
            { "texto": "3.1 O que é o Rotaract?", "proximo_no": "sobre_rotaract" },
            { "texto": "3.2 Como fundar um clube?", "proximo_no": "fundar_clube" },
            { "texto": "3.3 Onde vejo os projetos?", "proximo_no": "projetos_distrito" },
            { "texto": "3.4 Falar com Atendimento", "proximo_no": "contato" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "sobre_rotaract": {
        "texto": "O Rotaract é um programa global de jovens líderes, a partir de 18 anos, que se dedicam a causar mudanças positivas em suas comunidades através do servir.<br><br>🦁 E o nosso Distrito 4521 orgulhosamente é o maior distrito de Minas Gerais!",
        "opcoes": [
            { "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "fundar_clube": {
        "texto": "Para fundar um clube, você precisa reunir um grupo de pelo menos 10 pessoas interessadas e motivadas! Em seguida, basta entrar em contato com a gente para auxiliarmos nos trâmites oficiais e apadrinhamento.",
        "opcoes": [
            { "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "projetos_distrito": {
        "texto": "Todos os projetos maravilhosos desenvolvidos pelos clubes do Distrito 4521 podem ser encontrados nestes portais:<br><br>🌍 <a href='https://portal.rotaractbrasil.org.br/' target='_blank'>Portal Rotaract Brasil</a><br>⚙️ <a href='https://my.rotary.org/' target='_blank'>My Rotary</a>",
        "opcoes": [
            { "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    },
    "contato": {
        "texto": "Não encontrou o que procurava? Fique à vontade para mandar uma mensagem direta em nosso Instagram Oficial (@rotaract4521) ou envie um e-mail para:<br><br>✉️ <b>rotaract4521@gmail.com</b>",
        "opcoes": [
            { "texto": "⬅️ Voltar às Dúvidas", "proximo_no": "duvidas" },
            { "texto": "⬅️ Voltar ao Início", "proximo_no": "inicio" }
        ]
    }
};

function mostrarNo(idDoNo) {
    const noAtual = arvoreDecisao[idDoNo];
    if (!noAtual) return;

    const elementoTexto = document.getElementById("texto-simba");
    const caixaBotoes = document.getElementById("caixa-botoes");

    if (elementoTexto) {
        elementoTexto.innerHTML = noAtual.texto;
    }
    
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
    if (janela) {
        janela.classList.toggle("escondido");
    }
}

// Inicialização segura quando a página carrega
window.onload = function() {
    mostrarNo("inicio");
};