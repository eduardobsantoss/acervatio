export const WA_URL =
  'https://wa.me/5534992359502?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20gest%C3%A3o%20de%20milhas%20da%20Acervatio.';

// TODO: substituir "#" pela URL real do sistema externo de acesso do cliente
export const CLIENTE_URL = '#';

export const STEPS = [
  { num: '01', title: 'Diagnóstico', desc: 'Mapeamos cartões, programas e saldos atuais.', numColor: '#756545', barColor: '#A69984', barWidth: '38%' },
  { num: '02', title: 'Estruturação', desc: 'Organizamos o gasto e os limites por programa.', numColor: 'rgba(10,22,40,.62)', barColor: 'rgba(10,22,40,.12)', barWidth: '100%' },
  { num: '03', title: 'Monitoramento', desc: 'Acompanhamos bônus e janelas de transferência.', numColor: 'rgba(10,22,40,.62)', barColor: 'rgba(10,22,40,.12)', barWidth: '100%' },
  { num: '04', title: 'Resgate', desc: 'Emitimos no seu nome, no momento certo.', numColor: 'rgba(10,22,40,.62)', barColor: 'rgba(10,22,40,.12)', barWidth: '100%' },
];

export const RESULTADOS_PLACEHOLDERS = [
  'Milhas sob gestão',
  'Bilhetes emitidos',
  'Economia gerada',
  'Famílias atendidas',
];

export const DEPOIMENTOS_PLACEHOLDERS = [
  'Depoimento de cliente',
  'Depoimento de cliente',
  'Depoimento de cliente',
];

export const SERVICOS = [
  { title: 'Acúmulo estratégico', desc: 'Auditoria de cartões e timing das janelas de bônus de transferência.' },
  { title: 'Emissão de passagens', desc: 'Executiva ou primeira classe, quando o patrimônio permite.' },
  { title: 'Hotéis', desc: 'Reservas alinhadas à estratégia da viagem.' },
  { title: 'Seguro de viagem', desc: 'Cobertura contratada junto com a emissão.' },
  { title: 'Transfers', desc: 'Deslocamento resolvido do aeroporto ao destino.' },
  { title: 'Aluguel de veículos', desc: 'Cotação e reserva dentro do planejamento.' },
  { title: 'Check-in assistido', desc: 'Acompanhamento para embarque sem sobressaltos.' },
  { title: 'Salas VIP', desc: 'Acesso a lounges nas conexões e esperas.' },
  { title: 'Imprevistos', desc: 'Alterações e problemas resolvidos durante a viagem.' },
  { title: 'Relatório mensal', desc: 'Extrato do patrimônio: o que foi feito e o que vem a seguir.' },
  // Mesmo link do "Acesso do Cliente" do header — ver CLIENTE_URL acima.
  { title: 'Acesso ao sistema', desc: 'Consulta ao seu patrimônio pelo sistema que já usamos.', href: CLIENTE_URL },
];

export const CMP = [
  { feature: 'Monitoramento de promoções', solo: 'Você descobre pelo Instagram, quase sempre no último dia', gerido: 'Acompanhamento diário das plataformas, com alerta na abertura' },
  { feature: 'Controle de limite por CPF', solo: 'Risco real de bloqueio de conta e perda do saldo', gerido: 'Uso monitorado por programa, sempre abaixo do teto' },
  { feature: 'Timing da transferência', solo: 'Transfere quando lembra — em geral sem bônus', gerido: 'Executada na janela de bônus, com CM projetado antes' },
  { feature: 'Emissão do bilhete', solo: 'Horas procurando disponibilidade e taxas altas', gerido: 'Emitimos no seu nome, comparando rotas e taxas' },
  { feature: 'Relatório mensal', solo: 'Não existe', gerido: 'Saldo, expirações, CM e economia acumulada' },
];

export const FAQS = [
  { q: 'Vocês pedem a senha do meu banco?', a: 'Não. Em nenhuma hipótese pedimos senha de banco, token ou acesso a conta corrente. Trabalhamos apenas com os portais dos programas de fidelidade, com autorização registrada e senhas trocadas por você a qualquer momento.' },
  { q: 'Como funciona a cobrança?', a: 'O valor é definido após o diagnóstico, conforme volume e complexidade da sua estrutura de cartões e programas.' },
  { q: 'Existe um gasto mensal mínimo no cartão?', a: 'Não exigimos um mínimo fixo — analisamos caso a caso durante o diagnóstico para saber se a gestão compensa para o seu perfil.' },
  { q: 'Minha conta pode ser bloqueada?', a: 'Trabalhamos sempre dentro dos limites de uso por CPF de cada programa, justamente para evitar esse risco.' },
  { q: 'As passagens saem no meu nome?', a: 'Sim. A emissão é sempre feita no seu nome ou de quem você indicar como beneficiário.' },
];
