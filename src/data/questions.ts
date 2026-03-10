import { Question, RiasecProfile } from "@/lib/types";

// ─── Mapeamentos ─────────────────────────────────────────────────────────────

const PM: Record<string, RiasecProfile> = {
  Realista: "R",
  Investigativo: "I",
  "Artístico": "A",
  Social: "S",
  Empreendedor: "E",
  Convencional: "C",
};

// Ícone padrão por perfil (para dilema_forçado)
const PI: Record<string, string> = {
  Realista: "wrench",
  Investigativo: "microscope",
  "Artístico": "palette",
  Social: "heart",
  Empreendedor: "rocket",
  Convencional: "chart",
};

// Ícone para opções de cards_icones
function cardIcon(texto: string): string {
  const t = texto.toLowerCase();
  if (t.includes("campo") || t.includes("obra") || t.includes("construção") || t.includes("industrial") || t.includes("fabrica") || t.includes("fábrica") || t.includes("logística") || t.includes("logistica")) return "building2";
  if (t.includes("hospital") || t.includes("clínica") || t.includes("clinica") || t.includes("saúde") || t.includes("paciente") || t.includes("curar")) return "stethoscope";
  if (t.includes("design") || t.includes("arte") || t.includes("criativ") || t.includes("estúdio") || t.includes("estudio") || t.includes("agência") || t.includes("agencia") || t.includes("publicidade") || t.includes("campanha") || t.includes("imagem") || t.includes("vídeo") || t.includes("video") || t.includes("estético") || t.includes("estetico") || t.includes("cultura") || t.includes("conceito") || t.includes("inovação criativa") || t.includes("prêmios") || t.includes("premios")) return "palette";
  if (t.includes("escritório") || t.includes("escritorio") || t.includes("auditores") || t.includes("conformidade") || t.includes("logístic") || t.includes("transporte")) return "briefcase";
  if (t.includes("microscópio") || t.includes("microscopio") || t.includes("laboratório") || t.includes("laboratorio") || t.includes("pesquisa") || t.includes("investigar") || t.includes("descobrir") || t.includes("tecnologia e ciência") || t.includes("astronomia") || t.includes("física") || t.includes("software") || t.includes("código") || t.includes("codigo") || t.includes("ide")) return "microscope";
  if (t.includes("microfone") || t.includes("palco") || t.includes("falar em público") || t.includes("falar em publico") || t.includes("comunicação")) return "mic";
  if (t.includes("negócio") || t.includes("negocio") || t.includes("investimento") || t.includes("startup") || t.includes("vendas") || t.includes("crm") || t.includes("metas") || t.includes("lucro") || t.includes("bônus") || t.includes("bonus") || t.includes("comercial") || t.includes("negociar") || t.includes("empres") || t.includes("fórum") || t.includes("forum") || t.includes("tribunal") || t.includes("liderança") || t.includes("lider")) return "rocket";
  if (t.includes("planilha") || t.includes("gestão") || t.includes("gestao") || t.includes("tarefas") || t.includes("processo") || t.includes("organiz") || t.includes("categoriz") || t.includes("documentar") || t.includes("auditoria") || t.includes("controle") || t.includes("promoção por eficiência") || t.includes("metricas") || t.includes("métricas") || t.includes("precisão") || t.includes("precisao") || t.includes("financei") || t.includes("institui")) return "chart";
  if (t.includes("ajudar") || t.includes("cuidar") || t.includes("social") || t.includes("empatia") || t.includes("sala de aula") || t.includes("ensinar") || t.includes("satisfação") || t.includes("satisfacao") || t.includes("agradecimento") || t.includes("mediação") || t.includes("mediacao") || t.includes("queixas") || t.includes("ong") || t.includes("impacto social") || t.includes("comportamento") || t.includes("psicolog") || t.includes("aluno")) return "heart";
  if (t.includes("instrument") || t.includes("obra-prima") || t.includes("star") || t.includes("engajamento")) return "star";
  if (t.includes("construir") || t.includes("reparar") || t.includes("mecânica") || t.includes("mecanica") || t.includes("equipamento") || t.includes("fisic") || t.includes("montar") || t.includes("máquinas") || t.includes("maquinas") || t.includes("produto físico") || t.includes("produto fisico")) return "hammer";
  return "star";
}

// ─── Perguntas ────────────────────────────────────────────────────────────────

export const questions: Question[] = [
  // ─── BLOCO 1: Lista Múltipla Escolha (1-15) ─────────────────────────────
  {
    type: "lista", id: 1,
    statement: "Em um projeto em grupo, qual papel você costuma assumir naturalmente?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Organizo o cronograma", profile: PM["Convencional"] },
      { alternative: "B", text: "Dou as ideias criativas", profile: PM["Artístico"] },
      { alternative: "C", text: "Pesquiso referências", profile: PM["Investigativo"] },
      { alternative: "D", text: "Lidero as reuniões", profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "lista", id: 2,
    statement: "Qual dessas atividades te deixaria menos estressado ao final do dia?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Montar um equipamento", profile: PM["Realista"] },
      { alternative: "B", text: "Aconselhar um amigo", profile: PM["Social"] },
      { alternative: "C", text: "Fechar uma negociação", profile: PM["Empreendedor"] },
      { alternative: "D", text: "Revisar uma planilha", profile: PM["Convencional"] },
    ],
  },
  {
    type: "lista", id: 3,
    statement: "Se você tivesse tempo livre no trabalho, o que faria primeiro?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Estudaria uma nova ferramenta", profile: PM["Investigativo"] },
      { alternative: "B", text: "Organizaria meus arquivos", profile: PM["Convencional"] },
      { alternative: "C", text: "Conversaria com a equipe", profile: PM["Social"] },
      { alternative: "D", text: "Esboçaria um projeto novo", profile: PM["Artístico"] },
    ],
  },
  {
    type: "lista", id: 4,
    statement: "O que mais te incomoda em um ambiente de trabalho?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Falta de organização", profile: PM["Convencional"] },
      { alternative: "B", text: "Falta de autonomia criativa", profile: PM["Artístico"] },
      { alternative: "C", text: "Pessoas não colaborativas", profile: PM["Social"] },
      { alternative: "D", text: "Ficar preso em um escritório", profile: PM["Realista"] },
    ],
  },
  {
    type: "lista", id: 5,
    statement: "Como você prefere resolver um problema complexo?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Analisando dados a fundo", profile: PM["Investigativo"] },
      { alternative: "B", text: "Fazendo um brainstorm", profile: PM["Artístico"] },
      { alternative: "C", text: "Pedindo opinião de especialistas", profile: PM["Social"] },
      { alternative: "D", text: "Testando na prática", profile: PM["Realista"] },
    ],
  },
  {
    type: "lista", id: 6,
    statement: "Qual destas conquistas te daria mais orgulho?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Bater uma meta de vendas", profile: PM["Empreendedor"] },
      { alternative: "B", text: "Criar uma obra/design inovador", profile: PM["Artístico"] },
      { alternative: "C", text: "Publicar um artigo científico", profile: PM["Investigativo"] },
      { alternative: "D", text: "Construir algo do zero com as mãos", profile: PM["Realista"] },
    ],
  },
  {
    type: "lista", id: 7,
    statement: "Ao planejar uma viagem com amigos, o que você prefere fazer?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Cuidar do orçamento", profile: PM["Convencional"] },
      { alternative: "B", text: "Escolher os pontos turísticos e roteiro", profile: PM["Investigativo"] },
      { alternative: "C", text: "Garantir que todos estejam bem", profile: PM["Social"] },
      { alternative: "D", text: "Negociar descontos em passeios", profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "lista", id: 7,
    statement: "Qual tipo de feedback você prefere receber do seu chefe?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "\"Sua precisão é impecável\"", profile: PM["Convencional"] },
      { alternative: "B", text: "\"Sua ideia foi genial\"", profile: PM["Artístico"] },
      { alternative: "C", text: "\"Você motiva a equipe\"", profile: PM["Social"] },
      { alternative: "D", text: "\"Você gerou muito lucro\"", profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "lista", id: 9,
    statement: "O que te atrai mais em uma vaga de emprego?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Estabilidade e regras claras", profile: PM["Convencional"] },
      { alternative: "B", text: "Oportunidade de ajudar pessoas", profile: PM["Social"] },
      { alternative: "C", text: "Desafios intelectuais", profile: PM["Investigativo"] },
      { alternative: "D", text: "Trabalho de campo", profile: PM["Realista"] },
    ],
  },
  {
    type: "lista", id: 10,
    statement: "Como você lida com imprevistos?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Busco a lógica para resolver", profile: PM["Investigativo"] },
      { alternative: "B", text: "Adapto-me usando a criatividade", profile: PM["Artístico"] },
      { alternative: "C", text: "Delego a tarefa para focar no resultado", profile: PM["Empreendedor"] },
      { alternative: "D", text: "Sigo o manual de contingência", profile: PM["Convencional"] },
    ],
  },
  {
    type: "lista", id: 11,
    statement: "Se precisasse aprender algo novo hoje, qual formato escolheria?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Lendo artigos detalhados", profile: PM["Investigativo"] },
      { alternative: "B", text: "Praticando com ferramentas reais", profile: PM["Realista"] },
      { alternative: "C", text: "Participando de um debate", profile: PM["Social"] },
      { alternative: "D", text: "Assistindo a um pitch de negócios", profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "lista", id: 12,
    statement: "O que faz você perder a noção do tempo?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Tabular dados e organizar fluxos", profile: PM["Convencional"] },
      { alternative: "B", text: "Criar conteúdos e artes", profile: PM["Artístico"] },
      { alternative: "C", text: "Operar máquinas ou focar em esportes", profile: PM["Realista"] },
      { alternative: "D", text: "Estudar o comportamento humano", profile: PM["Social"] },
    ],
  },
  {
    type: "lista", id: 13,
    statement: "Em uma empresa recém-criada, onde você atuaria melhor?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "No financeiro/processos", profile: PM["Convencional"] },
      { alternative: "B", text: "No P&D (Pesquisa e Desenvolvimento)", profile: PM["Investigativo"] },
      { alternative: "C", text: "No RH e treinamento", profile: PM["Social"] },
      { alternative: "D", text: "No comercial/vendas", profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "lista", id: 14,
    statement: "O que você valoriza em um colega de trabalho?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "A capacidade técnica e prática", profile: PM["Realista"] },
      { alternative: "B", text: "A visão estratégica e ambição", profile: PM["Empreendedor"] },
      { alternative: "C", text: "A empatia e comunicação", profile: PM["Social"] },
      { alternative: "D", text: "A organização e pontualidade", profile: PM["Convencional"] },
    ],
  },
  {
    type: "lista", id: 15,
    statement: "Qual dessas frustrações você quer evitar na sua carreira?",
    subtitle: "Selecione 1 opção",
    maxSelections: 1,
    options: [
      { alternative: "A", text: "Fazer trabalhos repetitivos sem desafio", profile: PM["Investigativo"] },
      { alternative: "B", text: "Não ter poder de decisão", profile: PM["Empreendedor"] },
      { alternative: "C", text: "Trabalhar isolado sem contato humano", profile: PM["Social"] },
      { alternative: "D", text: "Lidar com processos criativos abstratos", profile: PM["Convencional"] },
    ],
  },
  // ─── BLOCO 2: Likert (16-30) ───────────────────────────────
  { type: "likert", id: 16, statement: "Gosto de trabalhos que envolvem atividades práticas, onde posso ver o resultado físico do que fiz.", profile: PM["Realista"] },
  { type: "likert", id: 17, statement: "Sinto necessidade de estar em ambientes onde posso expressar minha criatividade livremente.", profile: PM["Artístico"] },
  { type: "likert", id: 18, statement: "Gosto de assumir a liderança em situações onde o grupo não sabe muito bem o que fazer.", profile: PM["Empreendedor"] },
  { type: "likert", id: 19, statement: "Prefiro consertar algo que quebrou do que comprar um novo ou pagar para alguém arrumar.", profile: PM["Realista"] },
  { type: "likert", id: 20, statement: "A estética e o design das coisas são fatores que influenciam muito nas minhas decisões.", profile: PM["Artístico"] },
  { type: "likert", id: 21, statement: "Sou bom em convencer as pessoas a apoiarem minhas ideias ou comprarem um projeto.", profile: PM["Empreendedor"] },
  { type: "likert", id: 22, statement: "Prefiro atividades ao ar livre ou que exijam movimentação do que ficar o dia todo sentado.", profile: PM["Realista"] },
  { type: "likert", id: 23, statement: "Gosto de trabalhar em ambientes dinâmicos onde regras podem ser quebradas em prol da inovação.", profile: PM["Artístico"] },
  //───BLOCO 3: Boolean Cards (16-30)───────────────────────────────
  { type: "direta", id: 24, statement: "Fico animado quando tenho que aprender algo novo, mesmo que seja complexo e desafiador.", profile: PM["Investigativo"] },
  { type: "direta", id: 25, statement: "Tenho muita facilidade em ouvir os problemas das pessoas e ajudá-las a encontrar soluções.", profile: PM["Social"] },
  { type: "direta", id: 26, statement: "Fico incomodado quando as informações estão desorganizadas ou sem um padrão claro.", profile: PM["Convencional"] },
  { type: "direta", id: 27, statement: "Gosto de analisar dados, ler gráficos e encontrar as razões ocultas por trás de um problema.", profile: PM["Investigativo"] },
  { type: "direta", id: 28, statement: "Me sinto energizado depois de passar o dia ensinando ou orientando outras pessoas.", profile: PM["Social"] },
  { type: "direta", id: 29, statement: "Gosto de seguir métodos, checklists e processos bem definidos no meu dia a dia.", profile: PM["Convencional"] },
  { type: "direta", id: 30, statement: "Adoro testar teorias e ver se as hipóteses que criei na minha cabeça realmente funcionam.", profile: PM["Investigativo"] },
  // ─── BLOCO 4: Cards com Ícones (31-45) ───────────────────────────────────
  {
    type: "cards", id: 31,
    statement: "Quais ambientes de trabalho mais te atraem?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "campo", label: "Campo/Obra", description: "Engenharia e construção", icon: cardIcon("Campo/Obra"), profile: PM["Realista"] },
      { id: "hospital", label: "Hospital/Clínica", description: "Saúde e cuidado", icon: cardIcon("Hospital/Clínica"), profile: PM["Social"] },
      { id: "estudio", label: "Estúdio Criativo", description: "Arte e design", icon: cardIcon("Estúdio Criativo"), profile: PM["Artístico"] },
      { id: "escritorio", label: "Escritório", description: "Gestão e negócios", icon: cardIcon("Escritório"), profile: PM["Convencional"] },
    ],
  },
  {
    type: "cards", id: 32,
    statement: "Quais ferramentas você mais gostaria de usar no dia a dia?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "design", label: "Softwares de Design", description: "Arte e criação visual", icon: cardIcon("Softwares de Design"), profile: PM["Artístico"] },
      { id: "planilha", label: "Planilhas Complexas", description: "Organização e análise", icon: cardIcon("Planilhas Complexas"), profile: PM["Convencional"] },
      { id: "microscopio", label: "Microscópios/Laboratório", description: "Pesquisa científica", icon: cardIcon("Microscópios/Laboratório"), profile: PM["Investigativo"] },
      { id: "palco", label: "Microfone/Palco", description: "Comunicação e expressão", icon: cardIcon("Microfone/Palco"), profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "cards", id: 33,
    statement: "Que tipo de assunto você gosta de ler ou consumir na internet?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "negocios", label: "Negócios e Investimentos", description: "Empreendedorismo", icon: cardIcon("Negócios e Investimentos"), profile: PM["Empreendedor"] },
      { id: "tech", label: "Tecnologia e Ciência", description: "Inovação e pesquisa", icon: cardIcon("Tecnologia e Ciência"), profile: PM["Investigativo"] },
      { id: "psicologia", label: "Comportamento e Psicologia", description: "Pessoas e relações", icon: cardIcon("Comportamento e Psicologia"), profile: PM["Social"] },
      { id: "artecultura", label: "Arte e Cultura", description: "Expressão e criatividade", icon: cardIcon("Arte e Cultura"), profile: PM["Artístico"] },
    ],
  },
  {
    type: "cards", id: 34,
    statement: "Com qual público você prefere lidar diretamente?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "clientes", label: "Clientes em negociação", description: "Vendas e parcerias", icon: cardIcon("Clientes em negociação"), profile: PM["Empreendedor"] },
      { id: "pacientes", label: "Pacientes/Alunos", description: "Saúde e educação", icon: cardIcon("Pacientes/Alunos"), profile: PM["Social"] },
      { id: "maquinas", label: "Máquinas/Sistemas", description: "Operações técnicas", icon: cardIcon("Máquinas/Sistemas"), profile: PM["Realista"] },
      { id: "auditores", label: "Auditores/Fiscais", description: "Conformidade e controle", icon: cardIcon("Auditores/Fiscais"), profile: PM["Convencional"] },
    ],
  },
  {
    type: "cards", id: 35,
    statement: "Quais verbos mais combinam com o que você gosta de fazer?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "investigar", label: "Investigar/Descobrir", description: "Análise e pesquisa", icon: cardIcon("Investigar/Descobrir"), profile: PM["Investigativo"] },
      { id: "organizar", label: "Organizar/Categorizar", description: "Estrutura e ordem", icon: cardIcon("Organizar/Categorizar"), profile: PM["Convencional"] },
      { id: "construir", label: "Construir/Reparar", description: "Trabalho prático", icon: cardIcon("Construir/Reparar"), profile: PM["Realista"] },
      { id: "criar", label: "Criar/Inovar", description: "Criatividade e originalidade", icon: cardIcon("Criar/Inovar"), profile: PM["Artístico"] },
    ],
  },
  {
    type: "cards", id: 36,
    statement: "Escolha os ambientes ideais para o seu futuro:",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "labpesquisa", label: "Laboratório de Pesquisa", description: "Ciência e descoberta", icon: cardIcon("Laboratório de Pesquisa"), profile: PM["Investigativo"] },
      { id: "agpublicidade", label: "Agência de Publicidade", description: "Criação e mídia", icon: cardIcon("Agência de Publicidade"), profile: PM["Artístico"] },
      { id: "forum", label: "Fórum/Tribunal", description: "Advocacia e decisão", icon: cardIcon("Fórum/Tribunal"), profile: PM["Empreendedor"] },
      { id: "salaaula", label: "Sala de Aula", description: "Ensino e orientação", icon: cardIcon("Sala de Aula"), profile: PM["Social"] },
    ],
  },
  {
    type: "cards", id: 37,
    statement: "Quais desafios você acha mais estimulantes?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "lucros", label: "Aumentar lucros de uma empresa", description: "Resultados financeiros", icon: cardIcon("Aumentar lucros de uma empresa"), profile: PM["Empreendedor"] },
      { id: "curardoenca", label: "Curar uma doença", description: "Saúde e impacto humano", icon: cardIcon("Curar uma doença"), profile: PM["Social"] },
      { id: "processos", label: "Melhorar processos lentos", description: "Eficiência e otimização", icon: cardIcon("Melhorar processos lentos"), profile: PM["Convencional"] },
      { id: "produto", label: "Projetar um novo produto físico", description: "Engenharia e criação", icon: cardIcon("Projetar um novo produto físico"), profile: PM["Realista"] },
    ],
  },
  {
    type: "cards", id: 38,
    statement: "Que tipos de software você tem mais afinidade?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "gestao", label: "Ferramentas de Gestão/Tarefas", description: "Organização e processos", icon: cardIcon("Ferramentas de Gestão/Tarefas"), profile: PM["Convencional"] },
      { id: "editores", label: "Editores de Imagem/Vídeo", description: "Criação de conteúdo", icon: cardIcon("Editores de Imagem/Vídeo"), profile: PM["Artístico"] },
      { id: "ides", label: "IDEs/Código", description: "Desenvolvimento e análise", icon: cardIcon("IDEs/Código"), profile: PM["Investigativo"] },
      { id: "crm", label: "CRMs de Vendas", description: "Comercial e relacionamento", icon: cardIcon("CRMs de Vendas"), profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "cards", id: 39,
    statement: "Como você prefere que seja a sua rotina?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "previsivel", label: "Totalmente previsível", description: "Estabilidade e controle", icon: cardIcon("Totalmente previsível"), profile: PM["Convencional"] },
      { id: "metasfinanceiras", label: "Focada em metas financeiras", description: "Resultados e crescimento", icon: cardIcon("Focada em metas financeiras"), profile: PM["Empreendedor"] },
      { id: "cuidaroutros", label: "Focada em cuidar dos outros", description: "Serviço e impacto", icon: cardIcon("Focada em cuidar dos outros"), profile: PM["Social"] },
      { id: "semregras", label: "Livre de regras rígidas", description: "Criatividade e liberdade", icon: cardIcon("Livre de regras rígidas"), profile: PM["Artístico"] },
    ],
  },
  {
    type: "cards", id: 40,
    statement: "O que mais chama sua atenção em uma empresa?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "impactosocial", label: "O impacto social que ela gera", description: "Responsabilidade coletiva", icon: cardIcon("O impacto social que ela gera"), profile: PM["Social"] },
      { id: "designinovacao", label: "O design e inovação da marca", description: "Identidade criativa", icon: cardIcon("O design e inovação da marca"), profile: PM["Artístico"] },
      { id: "negocioagressivo", label: "O modelo de negócio agressivo", description: "Estratégia e crescimento", icon: cardIcon("O modelo de negócio agressivo"), profile: PM["Empreendedor"] },
      { id: "tecnologiadados", label: "A tecnologia e dados usados", description: "Inovação técnica", icon: cardIcon("A tecnologia e dados usados"), profile: PM["Investigativo"] },
    ],
  },
  {
    type: "cards", id: 41,
    statement: "Se você pudesse ter uma dessas habilidades instantaneamente, qual seria?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "instrumentos", label: "Tocar vários instrumentos", description: "Musicalidade e arte", icon: cardIcon("Tocar vários instrumentos"), profile: PM["Artístico"] },
      { id: "falarpublico", label: "Falar em público com maestria", description: "Persuasão e liderança", icon: cardIcon("Falar em público com maestria"), profile: PM["Empreendedor"] },
      { id: "mecanica", label: "Entender mecânica avançada", description: "Técnica e engenharia", icon: cardIcon("Entender mecânica avançada"), profile: PM["Realista"] },
      { id: "dados", label: "Memorizar e estruturar dados complexos", description: "Análise e organização", icon: cardIcon("Memorizar e estruturar dados complexos"), profile: PM["Convencional"] },
    ],
  },
  {
    type: "cards", id: 42,
    statement: "Onde você se sentiria mais útil?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "ong", label: "ONG ou projeto social", description: "Impacto humano direto", icon: cardIcon("ONG ou projeto social"), profile: PM["Social"] },
      { id: "startup", label: "Startup de alto crescimento", description: "Inovação e velocidade", icon: cardIcon("Startup de alto crescimento"), profile: PM["Empreendedor"] },
      { id: "financeiro", label: "Instituição Financeira", description: "Controle e análise", icon: cardIcon("Instituição Financeira"), profile: PM["Convencional"] },
      { id: "industria", label: "Indústria Tecnológica/Fábrica", description: "Produção e sistemas", icon: cardIcon("Indústria Tecnológica/Fábrica"), profile: PM["Realista"] },
    ],
  },
  {
    type: "cards", id: 43,
    statement: "Qual dessas métricas você gostaria de acompanhar diariamente?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "satisfacao", label: "Satisfação do paciente/cliente", description: "Bem-estar e experiência", icon: cardIcon("Satisfação do paciente/cliente"), profile: PM["Social"] },
      { id: "conversao", label: "Taxa de conversão/vendas", description: "Resultados comerciais", icon: cardIcon("Taxa de conversão/vendas"), profile: PM["Empreendedor"] },
      { id: "relatorios", label: "Precisão dos relatórios", description: "Conformidade e dados", icon: cardIcon("Precisão dos relatórios"), profile: PM["Convencional"] },
      { id: "engajamento", label: "Engajamento em campanha criativa", description: "Impacto artístico", icon: cardIcon("Engajamento em uma campanha criativa"), profile: PM["Artístico"] },
    ],
  },
  {
    type: "cards", id: 44,
    statement: "Qual tipo de \"caos\" você tolera melhor?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "caocriativo", label: "Processo criativo bagunçado", description: "Liberdade de criação", icon: cardIcon("Processo criativo bagunçado"), profile: PM["Artístico"] },
      { id: "caopressao", label: "Alta pressão por resultados", description: "Metas agressivas", icon: cardIcon("Alta pressão por resultados"), profile: PM["Empreendedor"] },
      { id: "caofisico", label: "Emergências físicas/climáticas", description: "Trabalho de campo", icon: cardIcon("Emergências físicas/climáticas"), profile: PM["Realista"] },
      { id: "caoemocional", label: "Lidar com queixas emocionais", description: "Apoio e empatia", icon: cardIcon("Lidar com queixas emocionais de pessoas"), profile: PM["Social"] },
    ],
  },
  {
    type: "cards", id: 45,
    statement: "Qual tipo de reconhecimento você prefere?",
    subtitle: "Selecione todas as que se aplicam",
    options: [
      { id: "bonus", label: "Bônus financeiro agressivo", description: "Recompensa monetária", icon: cardIcon("Bônus financeiro agressivo"), profile: PM["Empreendedor"] },
      { id: "premiodesign", label: "Prêmios de design/inovação", description: "Reconhecimento criativo", icon: cardIcon("Prêmios de design/inovação"), profile: PM["Artístico"] },
      { id: "agradecimento", label: "Agradecimento sincero de quem ajudou", description: "Impacto humano", icon: cardIcon("Agradecimento sincero de quem ajudou"), profile: PM["Social"] },
      { id: "promocao", label: "Promoção por eficiência e métricas", description: "Meritocracia", icon: cardIcon("Promoção por eficiência e métricas"), profile: PM["Convencional"] },
    ],
  },

  // ─── BLOCO 5: Dilema Forçado (46-60) ─────────────────────────────────────

  {
    type: "dicotomica", id: 46,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Pesquisa Científica", description: "Investigar fenômenos e descobrir soluções", icon: PI["Investigativo"], profile: PM["Investigativo"] },
      { label: "Gestão de Projetos", description: "Liderar equipes e bater metas", icon: PI["Empreendedor"], profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "dicotomica", id: 47,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Processos rígidos e seguros", description: "Trabalhar com regras e conformidade", icon: PI["Convencional"], profile: PM["Convencional"] },
      { label: "Liberdade criativa total", description: "Criar sem limitações ou restrições", icon: PI["Artístico"], profile: PM["Artístico"] },
    ],
  },
  {
    type: "dicotomica", id: 48,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Atender e cuidar de pessoas", description: "Saúde, educação e bem-estar", icon: PI["Social"], profile: PM["Social"] },
      { label: "Operar máquinas e ferramentas", description: "Trabalho técnico e físico", icon: PI["Realista"], profile: PM["Realista"] },
    ],
  },
  {
    type: "dicotomica", id: 49,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Analisar dados para decisão lógica", description: "Investigação e raciocínio", icon: PI["Investigativo"], profile: PM["Investigativo"] },
      { label: "Discutir em grupo para consenso", description: "Colaboração e escuta ativa", icon: PI["Social"], profile: PM["Social"] },
    ],
  },
  {
    type: "dicotomica", id: 50,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Liderar equipe para bater metas", description: "Vendas e crescimento", icon: PI["Empreendedor"], profile: PM["Empreendedor"] },
      { label: "Fazer auditoria financeira", description: "Precisão e conformidade", icon: PI["Convencional"], profile: PM["Convencional"] },
    ],
  },
  {
    type: "dicotomica", id: 51,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Construir a estrutura física da casa", description: "Engenharia e trabalho manual", icon: PI["Realista"], profile: PM["Realista"] },
      { label: "Fazer o design de interiores", description: "Estética e criatividade", icon: PI["Artístico"], profile: PM["Artístico"] },
    ],
  },
  {
    type: "dicotomica", id: 52,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Ser lembrado como alguém que ajudou muitos", description: "Legado humano e social", icon: PI["Social"], profile: PM["Social"] },
      { label: "Ser lembrado como empresário de sucesso", description: "Conquista e resultados", icon: PI["Empreendedor"], profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "dicotomica", id: 53,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Organizar arquivos e garantir conformidade", description: "Controle e ordem", icon: PI["Convencional"], profile: PM["Convencional"] },
      { label: "Conduzir experimentos sem garantia", description: "Investigação e risco calculado", icon: PI["Investigativo"], profile: PM["Investigativo"] },
    ],
  },
  {
    type: "dicotomica", id: 54,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Criar uma campanha publicitária", description: "Arte e comunicação emocional", icon: PI["Artístico"], profile: PM["Artístico"] },
      { label: "Resolver um problema mecânico", description: "Técnica e precisão", icon: PI["Realista"], profile: PM["Realista"] },
    ],
  },
  {
    type: "dicotomica", id: 55,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Estudar astronomia ou física quântica", description: "Ciência e raciocínio abstrato", icon: PI["Investigativo"], profile: PM["Investigativo"] },
      { label: "Estudar história da arte e cinema", description: "Cultura e expressão visual", icon: PI["Artístico"], profile: PM["Artístico"] },
    ],
  },
  {
    type: "dicotomica", id: 56,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Negociar o fim de uma greve com firmeza", description: "Liderança e pressão", icon: PI["Empreendedor"], profile: PM["Empreendedor"] },
      { label: "Fazer mediação psicológica entre as partes", description: "Empatia e escuta", icon: PI["Social"], profile: PM["Social"] },
    ],
  },
  {
    type: "dicotomica", id: 57,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Cuidar da logística e transporte", description: "Operação e campo", icon: PI["Realista"], profile: PM["Realista"] },
      { label: "Controle de qualidade no sistema", description: "Dados e precisão", icon: PI["Convencional"], profile: PM["Convencional"] },
    ],
  },
  {
    type: "dicotomica", id: 58,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Inventar um novo conceito estético", description: "Criatividade e arte", icon: PI["Artístico"], profile: PM["Artístico"] },
      { label: "Inventar um novo modelo de negócio", description: "Estratégia e lucratividade", icon: PI["Empreendedor"], profile: PM["Empreendedor"] },
    ],
  },
  {
    type: "dicotomica", id: 59,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Descobrir por que o software deu erro", description: "Análise de causa raiz", icon: PI["Investigativo"], profile: PM["Investigativo"] },
      { label: "Documentar e catalogar todos os erros", description: "Organização e registro", icon: PI["Convencional"], profile: PM["Convencional"] },
    ],
  },
  {
    type: "dicotomica", id: 60,
    statement: "Qual atividade você escolheria se só pudesse fazer uma?",
    options: [
      { label: "Ensinar o que você sabe para novatos", description: "Mentoria e transmissão de conhecimento", icon: PI["Social"], profile: PM["Social"] },
      { label: "Trabalhar isolado criando sua obra-prima", description: "Foco e expressão artística", icon: PI["Artístico"], profile: PM["Artístico"] },
    ],
  },
];

export const TOTAL_QUESTIONS = questions.length;
