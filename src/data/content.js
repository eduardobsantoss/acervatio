export const WA_NUMBER = '5534992359502';
export const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
export const WA_URL = waLink('Olá, quero saber mais sobre a gestão de milhas da Acervatio.');

export const GASTO_OPCOES = ['Até R$ 10 mil', 'R$ 10 mil a R$ 25 mil', 'R$ 25 mil a R$ 50 mil', 'R$ 50 mil a R$ 100 mil', 'Acima de R$ 100 mil'];
export const VIAGENS_OPCOES = ['1 a 2', '3 a 5', '6 a 10', 'Mais de 10'];

// TODO: substituir "#" pela URL real do sistema externo de acesso do cliente
export const CLIENTE_URL = '#';

export const SERVICOS = [
  { tab: 'Cartões', title: 'Curadoria de cartões', desc: 'Acompanhamento do mercado e avaliação de cartões, benefícios e novas oportunidades compatíveis com o perfil de cada cliente.' },
  { tab: 'Pontos e milhas', title: 'Gestão de pontos e milhas', desc: 'Acompanhamento contínuo de saldos, validade, transferências e oportunidades, com estratégia para preservar e potencializar o valor dos seus pontos e milhas.' },
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
  { letter: 'E', title: 'Experiência', desc: 'Acompanhamos cada etapa da sua viagem, inclusive após a emissão, buscando oportunidades de upgrade, melhores assentos, benefícios e ajustes que possam tornar a experiência ainda melhor.' },
];

// Cada case corresponde ao print de mesmo número em src/assets/cases/.
export const CASES = [
  { label: 'Gestão patrimonial', value: 'R$ 6.171,50', context: 'de economia em 2 passagens para Curaçao' },
  { label: 'Patrimônio potencializado', value: '+300 mil pontos em 12 meses', context: 'com o mesmo volume de gastos' },
  { label: 'Economia', value: 'Mais de R$ 6.500', context: 'Miami, voo direto pagando apenas as taxas' },
  { label: 'Transferência bonificada', value: '+132 mil milhas', context: 'Pontos transferidos no momento certo' },
  { label: 'Upgrade confirmado', value: 'Classe Executiva', context: 'Lisboa → Campinas, sem custo adicional' },
  { label: 'Reacomodação resolvida', value: 'Viagem reorganizada', context: 'Reserva e assentos ajustados antes do embarque' },
  { label: 'Reserva estratégica', value: 'Classe Executiva', context: 'Nova York → São Paulo, com prazo para completar as milhas da reserva' },
  { label: 'Economia', value: 'R$ 1.414,46', context: 'Premium Economy por R$ 347,54' },
  { label: 'Benefícios otimizados', value: 'R$ 1.260 em economia', context: 'Assentos premium para toda a família' },
  { label: 'Economia', value: 'R$ 10.754,20', context: 'São Paulo → Dallas por R$ 280,67 por pessoa' },
  { label: 'Economia', value: 'R$ 6.313,68', context: 'Ida e volta para o Chile' },
  { label: 'Economia', value: 'R$ 3.882,12', context: 'Raleigh → São Paulo por R$ 29,88' },
  { label: 'Economia', value: 'R$ 2.032,43', context: 'Emissão 100% com milhas e assentos premium incluídos' },
  { label: 'Economia', value: 'R$ 15.775,03', context: 'São Paulo → Madri, ida e volta' },
  { label: 'Economia', value: 'R$ 6.280,92', context: 'São Paulo → Paris, ida e volta' },
  { label: 'Economia', value: 'R$ 3.223,46', context: 'Passagem emitida com assento premium incluído' },
  { label: 'Economia', value: 'R$ 4.388,00', context: 'Uberlândia → Ilhéus, 2 passageiros' },
  { label: 'Economia', value: 'R$ 34.068,72', context: 'Viagem em família' },
  { label: 'Economia', value: 'R$ 8.991,00', context: 'Hospedagem em família no Réveillon' },
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

// Menu do cabeçalho (desktop e mobile); o rodapé acrescenta "Contato".
export const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'O que fazemos' },
  { id: 'metodo', label: 'Método LEME' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'diferenca', label: 'Comparativo' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'faq', label: 'FAQ' },
];

export const SITE_LINKS = [...NAV_LINKS, { id: 'contato', label: 'Contato' }];
