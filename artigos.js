/*
  ARTIGOS DA BOANERGES
  Para publicar um artigo, copie um bloco { ... } abaixo, cole no topo da lista e edite.
  - slug: identificador curto, sem espaços nem acentos (vira o link: Artigo.dc.html?a=slug)
  - data: "AAAA-MM-DD"
  - corpo: lista de blocos, em ordem:
      "Texto"                         → parágrafo
      { titulo: "..." }               → subtítulo
      { citacao: "..." }              → citação em destaque
      { imagem: "assets/x.jpg", legenda: "..." } → imagem (legenda opcional)
      { imagem: "...", legenda: "...", tamanho: "pequena" } → imagem menor, centralizada (bom p/ capas de livro e retratos)
  - rascunho: true → esconde o artigo do site
*/
window.BOANERGES_ARTIGOS = [
  {
    slug: "a-sombra-ofuscada",
    titulo: "A Sombra Ofuscada",
    resumo: "Minhas reflexões sobre a Obra Clássica de Tanizaki",
    data: "2026-07-05",
    autor: "Israel Subira",
    corpo: [
      "Em fuga das inconveniências os ocidentais não enxergaram a beleza que existia em alguma delas. Esse é o coração do clássico, que discorre em grande parte porque o Japão é como é.",
      { imagem: "assets/artigos/em-louvor-da-sombra.png", legenda: "Em louvor da sombra, de Jun’ichirō Tanizaki (Penguin Companhia).", tamanho: "pequena" },
      "Tanizaki se pergunta como seria o desenvolvimento tecnológico se o mesmo pudesse ser isolado culturalmente, ao invés de importado de diferentes países que avançaram suas tecnologias. Quando isso acontece, é quase inevitável que a roupagem cultural dessa tecnologia seja importada também. Mas se ela fosse desenvolvida sem “emprestar” de outras culturas seriam diferentes. Como brasileiro, não pude deixar de pensar em Drummond ou em Araripe. Países estrangeiros rapidamente \"emprestaram” desses avanços e pouco mencionam o Brasil.",
      "Tanizaki passou pelo choque de perceber a dificuldade de se acomodar a beleza tradicional do Japão com a crescente demanda pela conveniência. E de repente, hotéis e restaurantes estavam precisando implementar recursos como luzes elétricas e ventiladores em ambientes que não haviam sido desenhados para isso.",
      { imagem: "assets/artigos/tanizaki.png", legenda: "Jun’ichirō Tanizaki.", tamanho: "pequena" },
      "Talvez minha mente seja ocidental (ou moderna) demais pra me apegar a beleza rústica de “aliviar o ventre” num vaso de madeira, no escuro ou olhando pro mato. Mas eu certamente consigo perceber a beleza de um jantar à luz de velas. Enquanto eu mesmo aprecio a conveniência de um ar condicionado, também aprecio a resiliência climática que se desenvolve sem o mesmo (Mas vivo com ar condicionado).",
      { imagem: "assets/artigos/banheiro-nishigawara.png", legenda: "Banheiro público no Parque Nishigawara, em Ibaraki. Foto: garycycles, CC BY 2.0." },
      "Mas o maior contraste entre ocidente e oriente que percebi na leitura, foi que parte do mundo se livrou de coisas inconvenientes sem olhar pra trás. Enquanto o japão se apegou a beleza que existia nas mesmas. Sem necessariamente demonizar a conveniência em si, mas a maneira como ela foi disruptiva no desenvolvimento cultural. Até porque todo mundo aprecia algum tipo de progresso ou conveniência, enquanto certamente rejeita outros (como o próprio autor que se rendeu a modernidades em seu próprio lar).",
      { imagem: "assets/artigos/ceramica-na-sombra.png", legenda: "", tamanho: "pequena" },
      "O ponto, é que nem tudo na vida é pra ser conveniente, talvez IA seja um bom exemplo disso, buscamos conveniência ao custo de beleza. Numa tentativa de otimizar tudo estão colocando inteligência artificial até em microondas e outros utensílios domésticos. Mas ao mesmo tempo, tudo parece ter muito menos “alma” do que antigamente.",
      "O próprio microondas já é algo a ser discutido, Não consigo convencer minha esposa a usar um de jeito nenhum, ela insiste sempre em sua frigideira de ferro. Eu as vezes queria fugir da inconveniência da limpeza, mas um dia descobrimos no médico que o ferro da Priscilla estava altíssimo, em grande parte devido ao seu uso da bendita frigideira. Sem falar que uma frigideira de ferro é muito mais bonita do que uma caixinha de alumínio (ou branco hospitalar), especialmente quando elas tem aquela vibe mineira.",
      "Mas assim é o ocidente, grandes estacionamentos pouco arborizados, centrais de ar condicionado constantemente “cantando” porque o dia está quente demais, cabos por toda parte e robôs se alimentando das minhas peculiaridades pra me inundar com anúncios e me vender mais conveniência. Talvez o Tanizaki tenha razão.",
      "Pense na nova ferrari elétrica que parece um iphone. Bons e velhos italianos quase derrubaram seus espressos no chão. Algumas coisas já encontraram sua melhor versão no passado, e merecem ser conservadas. Enquanto veículos híbridos ou elétricos tem sua proposta interessante, nada bate uma Ford f100 de 1972, de cabine única, na minha opinião. Por que? Por que hoje se pensa em conveniência, mas antigamente se pensava em beleza.",
      "O que já me leva pra mais um ponto, o carro não era uma fuga da inconveniência em si? Todo crítico de conveniências as critica convenientemente. Não deveríamos então estar andando de cavalo por aí? Todo progresso tecnológico terá seus lovers e haters. O progresso é inevitável, a resistência é opcional.",
      "Você é (mais ou menos) livre pra andar de cavalo. Pra não usar IA e escrever texto com errinhos, sem trações ou tríades (e quem gostava de usá-los antes agora tem medo, como eu que acabei de os substituir por parêntesis nesse momento) E também pode optar por rusticidade quando outros focam em tecnologia.",
      "Não quero que IA escreva por mim, nem que lave minhas louças, mas não me oponho a ela quando integrada a um aplicativo de rastrear calorias e macros, o que facilita bastante a vida. Seria eu um hipócrita então? Seletivo, no mínimo. Não sou contra o progresso tecnológico, mas sou contra a desistência da arte.",
      "Outra coisa, Tanizaki disse que ouviu idosos se queixando que cuidaram de seus pais quando eles eram mais velhos, mas agora que eles mesmos haviam alcançado idade avançada, a nova geração via idosos como “imundos”.",
      "Isso me doeu, outro dia ouvi um senhor se queixando durante o almoço, embora num tom de brincadeira: “nunca comi a maior coxa de frango” ele procedeu a explicar que quando era criança, a maior coxa pertencia ao pai, e quando adulto, era feio não dar a maior para as crianças. A mesa irrompeu em risada, e pouco foi discutido sobre o assunto. Eu não consegui parar de pensar naquilo. Embora em tom de brincadeira, aquele homem não sentia o respeito que ele mesmo entregou. Embora seus filhos possivelmente se sentissem mais próximos dele do que ele se sentira de seus pais.",
      "Quando eu e minha esposa morávamos em Oklahoma, fizemos algumas visitas em asilos, onde gastamos tempo jogando jogos de tabuleiro, jogando conversa fora e cantando velhas canções com os idosos da nossa região. Escutamos incríveis historias de vida e passamos tempo com pessoas cativantes, mas que sempre nos agradeciam por ter passado ali especialmente por se sentirem esquecidos por suas famílias.",
      "E o que isso tem a ver com avanço tecnológico e a fuga das inconveniências? Penso que tudo isso se conecta em saber ter olhos que constantemente buscam beleza. Na pele suada e na latrina escura, nos avanços tecnológicos e nas pessoas esquecidas.",
      "Humanos são preciosos e belos, por isso as obras de suas mãos são inerentemente preciosas e belas também. No fim do dia, esse livro não é sobre o saudosismo do passado. Ele é sobre não se perder no futuro."
    ]
  }
];
