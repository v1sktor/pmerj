export interface UnidadeInstitucional {
  sigla: string;
  nome: string;
  subtitulo: string;
  missao: string;
  historia: string;
  contato: string;
}

export const INSTITUCIONAL: UnidadeInstitucional[] = [
  {
    sigla: "PMERJ",
    nome: "Polícia Militar do Estado do Rio de Janeiro",
    subtitulo: "Força Estadual · Vida Carioca",
    missao:
      "Exercer o policiamento ostensivo e preservar a ordem pública no Estado do Rio de Janeiro, atuando com disciplina, hierarquia e respeito aos direitos fundamentais, em benefício da segurança da população carioca.",
    historia:
      "A Polícia Militar do Estado do Rio de Janeiro é a força estadual responsável pelo policiamento ostensivo e pela garantia da ordem pública. Sua estrutura é organizada em batalhões e grupamentos especializados, cada um responsável por uma área de atuação específica — do policiamento comunitário às operações táticas de alto risco. Dentro dos próprios batalhões existem ainda estruturas internas como o GAT (Grupamento de Ações Táticas), o PATAMO (Patrulhamento Tático Móvel), a RP (Rádio Patrulha), o PPC (Posto de Policiamento Comunitário) e o PAMESP (Patrulhamento Motorizado Especial), que dão suporte às operações do dia a dia.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais da PMERJ.",
  },
  {
    sigla: "RECOM",
    nome: "Rondas Especiais e Controle de Multidão",
    subtitulo: "Rondas Especiais e Controle de Multidão · PMERJ",
    missao:
      "Realizar rondas especiais e atuar no controle de multidões em eventos, manifestações e aglomerações, garantindo a ordem pública com técnica e proporcionalidade no uso da força.",
    historia:
      "O RECOM é a unidade da PMERJ especializada em rondas ostensivas de maior porte e no controle de distúrbios civis, empregada em eventos de grande público, manifestações e situações que exijam contenção organizada de multidões.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do RECOM — PMERJ.",
  },
  {
    sigla: "BOPE",
    nome: "Batalhão de Operações Policiais Especiais",
    subtitulo: "Batalhão de Operações Policiais Especiais · PMERJ",
    missao:
      "Atuar em operações policiais de alto risco, incursões táticas, resgate de reféns e incidentes críticos que exijam treinamento especializado e emprego de técnicas avançadas.",
    historia:
      "O BOPE é a tropa de elite da PMERJ, reconhecida por sua atuação em operações de altíssima complexidade — incursões em áreas de risco, confrontos armados, resgate de reféns e apoio tático às demais unidades. Seu efetivo passa por um rigoroso processo seletivo e treinamento contínuo.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BOPE — PMERJ.",
  },
  {
    sigla: "BPChq",
    nome: "Batalhão de Polícia de Choque",
    subtitulo: "Batalhão de Polícia de Choque · PMERJ",
    missao:
      "Controlar distúrbios civis, atuar em situações de grave perturbação da ordem pública e empregar técnicas de choque com disciplina e uso proporcional da força.",
    historia:
      "O Batalhão de Polícia de Choque é responsável pelo policiamento de choque em grandes eventos, manifestações e ocorrências que demandem contenção organizada. Internamente conta com o GAT (Grupamento de Ações Táticas) e o PATAMO (Patrulhamento Tático Móvel), empregados em ações rápidas de reforço e resposta tática.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BPChq — PMERJ.",
  },
  {
    sigla: "BAC",
    nome: "Batalhão de Ações com Cães",
    subtitulo: "Batalhão de Ações com Cães · PMERJ",
    missao:
      "Empregar equipes cinotécnicas no apoio a buscas, detecção de entorpecentes e explosivos, e reforço tático a operações policiais em conjunto com outras unidades.",
    historia:
      "O BAC reúne os cães e condutores da PMERJ, treinados para atuação em faro seletivo, busca de pessoas desaparecidas, detecção de substâncias ilícitas e apoio a operações de choque e revista, ampliando a capacidade operacional das demais unidades.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BAC — PMERJ.",
  },
  {
    sigla: "GAM",
    nome: "Grupamento Aeromóvel",
    subtitulo: "Grupamento Aeromóvel · PMERJ",
    missao:
      "Prestar apoio aéreo às operações policiais, realizando patrulhamento, transporte tático, monitoramento e resgate aeromédico em situações de emergência.",
    historia:
      "O Grupamento Aeromóvel opera as aeronaves da PMERJ, dando suporte a operações terrestres, buscas, monitoramento de grandes eventos e transporte tático de equipes especializadas, ampliando o alcance e a velocidade de resposta da corporação.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do GAM — PMERJ.",
  },
  {
    sigla: "BPRv",
    nome: "Batalhão de Polícia Rodoviária",
    subtitulo: "Batalhão de Polícia Rodoviária · PMERJ",
    missao:
      "Realizar o policiamento ostensivo das rodovias estaduais, prevenindo acidentes, fiscalizando o trânsito e reprimindo ilícitos praticados nas vias.",
    historia:
      "O BPRv é responsável pelo patrulhamento das principais rodovias do Estado, atuando na fiscalização de trânsito, atendimento a acidentes e combate a crimes praticados nas estradas, em rondas de radiopatrulha (RP) distribuídas por toda a malha rodoviária.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BPRv — PMERJ.",
  },
  {
    sigla: "BPTur",
    nome: "Batalhão de Policiamento em Áreas Turísticas",
    subtitulo: "Batalhão de Policiamento em Áreas Turísticas · PMERJ",
    missao:
      "Garantir a segurança de turistas e moradores nas principais áreas turísticas do Estado, promovendo policiamento ostensivo e comunitário orientado ao público visitante.",
    historia:
      "O BPTur atua nas regiões de maior fluxo turístico, mantendo postos de policiamento comunitário (PPC) e rondas constantes em praias, pontos turísticos e áreas de grande circulação, reforçando a sensação de segurança de moradores e visitantes.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BPTur — PMERJ.",
  },
  {
    sigla: "BEPE",
    nome: "Batalhão Especializado de Policiamento em Estádios",
    subtitulo: "Batalhão Especializado de Policiamento em Estádios · PMERJ",
    missao:
      "Planejar e executar o policiamento especializado em estádios e grandes eventos esportivos, prevenindo distúrbios e garantindo a segurança do público presente.",
    historia:
      "O BEPE é responsável pela segurança em estádios e arenas esportivas, atuando antes, durante e após os eventos em coordenação com as demais unidades da PMERJ para prevenir conflitos entre torcidas e garantir a ordem nos jogos.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BEPE — PMERJ.",
  },
  {
    sigla: "BPTran",
    nome: "Batalhão de Polícia de Trânsito",
    subtitulo: "Batalhão de Polícia de Trânsito · PMERJ",
    missao:
      "Fiscalizar e ordenar o trânsito nas vias urbanas, prevenindo acidentes e prestando apoio operacional em ocorrências de trânsito.",
    historia:
      "O BPTran atua na fiscalização e organização do tráfego nas principais vias urbanas do Estado, realizando operações de trânsito, escoltas e apoio em situações de grande fluxo de veículos, sempre em articulação com os órgãos municipais de trânsito.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BPTran — PMERJ.",
  },
  {
    sigla: "GPFer",
    nome: "Grupamento de Polícia Ferroviária",
    subtitulo: "Grupamento de Polícia Ferroviária · PMERJ",
    missao:
      "Garantir a segurança nas estações e composições ferroviárias, prevenindo furtos, roubos e demais ilícitos praticados no transporte sobre trilhos.",
    historia:
      "O GPFer realiza o policiamento ostensivo nas linhas férreas e estações, protegendo passageiros e patrimônio do sistema ferroviário, em rondas constantes e ações de prevenção nos horários de maior movimento.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do GPFer — PMERJ.",
  },
  {
    sigla: "BPMMus",
    nome: "Banda de Música",
    subtitulo: "Banda de Música · PMERJ",
    missao:
      "Representar a PMERJ em solenidades, cerimônias cívico-militares e eventos institucionais, promovendo a cultura musical e a imagem da corporação junto à sociedade.",
    historia:
      "A Banda de Música da PMERJ participa de formaturas, desfiles cívicos e cerimônias oficiais, sendo uma das expressões mais tradicionais da corporação em sua aproximação com a comunidade.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais da BPMMus — PMERJ.",
  },
  {
    sigla: "BPAmb",
    nome: "Batalhão de Polícia Ambiental",
    subtitulo: "Batalhão de Polícia Ambiental · PMERJ",
    missao:
      "Fiscalizar e proteger o meio ambiente, reprimindo crimes ambientais, caça e pesca ilegais, desmatamento e demais infrações contra a fauna e a flora do Estado.",
    historia:
      "O BPAmb atua na fiscalização de áreas de preservação, unidades de conservação e regiões de mata, combatendo crimes ambientais e apoiando ações de defesa civil em situações de desastre natural.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BPAmb — PMERJ.",
  },
  {
    sigla: "BTM",
    nome: "Batalhão de Transportes e Motociclistas",
    subtitulo: "Batalhão de Transportes e Motociclistas · PMERJ",
    missao:
      "Realizar o policiamento motorizado em motocicletas e apoiar o transporte tático de tropas, viaturas e equipamentos entre as unidades da corporação.",
    historia:
      "O BTM reúne as equipes de patrulhamento motorizado especial (PAMESP) e é responsável pela logística de transporte da corporação, além de rondas rápidas em motocicleta nos grandes centros urbanos, onde a agilidade é decisiva no atendimento a ocorrências.",
    contato:
      "Para informações institucionais, entre em contato pelos canais oficiais do BTM — PMERJ.",
  },
];
