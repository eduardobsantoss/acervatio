export const WA_URL =
  'https://wa.me/5534992359502?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20gest%C3%A3o%20de%20milhas%20da%20Acervatio.';

// TODO: substituir "#" pela URL real do sistema externo de acesso do cliente
export const CLIENTE_URL = '#';

export const SERVICOS = [
  { tab: 'Cartões', title: 'Curadoria de cartões', desc: 'Acompanhamento do mercado e avaliação de cartões, benefícios e novas oportunidades compatíveis com o perfil de cada cliente.' },
  { tab: 'Pontos e milhas', title: 'Gestão de pontos e milhas', desc: 'Acompanhamento de saldos, validade, transferências' },
  { tab: 'Passagens', title: 'Passagens', desc: 'Emissões nacionais e internacionais, da classe econômica à primeira classe.' },
  { tab: 'Hospedagem', title: 'Hospedagem', desc: 'Hospedagens escolhidas de acordo com o perfil e o roteiro de cada viagem.' },
  { tab: 'Roteiro', title: 'Roteiro e logística', desc: 'Organização das etapas, conexões e deslocamentos de cada viagem.' },
  { tab: 'Transfers', title: 'Transfers e mobilidade', desc: 'Transfers, locação de veículos e deslocamentos no destino.' },
  { tab: 'Seguro', title: 'Seguro viagem', desc: 'Coberturas selecionadas de acordo com o destino e o perfil dos viajantes.' },
  { tab: 'Check-in', title: 'Check-in e embarque', desc: 'Realização de check-in, seleção de assentos, monitoramento de upgrades de cabine e compra de bagagens.' },
  { tab: 'Benefícios', title: 'Benefícios de viagem', desc: 'Salas VIP, vantagens dos cartões e benefícios disponíveis em cada viagem.' },
  { tab: 'Suporte', title: 'Alterações e suporte', desc: 'Remarcações, ajustes de reservas e suporte diante de mudanças ao longo da viagem.' },
  { tab: 'Jurídico', title: 'Assessoria jurídica', desc: 'Suporte especializado para situações que exijam orientação jurídica relacionada à viagem.' },
];

export const LEME = [
  { letter: 'L', title: 'Leitura Patrimonial', desc: 'Analisamos cartões, gastos, programas, saldos, benefícios e objetivos para entender todo o patrimônio de viagens do cliente.' },
  { letter: 'E', title: 'Estratégia', desc: 'Acompanhamos o mercado e definimos onde estão as melhores oportunidades de acúmulo, transferência e uso, sempre de acordo com o perfil e os objetivos de cada cliente.' },
  { letter: 'M', title: 'Movimento', desc: 'Realizamos as movimentações necessárias para colocar a estratégia em prática, das transferências de pontos às emissões e reservas.' },
  { letter: 'E', title: 'Experiência', desc: 'Acompanhamos a viagem antes, durante e depois do embarque, buscando oportunidades de upgrades, melhores assentos, benefícios e ajustes que possam melhorar a experiência do cliente.' },
];

// Cada case corresponde ao print de mesmo número em src/assets/cases/.
export const CASES = [
  { label: 'Economia', value: 'R$ 6.171,50', context: 'Curaçao, 2 passageiros' },
  { label: 'Pontos a mais em 12 meses', value: '+300 mil', context: 'Upgrade de cartão, com o mesmo volume de gastos' },
  { label: 'Economia', value: '+ de R$ 6.500', context: 'Miami, voo direto pagando só as taxas' },
  { label: 'Bônus na transferência', value: '+132 mil milhas', context: 'Pontos transferidos no momento certo' },
  { label: 'Upgrade de cabine', value: 'Executiva', context: 'Lisboa → Campinas, sem custo adicional' },
  { label: 'Reserva regularizada', value: 'Assentos juntos', context: 'Alteração da companhia resolvida antes do embarque' },
  { label: 'Tarifa garantida', value: 'Executiva', context: 'Nova York → São Paulo, com prazo para quitar as milhas' },
  { label: 'Economia', value: 'R$ 1.414,46', context: 'Premium Economy, cerca de 80% de redução' },
  { label: 'Custos evitados', value: 'R$ 1.260', context: 'Assentos premium para 6 passageiros com status Diamante' },
  { label: 'Economia', value: 'R$ 10.754,20', context: 'São Paulo → Dallas, mais de 90% de redução' },
  { label: 'Economia', value: 'R$ 6.313,68', context: 'São Paulo → Santiago, cerca de 93% de redução' },
  { label: 'Economia', value: 'R$ 3.882,12', context: 'Raleigh → São Paulo, cerca de 99% de desconto' },
  { label: 'Economia', value: 'R$ 2.032,43', context: 'Emissão 100% com milhas e assentos premium 1A' },
  { label: 'Economia', value: 'R$ 15.775,03', context: 'São Paulo ⇄ Madrid, com classe executiva' },
  { label: 'Economia', value: 'R$ 6.280,92', context: 'Guarulhos → Paris' },
  { label: 'Economia', value: 'R$ 3.223,46', context: 'Passagens emitidas e assento premium no voo noturno' },
  { label: 'Economia', value: 'R$ 4.388,00', context: 'Uberlândia → Ilhéus' },
  { label: 'Economia', value: 'R$ 34.068,72', context: 'Cinco trechos, de Teresina ao Havaí' },
  { label: 'Economia', value: 'R$ 8.991,00', context: 'Hospedagem no Ritz Lagoa da Anta' },
];

export const CMP = [
  { topic: 'Oportunidades', solo: 'Depende do tempo disponível para acompanhar promoções e mudanças do mercado.', gerido: 'O mercado é acompanhado continuamente e as oportunidades são filtradas de acordo com o seu perfil.' },
  { topic: 'Cartões', solo: 'A escolha costuma acontecer de forma pontual, quando surge uma oferta ou indicação.', gerido: 'A carteira é revisada ao longo do tempo, considerando gastos, benefícios e novas opções disponíveis no mercado.' },
  { topic: 'Transferências', solo: 'Os pontos são movimentados quando aparece uma promoção ou quando surge uma necessidade.', gerido: 'Cada transferência é analisada considerando bônus, programa de destino e a melhor alocação do patrimônio para os objetivos do cliente.' },
  { topic: 'Emissões', solo: 'É preciso pesquisar datas, rotas, programas, disponibilidade e possibilidades a cada viagem.', gerido: 'Analisamos rotas, cabines, disponibilidade e benefícios para estruturar a emissão mais adequada para cada viagem.' },
  { topic: 'Patrimônio', solo: 'Saldos, validades, regras e benefícios ficam distribuídos entre diferentes programas.', gerido: 'Tudo é acompanhado de forma centralizada, com atenção a saldos, vencimentos e oportunidades de uso.' },
  { topic: 'Viagem', solo: 'Depois da emissão, as próximas etapas voltam a depender do próprio passageiro.', gerido: 'Check-in, assentos, benefícios, upgrades, alterações e demais etapas da viagem continuam sob a nossa gestão.' },
];

// `audio` é o número do arquivo em src/assets/depoimentos/ (depo-0N.mp3); sem ele, o depoimento é só texto.
export const DEPOIMENTOS = [
  { initials: 'M.H.', audio: 1, text: ['Eu não fazia ideia do quanto uma empresa para gerenciar a parte de viagens e milhas ia fazer diferença na minha vida. Minha mãe já veio me visitar várias vezes, meus irmãos vieram, tudo isso sem pagar pelas passagens.'] },
  { initials: 'N.V.', text: ['Conheci o trabalho do Bruno ainda no início e sempre indico para as pessoas porque sei que ele leva tudo com muita seriedade e carinho. Sempre focado em fazer a gestão das milhas de forma personalizada, sempre leva em conta a opinião do cliente e é disponível, solícito e proativo.', 'Viajo com minha família de três a quatro vezes por ano e sempre posso contar com a organização da agência em pesquisar os melhores preços e oportunidades. A ACERVATIO é 10!'] },
  { initials: 'C.M.', audio: 2, text: ['Agora eu não me preocupo mais com passagem. Não perco mais aquele tempo que, para nós médicos, é tão precioso. É um investimento muito baixo perto do quanto eu economizei nas minhas viagens.'] },
  { initials: 'F.G.', text: ['Quero deixar meu agradecimento à ACERVATIO, que tem facilitado muito a nossa vida. Com atenção, agilidade e um cuidado raro, eles entendem nosso perfil e encontram as melhores opções, poupando tempo e ajudando a economizar de verdade.', 'Mais do que o serviço, é a tranquilidade de ter alguém de confiança cuidando das nossas viagens. A experiência tem sido muito positiva, por isso deixo aqui meu agradecimento.'] },
  { initials: 'W.B.', audio: 3, text: ['Sou bem criterioso, bem exigente, e é uma das poucas empresas que conseguem me entender do jeito que eu preciso. A viagem chega totalmente pronta, e ele fica atento o tempo inteiro enquanto você está viajando.'] },
  { initials: 'H.N.', text: ['Passando pra te passar um feedback das últimas viagens que fiz com você, mas principalmente essa última. Seu trabalho foi impecável do início ao fim.', 'Com a vida corrida de empresário e com família, poder só chegar no aeroporto e embarcar sem me preocupar com absolutamente nada, chegar em São Paulo, já ter o carro que escolhi reservado e pronto para retirar e nem ter precisado pensar na reserva de hotel foi fantástico!', 'Deus abençoe sua vida e seu trabalho! Você me proporcionou momentos incríveis com minha família, sem um pingo de preocupação se algo daria certo ou não.'] },
  { initials: 'Y.B.', audio: 4, text: ['Eu chegava a trocar as milhas por cafeteiras, sem saber todo o potencial que elas poderiam oferecer. Hoje consigo enxergar as milhas e as viagens de uma forma muito mais estratégica.'] },
  { initials: 'L.F.', audio: 5, text: ['Estamos extremamente satisfeitos: pontualidade, excelência no atendimento, segurança nas viagens e economia. Viagens de férias que se tornam memoráveis para as nossas vidas.'] },
];

export const FAQS = [
  { q: 'A gestão da ACERVATIO faz sentido para qualquer pessoa?', a: 'Nem sempre. Antes de iniciar, entendemos seus gastos, frequência de viagens, cartões e objetivos. A partir disso, avaliamos se uma gestão contínua realmente faz sentido para o seu perfil.' },
  { q: 'O que muda quando tenho a ACERVATIO cuidando da minha gestão?', a: 'Você deixa de acompanhar sozinho cartões, programas, promoções, transferências e detalhes de cada viagem. Nós cuidamos dessa gestão de forma contínua para que você possa se concentrar nas decisões que realmente importam.' },
  { q: 'A gestão pode me ajudar a viajar melhor gastando menos?', a: 'Esse é um dos objetivos, mas cada caso é diferente. Nosso trabalho é entender o patrimônio que você já possui e utilizá-lo de forma mais eficiente, evitando decisões ruins e buscando as melhores possibilidades para cada viagem.' },
  { q: 'A ACERVATIO cuida apenas de pontos e milhas?', a: 'Não. Pontos e milhas fazem parte da gestão, mas o trabalho acompanha toda a viagem: passagens, hospedagem, seguro, transfers, locação de veículos, check-in, benefícios, upgrades, alterações e suporte.' },
  { q: 'Como funciona o acesso às minhas contas e programas?', a: 'Não solicitamos senha bancária, token ou acesso à sua conta corrente. A gestão utiliza apenas os acessos necessários aos programas de fidelidade e serviços relacionados, sempre com autorização do cliente.' },
];

export const SITE_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'metodo', label: 'Método' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'diferenca', label: 'A Diferença' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contato', label: 'Contato' },
];
