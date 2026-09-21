export interface Unidade {
  sigla: string;
  nome: string;
  descricao: string;
}

/** Unidades da PMERJ atendidas pelo portal. */
export const UNIDADES: Unidade[] = [
  { sigla: "RECOM", nome: "Rondas Especiais e Controle de Multidão", descricao: "Rondas especiais e controle de multidão." },
  { sigla: "BOPE", nome: "Batalhão de Operações Policiais Especiais", descricao: "Operações táticas de altíssimo risco." },
  { sigla: "BPChq", nome: "Batalhão de Polícia de Choque", descricao: "Controle de distúrbios e policiamento de choque." },
  { sigla: "BAC", nome: "Batalhão de Ações com Cães", descricao: "Equipes cinotécnicas e apoio a buscas." },
  { sigla: "GAM", nome: "Grupamento Aeromóvel", descricao: "Apoio aéreo, patrulhamento e resgate." },
  { sigla: "BPRv", nome: "Batalhão de Polícia Rodoviária", descricao: "Policiamento das rodovias estaduais." },
  { sigla: "BPTur", nome: "Batalhão de Policiamento em Áreas Turísticas", descricao: "Segurança em áreas de grande fluxo turístico." },
  { sigla: "BEPE", nome: "Batalhão Especializado de Policiamento em Estádios", descricao: "Policiamento especializado em estádios e eventos." },
  { sigla: "BPTran", nome: "Batalhão de Polícia de Trânsito", descricao: "Fiscalização e ordenamento do trânsito." },
  { sigla: "GPFer", nome: "Grupamento de Polícia Ferroviária", descricao: "Segurança em estações e composições ferroviárias." },
  { sigla: "BPMMus", nome: "Banda de Música", descricao: "Representação em solenidades e eventos institucionais." },
  { sigla: "BPAmb", nome: "Batalhão de Polícia Ambiental", descricao: "Fiscalização e proteção ambiental." },
  { sigla: "BTM", nome: "Batalhão de Transportes e Motociclistas", descricao: "Patrulhamento motorizado e transporte tático." },
  { sigla: "DEJEC", nome: "Operação Conjunta (Todas as Unidades)", descricao: "Ação conjunta — exibe o efetivo de todas as unidades." },
];

export const UNIDADE_SIGLAS = UNIDADES.map((u) => u.sigla);
