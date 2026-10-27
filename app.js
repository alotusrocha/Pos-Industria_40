/**
 * ECO-MINERAÇÃO 4.0 & ECONOMIA CIRCULAR
 * Motor Interativo & Apresentação Executiva
 * APL de Rochas Ornamentais de Cachoeiro de Itapemirim (ES)
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA MODEL: CENÁRIOS, PONTOS ESTRATÉGICOS & VISÃO DE NEGÓCIO
  // =========================================================================
  const scenarios = {
    1: {
      number: "01",
      tag: "CIRCUITO FECHADO DE RECIRCULAÇÃO",
      title: "Gestão Hídrica & Recirculação",
      kpiHighlight: "94.2% REUSO",
      lead: "Eficiência hídrica com taxa de recirculação superior a 90%, eliminando descarga de efluentes no Rio Itapemirim e reduzindo custos de captação.",
      accent: "#3898A8",
      accentGlow: "rgba(56, 152, 168, 0.28)",
      costVsInvest: {
        costs: [
          "Alto custo mensal com outorga e compra de água de reposição",
          "Risco contínuo de autuações do IEMA e litígios por descarte no rio",
          "Dependência de bacias com risco de transbordamento e assoreamento"
        ],
        investments: [
          "Recuperação hídrica >90% com economia de mais de R$ 580 mil/ano",
          "Segurança jurídica total com telemetria contínua e descarga zero",
          "Blindagem reputacional da marca e atratividade ESG perante o mercado"
        ]
      },
      kpis: [
        { val: "94.2%", lbl: "Recirculação Hídrica" },
        { val: "-82%", lbl: "Captação Água Nova" },
        { val: "0.0 NTU", lbl: "Descarte no Rio" }
      ],
      hotspots: [
        {
          id: "h1_1",
          code: "01.1",
          title: "Clarificação & Floculação",
          summary: "Tanques decantadores cilíndrico-cônicos aceleram a sedimentação dos finos de rocha com polímeros.",
          roi: "Permite recircular 94% da água clarificada para os teares diamantados, reduzindo drasticamente a necessidade de água nova.",
          coords: { top: "62%", left: "43%" },
          norma: "CONAMA 357 / NBR 9898",
          specs: [
            { label: "Taxa de Sedimentação", val: "1.8 m/h" },
            { label: "Dosagem Floculante", val: "1.2 ppm (Aniônico)" },
            { label: "Turbidez de Entrada", val: "8.500 NTU" },
            { label: "Turbidez Clarificada", val: "< 12 NTU" }
          ],
          widgetType: "flocculation_slider",
          regText: "Atendimento aos limites de sólidos suspensos totais para reuso industrial contínuo na serraria."
        },
        {
          id: "h1_2",
          code: "01.2",
          title: "Filtros-Prensa de Alta Pressão",
          summary: "Desidratação mecânica da polpa abrasiva sob 16 bar, recuperando água límpida e gerando tortas sólidas.",
          roi: "Substitui bacias de lama a céu aberto e entrega tortas secas (<18% umidade) prontas para fabricação de pavers e empilhamento a seco.",
          coords: { top: "58%", left: "69%" },
          norma: "ABNT NBR 10004 / NR-12",
          specs: [
            { label: "Pressão de Prensagem", val: "16 bar" },
            { label: "Duração do Ciclo", val: "42 min" },
            { label: "Umidade Residual", val: "16.8%" },
            { label: "Recuperação Hídrica", val: "94.5%" }
          ],
          widgetType: "press_slider",
          regText: "Classificação como resíduo sólido desidratado estável, seguro para manuseio e logística secundária."
        },
        {
          id: "h1_3",
          code: "01.3",
          title: "Telemetria SCADA de Balanço Hídrico",
          summary: "Sensores IoT de vazão e nível registram em tempo real o volume recirculado e o consumo de reposição.",
          roi: "Monitoramento em nuvem que comprova o cumprimento das metas de outorga da AGERH e previne desperdícios operacionais.",
          coords: { top: "35%", left: "52%" },
          norma: "Protocolo MQTT / ISA-95",
          specs: [
            { label: "Vazão do Circuito", val: "145 m³/h" },
            { label: "Água Nova Poupada", val: "3.270 m³/mês" },
            { label: "Economia Financeira", val: "R$ 49.050/mês" },
            { label: "Precisão dos Sensores", val: "±0.2% (Eletromagnético)" }
          ],
          widgetType: "scada_flow",
          regText: "Dados digitais auditáveis em conformidade com as condicionantes de operação do IEMA."
        },
        {
          id: "h1_4",
          code: "01.4",
          title: "Monitoramento de Turbidez (Descarga Zero)",
          summary: "Sondas de pH e turbidez no canal de drenagem pluvial com válvula de bloqueio preventivo para o Rio Itapemirim.",
          roi: "Blindagem jurídica contra multas milionárias por assoreamento e contaminação hídrica em eventos de fortes chuvas.",
          coords: { top: "86%", left: "24%" },
          norma: "Resolução CONAMA 357 / Rio Classe 2",
          specs: [
            { label: "Turbidez Medida", val: "3.8 NTU (Normal)" },
            { label: "pH Monitorado", val: "7.35 (Faixa 6-9)" },
            { label: "Tempo de Bloqueio", val: "< 1.2s (Válvula Atuadora)" },
            { label: "Volume de Efluente Bruto", val: "0.00 m³" }
          ],
          widgetType: "outfall_test",
          regText: "Garantia física e digital de descarga zero, preservando a calha do Rio Itapemirim."
        }
      ]
    },

    2: {
      number: "02",
      tag: "ECONOMIA CIRCULAR & 3 ROTAS DE VALORAÇÃO",
      title: "Economia Circular & Subprodutos",
      kpiHighlight: "3 ROTAS DE VALORAÇÃO",
      lead: "Valoração econômica por três rotas industriais (Cerâmica Vermelha, Agregados CONAMA 307 e Fíler Nobre) e empilhamento a seco, extinguindo passivos de barragens no APL.",
      accent: "#C5A059",
      accentGlow: "rgba(197, 160, 89, 0.28)",
      costVsInvest: {
        costs: [
          "Gastos anuais contínuos com dragagem e contenção de bacias de lamas",
          "Descarte não aproveitado de cascalhos e finos de serragem em aterros",
          "Passivo ambiental acumulado no balanço patrimonial da empresa mineral"
        ],
        investments: [
          "Rota A: Cerâmica Vermelha com Payback de 14 meses (economia R$ 28/t)",
          "Rota B: Agregados e Pavers CONAMA 307 com Payback de 18 meses (R$ 45/t)",
          "Rota C: Fíler Nobre com alta agregação (+R$ 110/t de margem líquida)"
        ]
      },
      kpis: [
        { val: "2.000 t/m", lbl: "Capacidade Base (v5)" },
        { val: "R$ 165/t", lbl: "Pico de Valoração (Rota C)" },
        { val: "0 m³", lbl: "Volume em Barragens" }
      ],
      hotspots: [
        {
          id: "h2_1",
          code: "02.1",
          title: "Empilhamento a Seco (Dry Stacking)",
          summary: "Disposição controlada e compactada de tortas desidratadas de filtro-prensa (<15% umidade) em pilhas estáveis.",
          roi: "Extinção permanente de bacias e barragens de lamas abrasivas, zerando risco de liquefação e liberando área útil.",
          coords: { top: "14%", left: "75%" },
          norma: "NBR 10004 (Classe II B) / IEMA",
          specs: [
            { label: "Fator de Segurança (FS)", val: "1.85 (Estável)" },
            { label: "Umidade da Torta", val: "< 15.0%" },
            { label: "Ângulo de Atrito", val: "34°" },
            { label: "Risco Geotécnico", val: "NULO" }
          ],
          widgetType: "stacking_slider",
          regText: "Atende integralmente às diretrizes da ANM e IEMA para extinção definitiva de barragens no Espírito Santo."
        },
        {
          id: "h2_2",
          code: "02.2",
          title: "Rota A: Incorporação em Cerâmica Vermelha",
          summary: "Substituição de 10% a 20% da argila por pó de granito/mármore de multifio na fabricação de tijolos, blocos e telhas.",
          roi: "Menor investimento de adaptação (CAPEX R$ 180k) e payback recorde de 14 meses com economia térmica na queima.",
          coords: { top: "40%", left: "88%" },
          norma: "ABNT NBR 10004 (Inerte) / Cerâmica",
          specs: [
            { label: "CAPEX Estimado", val: "R$ 180.000" },
            { label: "OPEX Operacional", val: "R$ 18,50 / ton" },
            { label: "Economia Gerada", val: "R$ 28,00 / ton" },
            { label: "Payback Estimado", val: "14 meses (Raio 45 km)" }
          ],
          widgetType: "rota_a_calc",
          regText: "O fino atua como fundente, reduzindo a temperatura dos fornos de 950°C para 900°C e economizando combustível."
        },
        {
          id: "h2_3",
          code: "02.3",
          title: "Rota B: Agregados Reciclados & Pavers (CONAMA 307)",
          summary: "Britagem mecânica de fragmentos de rocha e estabilização de finos para brita reciclada, sub-base e blocos intertravados.",
          roi: "Venda de agregado reciclado a R$ 45/t frente a R$ 75/t da brita virgem, atendendo prefeituras com payback de 18 meses.",
          coords: { top: "28%", left: "63%" },
          norma: "Resolução CONAMA nº 307/2002 / NBR 9781",
          specs: [
            { label: "CAPEX Estimado", val: "R$ 450.000" },
            { label: "OPEX Operacional", val: "R$ 22,00 / ton" },
            { label: "Preço de Venda", val: "R$ 45,00 / ton" },
            { label: "Payback Estimado", val: "18 meses (Raio 35 km)" }
          ],
          widgetType: "rota_b_calc",
          regText: "Enquadramento normativo na Resolução CONAMA 307/2002 e NBR 9781 (pavers com fck > 35 MPa)."
        },
        {
          id: "h2_4",
          code: "02.4",
          title: "Rota C: Fíler Nobre & Argamassas Ecoeficientes",
          summary: "Secagem rápida, micronização e ensacamento do resíduo de multifio diamantado para fíler de alta pureza.",
          roi: "Maior valor agregado regional (R$ 140 a R$ 190/t - média R$ 165/t) com margem líquida de +R$ 110/t e raio viável até 120 km.",
          coords: { top: "52%", left: "42%" },
          norma: "ABNT NBR 10004 / NBR 16697",
          specs: [
            { label: "CAPEX Estimado", val: "R$ 920.000" },
            { label: "OPEX Operacional", val: "R$ 55,00 / ton" },
            { label: "Valor de Mercado", val: "R$ 165,00 / ton" },
            { label: "Payback Estimado", val: "22 meses (Raio 120 km)" }
          ],
          widgetType: "rota_c_calc",
          regText: "Matéria-prima nobre para indústrias de argamassa colante, tintas e polímeros no Espírito Santo e Rio de Janeiro."
        },
        {
          id: "h2_5",
          code: "02.5",
          title: "Rastreabilidade Digital & UNS PMI 4.0",
          summary: "Identificação digital por lote com ensaios de lixiviação e telemetria integrada à plataforma didática PMI 4.0.",
          roi: "Comprovação digital auditável para compras públicas sustentáveis e governança em tempo real.",
          coords: { top: "74%", left: "54%" },
          norma: "Protocolo MQTT / ISA-95 / PMI 4.0",
          specs: [
            { label: "Plataforma Online", val: "pmi40.siteser.com.br" },
            { label: "Barramento UNS", val: "MQTT / Sparkplug B" },
            { label: "Certificação Lote", val: "100% Digital / QR Code" },
            { label: "Conformidade", val: "Auditoria ANM / IEMA" }
          ],
          widgetType: "pmi40_uns",
          regText: "Garantia de governança ambiental auditável simulada no protótipo desenvolvido por Everton Santos Rocha."
        }
      ]
    },

    3: {
      number: "03",
      tag: "MINERAÇÃO 4.0 & GOVERNANÇA",
      title: "Mineração 4.0 & Licença Social",
      kpiHighlight: "IOT & GOVERNANÇA",
      lead: "Integração de sensoriamento contínuo em perímetro fabril com transparência comunitária, compliance ambiental e cooperativismo.",
      accent: "#3B8A6E",
      accentGlow: "rgba(59, 138, 110, 0.28)",
      costVsInvest: {
        costs: [
          "Conflitos vicinais recorrentes com a comunidade vizinha por ruído e poeira",
          "Processos burocráticos lentos de renovação de Licença de Operação (LO)",
          "Risco de interrupção ou embargo das atividades em períodos de fiscalização"
        ],
        investments: [
          "Estações IoT perimétricas contínuas com aspersão automática de névoa",
          "Geração de 38 postos formais em parceria com cooperativas da região",
          "Conquista da Licença Social para Operar (SLO) e governança IEMA 100% no prazo"
        ]
      },
      kpis: [
        { val: "38 µg/m³", lbl: "PTS Perimétrico (NR-15/22)" },
        { val: "38 Vagas", lbl: "Renda em Cooperativa Local" },
        { val: "100%", lbl: "Condicionantes IEMA/ANM" }
      ],
      hotspots: [
        {
          id: "h3_1",
          code: "03.1",
          title: "Sensores IoT de Poeira e Ruído",
          summary: "Estações autônomas solares medindo particulados totais (PTS) e decibéis em tempo real no perímetro.",
          roi: "Acionamento automatizado de canhões de névoa antes de qualquer reclamação, blindando a empresa de autuações do MTE e IEMA.",
          coords: { top: "45%", left: "8%" },
          norma: "NR-15 / NR-22 / NHO-01",
          specs: [
            { label: "Partículas Totais (PTS)", val: "38 µg/m³ (Limite 240)" },
            { label: "Ruído Perimétrico", val: "56.5 dB(A) (Conforme)" },
            { label: "Transmissão", val: "LoRaWAN Solar" },
            { label: "Spray Automático", val: "Ativa se PTS > 120 µg" }
          ],
          widgetType: "iot_sensor_slider",
          regText: "Conformidade integral com normas regulamentadoras de higiene ocupacional e proteção da vizinhança."
        },
        {
          id: "h3_2",
          code: "03.2",
          title: "Cooperativismo e Renda Local",
          summary: "Pátio de triagem e acabamento de subprodutos operado em parceria com cooperativa local de Cachoeiro.",
          roi: "Fortalece a cadeia de suprimentos local, atrai incentivos fiscais e gera impacto social positivo mensurável nos relatórios ESG.",
          coords: { top: "38%", left: "42%" },
          norma: "ODS 8 (Trabalho Decente) / ODS 12",
          specs: [
            { label: "Postos Diretos", val: "38 cooperados formais" },
            { label: "Aumento de Renda", val: "+42% vs informalidade" },
            { label: "Capacitação Técnica", val: "Parceria IFES / CETEM" },
            { label: "Segurança no Trabalho", val: "100% com EPIs NR-6" }
          ],
          widgetType: "coop_social_calc",
          regText: "Geração de valor compartilhado e desenvolvimento regional formal no APL de Cachoeiro."
        },
        {
          id: "h3_3",
          code: "03.3",
          title: "Portal de Transparência Socioambiental",
          summary: "Totem público digital na portaria com indicadores ambientais abertos e canal direto de ouvidoria.",
          roi: "Constrói relação de confiança inquestionável com moradores e lideranças de bairro, mitigando riscos de protestos e litígios.",
          coords: { top: "68%", left: "80%" },
          norma: "Metodologia PNUMA / APELL / ESG",
          specs: [
            { label: "Acesso Comunitário", val: "Totem Público 24/7" },
            { label: "Tempo de Resposta", val: "< 24 horas" },
            { label: "Índice de Confiança (SLO)", val: "88.5% Aprovação" },
            { label: "Visitas Escolares", val: "24 turmas/ano" }
          ],
          widgetType: "totem_dialog_sim",
          regText: "Metodologia internacional de Licença Social para Operar (Social License to Operate - SLO)."
        },
        {
          id: "h3_4",
          code: "03.4",
          title: "Gestão Digital de Licenças (IEMA / ANM)",
          summary: "Módulo integrado no ERP controlando cronograma e evidências de cumprimento das 32 condicionantes ambientais.",
          roi: "Elimina risco de perda de prazos de renovação de LO, acelerando aprovações e transmitindo governança madura para investidores.",
          coords: { top: "82%", left: "51%" },
          norma: "Legislação ANM / Resoluções IEMA",
          specs: [
            { label: "Condicionantes Ativas", val: "32 itens monitorados" },
            { label: "Cumprimento no Prazo", val: "100% das obrigações" },
            { label: "Alerta Preditivo", val: "180 dias de antecedência" },
            { label: "Repositório de Provas", val: "Nuvem com assinatura ICP" }
          ],
          widgetType: "compliance_radar",
          regText: "Conformidade preventiva e segurança jurídica total perante os órgãos fiscalizadores."
        }
      ]
    }
  };

  // =========================================================================
  // TECHNOLOGICAL ROUTES DATA (Proposta Técnica v5 — Outubro/2026)
  // =========================================================================
  const technologicalRoutes = {
    rota_a: {
      key: "rota_a",
      letter: "A",
      code: "ROTA A",
      name: "Cerâmica Vermelha",
      fullName: "Incorporação em Cerâmica Vermelha e Revestimentos",
      norma: "ABNT NBR 10004 (Classe II B / Inerte)",
      logistics: "Raio Logístico: Até 45 km",
      desc: "Substituição de 10% a 20% da massa argilosa por pó de granito/mármore de multifio na fabricação de tijolos, blocos cerâmicos e telhas. O fino mineral atua como fundente, reduzindo a temperatura de queima dos fornos de 950°C para 900°C e diminuindo o consumo de biomassa/gás.",
      capex: 180000,
      capexStr: "R$ 180.000",
      capexSub: "Adaptação / Peneiramento",
      opexPerTon: 18.50,
      opexStr: "R$ 18,50 / ton",
      opexSub: "Secagem / Dosagem",
      receitaPerTon: 28.00,
      receitaStr: "R$ 28,00 / ton",
      marginPerTon: 9.50,
      marginSub: "Margem Líq: +R$ 9,50/t",
      paybackStr: "14 meses",
      paybackSub: "Retorno Mais Rápido",
      highlightText: "Rota A: +R$ 28,00 / ton"
    },
    rota_b: {
      key: "rota_b",
      letter: "B",
      code: "ROTA B",
      name: "Agregados CONAMA 307",
      fullName: "Agregados Reciclados para Pavimentação e Concreto Urbano",
      norma: "Resolução CONAMA nº 307/2002 / NBR 9781",
      logistics: "Raio Logístico: Até 35 km",
      desc: "Processamento de fragmentos rígidos de rocha e lama desidratada estabilizada com cimento para produção de brita reciclada, sub-base de pavimentação e calçamento (paver/meio-fio), em conformidade com as diretrizes da Resolução CONAMA nº 307/2002. Preço de venda a R$ 45/t frente a R$ 75/t da brita virgem.",
      capex: 450000,
      capexStr: "R$ 450.000",
      capexSub: "Britador Móvel / Misturador",
      opexPerTon: 22.00,
      opexStr: "R$ 22,00 / ton",
      opexSub: "Moagem / Prensagem Pavers",
      receitaPerTon: 45.00,
      receitaStr: "R$ 45,00 / ton",
      marginPerTon: 23.00,
      marginSub: "Margem Líq: +R$ 23,00/t",
      paybackStr: "18 meses",
      paybackSub: "Alta Demanda em Obras",
      highlightText: "Rota B: +R$ 45,00 / ton"
    },
    rota_c: {
      key: "rota_c",
      letter: "C",
      code: "ROTA C",
      name: "Fíler & Argamassas",
      fullName: "Cimentos Ecoeficientes, Argamassas e Fíler de Alta Pureza",
      norma: "ABNT NBR 10004 / NBR 16697",
      logistics: "Raio Logístico: Até 120 km",
      desc: "Secagem rápida, micronização e acondicionamento de resíduo puro de multifio diamantado (Classe II B) para aplicação como fíler carbonático/silicoso em indústrias de argamassa colante, tintas e polímeros. Entrega a mais alta valorização regional (R$ 140 a R$ 190/t - média R$ 165/t).",
      capex: 920000,
      capexStr: "R$ 920.000",
      capexSub: "Secagem Rápida & Moinho Fino",
      opexPerTon: 55.00,
      opexStr: "R$ 55,00 / ton",
      opexSub: "Micronização / Ensacamento",
      receitaPerTon: 165.00,
      receitaStr: "R$ 165,00 / ton",
      marginPerTon: 110.00,
      marginSub: "Margem Líq: +R$ 110,00/t",
      paybackStr: "22 meses",
      paybackSub: "Maior Valor Agregado",
      highlightText: "Rota C: +R$ 165,00 / ton"
    }
  };

  // Formal Citation ABNT String (Everton Santos Rocha - IFES 2026)
  const formalCitationString = `ROCHA, Everton Santos. Plano de Mineração Inteligente 4.0 (PMI 4.0): protótipo didático de governança e monitoramento de resíduos minerais em tempo real. Vitória: Instituto Federal do Espírito Santo (IFES), 2026. Disponível em: <https://pmi40.siteser.com.br/>. Acesso em: 27 out. 2026.`;

  // =========================================================================
  // 2. STATE & DOM REFERENCES
  // =========================================================================
  let currentScenarioId = 1;
  let activeHotspotIndex = 0;
  let isAudioEnabled = true; // Audio ON by default as requested
  let activeRouteKey = 'rota_a';
  let activeVolume = 2000;

  // Tabs & Nav
  const navTabs = document.querySelectorAll('.nav-tab');

  // Summary Card Elements
  const scenarioTag = document.getElementById('scenarioTag');
  const scenarioKpiHighlight = document.getElementById('scenarioKpiHighlight');
  const scenarioTitle = document.getElementById('scenarioTitle');
  const scenarioLead = document.getElementById('scenarioLead');

  // ROI Cost vs Invest Lists
  const traditionalCostList = document.getElementById('traditionalCostList');
  const greenInvestmentList = document.getElementById('greenInvestmentList');

  // Diorama Elements
  const hotspotsLayer = document.getElementById('hotspotsLayer');
  const scenarioImages = {
    1: document.getElementById('imgScenario1'),
    2: document.getElementById('imgScenario2'),
    3: document.getElementById('imgScenario3')
  };

  // Spotlight Card Elements
  const spotlightCode = document.getElementById('spotlightCode');
  const spotlightNorm = document.getElementById('spotlightNorm');
  const spotlightTitle = document.getElementById('spotlightTitle');
  const spotlightSummary = document.getElementById('spotlightSummary');
  const spotlightRoi = document.getElementById('spotlightRoi');
  const btnOpenDeepInspect = document.getElementById('btnOpenDeepInspect');

  // Points Grid
  const pointsGrid = document.getElementById('pointsGrid');
  const pointsCounter = document.getElementById('pointsCounter');

  // Telemetry Strip
  const telVal1 = document.getElementById('telVal1');
  const telLbl1 = document.getElementById('telLbl1');
  const telVal2 = document.getElementById('telVal2');
  const telLbl2 = document.getElementById('telLbl2');
  const telVal3 = document.getElementById('telVal3');
  const telLbl3 = document.getElementById('telLbl3');

  // Technical Drawer Elements
  const technicalDrawer = document.getElementById('technicalDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');
  const drawerCode = document.getElementById('drawerCode');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerDescription = document.getElementById('drawerDescription');
  const drawerSpecsGrid = document.getElementById('drawerSpecsGrid');
  const drawerWidgetContainer = document.getElementById('drawerWidgetContainer');
  const drawerRegulatoryText = document.getElementById('drawerRegulatoryText');
  const btnNextPoint = document.getElementById('btnNextPoint');

  // Executive ROI Modal Elements
  const executiveModal = document.getElementById('executiveModal');
  const executiveBackdrop = document.getElementById('executiveBackdrop');
  const btnOpenExecutive = document.getElementById('btnOpenExecutive');
  const btnCloseExecutive = document.getElementById('btnCloseExecutive');

  // Academic Dossier Modal Elements
  const dossierModal = document.getElementById('dossierModal');
  const dossierBackdrop = document.getElementById('dossierBackdrop');
  const btnOpenDossier = document.getElementById('btnOpenDossier');
  const btnCloseDossier = document.getElementById('btnCloseDossier');
  const btnPrintDossier = document.getElementById('btnPrintDossier');

  // Author Modal Elements (Everton Santos Rocha - IFES)
  const authorModal = document.getElementById('authorModal');
  const authorBackdrop = document.getElementById('authorBackdrop');
  const btnCloseAuthor = document.getElementById('btnCloseAuthor');
  const btnOpenAuthorModalHeader = document.getElementById('btnOpenAuthorModalHeader');
  const btnOpenAuthorModalFooter = document.getElementById('btnOpenAuthorModalFooter');
  const btnCopyAuthorCitation = document.getElementById('btnCopyAuthorCitation');
  const btnCopyFooterCitation = document.getElementById('btnCopyFooterCitation');
  const copyAuthorCitationLabel = document.getElementById('copyAuthorCitationLabel');
  const footerCopyLabel = document.getElementById('footerCopyLabel');
  const citationToast = document.getElementById('citationToast');

  // Stage View Switcher Elements (Clean & fast switching without vertical scroll)
  const btnTabSpotlight = document.getElementById('btnTabSpotlight');
  const btnTabRoutes = document.getElementById('btnTabRoutes');
  const spotlightCard = document.getElementById('spotlightCard');
  const routesValuationCard = document.getElementById('routesValuationCard');
  const btnQuickHeaderRoutes = document.getElementById('btnQuickHeaderRoutes');
  const btnQuickToRoutes = document.getElementById('btnQuickToRoutes');
  const btnSwitchBackToSpotlight = document.getElementById('btnSwitchBackToSpotlight');
  const volPresetChips = document.querySelectorAll('.btn-vol-chip');
  const ladderStepA = document.getElementById('ladderStepA');
  const ladderStepB = document.getElementById('ladderStepB');
  const ladderStepC = document.getElementById('ladderStepC');

  // Route Valuation Card Elements
  const routeTabBtns = document.querySelectorAll('.route-tab-btn');
  const calcVolumeSlider = document.getElementById('calcVolumeSlider');

  // Audio Button
  const btnToggleAudio = document.getElementById('btnToggleAudio');

  // Stage View Switcher State & Handler
  let currentStageView = 'spotlight';

  function setStageView(viewName, smoothScroll = false) {
    currentStageView = viewName;
    const isSpotlight = (viewName === 'spotlight');

    if (btnTabSpotlight) {
      btnTabSpotlight.classList.toggle('active', isSpotlight);
      btnTabSpotlight.setAttribute('aria-selected', isSpotlight ? 'true' : 'false');
    }
    if (btnTabRoutes) {
      btnTabRoutes.classList.toggle('active', !isSpotlight);
      btnTabRoutes.setAttribute('aria-selected', !isSpotlight ? 'true' : 'false');
    }

    if (spotlightCard) {
      spotlightCard.classList.toggle('active', isSpotlight);
    }
    if (routesValuationCard) {
      routesValuationCard.classList.toggle('active', !isSpotlight);
    }

    if (smoothScroll) {
      const stageSlot = document.getElementById('stageCardSlot') || document.getElementById('stageViewBar');
      if (stageSlot) {
        stageSlot.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  // =========================================================================
  // 3. SOUND SYNTHESIZER (Refined Acoustic Mineral Tone)
  // =========================================================================
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Gracefully unlock audio on first interaction to comply with browser policies
  const unlockAudio = () => {
    initAudio();
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('touchstart', unlockAudio);
  };
  document.addEventListener('click', unlockAudio);
  document.addEventListener('touchstart', unlockAudio);

  function playUiSound(type = 'click') {
    if (!isAudioEnabled) return;
    initAudio();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(920, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'switch') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.14);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    }
  }

  // =========================================================================
  // 4. RENDER SCENARIO & UI REFRESH
  // =========================================================================
  function renderScenario(scenarioId) {
    currentScenarioId = scenarioId;
    const data = scenarios[scenarioId];
    if (!data) return;

    // Accent colors
    document.documentElement.style.setProperty('--accent-current', data.accent);
    document.documentElement.style.setProperty('--accent-glow-current', data.accentGlow);

    // Update Nav Tabs
    navTabs.forEach(tab => {
      tab.classList.toggle('active', parseInt(tab.getAttribute('data-scenario')) === scenarioId);
    });

    // Cross-fade Diorama Images
    Object.keys(scenarioImages).forEach(key => {
      scenarioImages[key].classList.toggle('active', parseInt(key) === scenarioId);
    });

    // Update Scenario Summary
    scenarioTag.textContent = data.tag;
    scenarioKpiHighlight.textContent = data.kpiHighlight;
    scenarioTitle.textContent = data.title;
    scenarioLead.textContent = data.lead;

    // Update ROI Cost vs Investment
    traditionalCostList.innerHTML = data.costVsInvest.costs.map(c => `<li>${c}</li>`).join('');
    greenInvestmentList.innerHTML = data.costVsInvest.investments.map(i => `<li>${i}</li>`).join('');

    // Update Telemetry
    telVal1.textContent = data.kpis[0].val;
    telLbl1.textContent = data.kpis[0].lbl;
    telVal2.textContent = data.kpis[1].val;
    telLbl2.textContent = data.kpis[1].lbl;
    telVal3.textContent = data.kpis[2].val;
    telLbl3.textContent = data.kpis[2].lbl;

    // Render Hotspot Beacons & Points Grid
    renderHotspots(data.hotspots);

    // If Scenario 2 (Economia Circular), immediately show Routes Valuation Card and route A
    if (scenarioId === 2) {
      setStageView('routes');
      updateRouteValuation('rota_a', activeVolume);
      selectHotspot(1); // 02.2 (Rota A - Cerâmica)
    } else {
      setStageView('spotlight');
      selectHotspot(0);
    }

    playUiSound('switch');
  }

  // Render Beacons on Diorama & Grid Cards
  function renderHotspots(hotspots) {
    hotspotsLayer.innerHTML = '';
    pointsGrid.innerHTML = '';
    pointsCounter.textContent = `${hotspots.length} Pontos Chave`;

    hotspots.forEach((item, index) => {
      // 1. Diorama Beacon Button (Clean, touch-friendly, NO overlapping tooltip balloons)
      const beacon = document.createElement('button');
      beacon.className = `hotspot-beacon ${index === activeHotspotIndex ? 'active' : ''}`;
      beacon.style.top = item.coords.top;
      beacon.style.left = item.coords.left;
      beacon.setAttribute('data-index', index);
      beacon.setAttribute('aria-label', item.title);
      beacon.innerHTML = `
        <span class="beacon-pulse"></span>
        <span class="beacon-core">${item.code}</span>
      `;
      beacon.addEventListener('click', (e) => {
        e.stopPropagation();
        selectHotspot(index);
      });
      hotspotsLayer.appendChild(beacon);

      // 2. Clean Point Card in the list below
      const card = document.createElement('button');
      card.className = `point-card ${index === activeHotspotIndex ? 'active' : ''}`;
      card.setAttribute('data-index', index);
      card.innerHTML = `
        <div class="point-badge-row">
          <span class="point-code">${item.code}</span>
          <span class="point-norm">${item.norma}</span>
        </div>
        <div class="point-name">${item.title}</div>
        <div class="point-roi-snippet">${item.roi}</div>
      `;
      card.addEventListener('click', () => {
        selectHotspot(index);
      });
      pointsGrid.appendChild(card);
    });
  }

  // Select a Hotspot & Update Spotlight
  function selectHotspot(index) {
    activeHotspotIndex = index;
    const currentData = scenarios[currentScenarioId];
    const item = currentData.hotspots[index];
    if (!item) return;

    // Update Beacons
    document.querySelectorAll('.hotspot-beacon').forEach((b, idx) => {
      b.classList.toggle('active', idx === index);
    });

    // Update Point Cards
    document.querySelectorAll('.point-card').forEach((c, idx) => {
      c.classList.toggle('active', idx === index);
    });

    // Update Spotlight Card (Always visible, clean, never cut off)
    spotlightCode.textContent = item.code;
    spotlightNorm.textContent = item.norma;
    spotlightTitle.textContent = item.title;
    spotlightSummary.textContent = item.summary;
    spotlightRoi.textContent = item.roi;

    // In Scenario 2, if clicking one of the 3 circular route hotspots, synchronize route valuation
    if (currentScenarioId === 2) {
      if (index === 1) {
        updateRouteValuation('rota_a', activeVolume);
      } else if (index === 2) {
        updateRouteValuation('rota_b', activeVolume);
      } else if (index === 3) {
        updateRouteValuation('rota_c', activeVolume);
      }
    }

    playUiSound('click');
  }

  // =========================================================================
  // 5. TECHNICAL DRAWER & SIMULATORS (For Deep Examination)
  // =========================================================================
  function openTechnicalDrawer(index) {
    const currentData = scenarios[currentScenarioId];
    const item = currentData.hotspots[index];
    if (!item) return;

    drawerCode.textContent = item.code;
    drawerTitle.textContent = item.title;
    drawerDescription.textContent = item.summary;
    drawerRegulatoryText.textContent = item.regText;

    // Specs Grid
    drawerSpecsGrid.innerHTML = item.specs.map(s => `
      <div class="spec-tile">
        <div class="spec-label">${s.label}</div>
        <div class="spec-val">${s.val}</div>
      </div>
    `).join('');

    // Dynamic Simulation Widget
    renderWidget(item.widgetType);

    // Open Drawer
    technicalDrawer.classList.add('active');
    technicalDrawer.setAttribute('aria-hidden', 'false');
    playUiSound('switch');
  }

  function closeTechnicalDrawer() {
    technicalDrawer.classList.remove('active');
    technicalDrawer.setAttribute('aria-hidden', 'true');
    playUiSound('click');
  }

  function renderWidget(type) {
    drawerWidgetContainer.innerHTML = '';
    switch(type) {
      case 'flocculation_slider':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Dosagem de Polímero Floculante:</span>
            <strong class="w-val" id="wPolyVal">1.2 ppm</strong>
          </div>
          <input type="range" class="w-slider" id="wPolySlider" min="0.5" max="2.5" step="0.1" value="1.2">
          <div class="w-results">
            <div>Tempo de Decantação: <strong id="wSettleVal">18 min</strong></div>
            <div>Clarificação da Água: <strong id="wClarifyVal" style="color:var(--accent-current)">98.5%</strong></div>
          </div>
        `;
        const wPolySlider = document.getElementById('wPolySlider');
        wPolySlider.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          document.getElementById('wPolyVal').textContent = `${val.toFixed(1)} ppm`;
          const mins = Math.max(8, Math.round(36 / (val * 1.5)));
          const clarify = Math.min(99.8, 86 + (val * 5.2));
          document.getElementById('wSettleVal').textContent = `${mins} min`;
          document.getElementById('wClarifyVal').textContent = `${clarify.toFixed(1)}%`;
        });
        break;

      case 'press_slider':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Pressão Hidráulica do Filtro-Prensa:</span>
            <strong class="w-val" id="wPressVal">16 bar</strong>
          </div>
          <input type="range" class="w-slider" id="wPressSlider" min="8" max="22" step="1" value="16">
          <div class="w-results">
            <div>Umidade Residual da Torta: <strong id="wMoistVal">16.8%</strong></div>
            <div>Recuperação Hídrica: <strong id="wRecVal" style="color:var(--accent-current)">94.5%</strong></div>
          </div>
        `;
        const wPressSlider = document.getElementById('wPressSlider');
        wPressSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('wPressVal').textContent = `${val} bar`;
          const moist = Math.max(12, 28 - (val * 0.7));
          const rec = Math.min(98.5, 82 + (val * 0.78));
          document.getElementById('wMoistVal').textContent = `${moist.toFixed(1)}%`;
          document.getElementById('wRecVal').textContent = `${rec.toFixed(1)}%`;
        });
        break;

      case 'scada_flow':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Vazão do Circuito de Teares:</span>
            <strong class="w-val" id="wFlowVal">145 m³/h</strong>
          </div>
          <input type="range" class="w-slider" id="wFlowSlider" min="80" max="250" step="5" value="145">
          <div class="w-results">
            <div>Água Nova Poupada: <strong id="wSavedWater">3.270 m³/mês</strong></div>
            <div>Economia Financeira: <strong id="wSavedCost" style="color:var(--accent-current)">R$ 49.050/mês</strong></div>
          </div>
        `;
        const wFlowSlider = document.getElementById('wFlowSlider');
        wFlowSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('wFlowVal').textContent = `${val} m³/h`;
          const savedVol = Math.round(val * 0.94 * 24 * 25);
          const savedR$ = Math.round(savedVol * 15);
          document.getElementById('wSavedWater').textContent = `${savedVol.toLocaleString('pt-BR')} m³/mês`;
          document.getElementById('wSavedCost').textContent = `R$ ${savedR$.toLocaleString('pt-BR')}/mês`;
        });
        break;

      case 'outfall_test':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Status da Válvula de Descarga:</span>
            <strong class="w-val" style="color:#00E676" id="wValveStat">NORMAL (DESCARGA ZERO)</strong>
          </div>
          <button class="btn-inspect-deep" id="btnTestRain" style="width:100%; justify-content:center; margin:8px 0;">
            Simular Pico de Chuva no Canal Pluvial
          </button>
          <div class="w-results">
            <div>Sólidos Despejados no Rio: <strong id="wOutfallRes" style="color:#00E676">0.0 kg (100% Contido)</strong></div>
          </div>
        `;
        const btnTestRain = document.getElementById('btnTestRain');
        btnTestRain.addEventListener('click', () => {
          const stat = document.getElementById('wValveStat');
          const res = document.getElementById('wOutfallRes');
          stat.textContent = 'INTERCEPTAÇÃO ATIVA (< 1.2s)';
          stat.style.color = '#FFB300';
          res.textContent = 'Desvio Automático para Tanque Pulmão';
          playUiSound('click');
          setTimeout(() => {
            stat.textContent = 'NORMAL (DESCARGA ZERO)';
            stat.style.color = '#00E676';
            res.textContent = '0.0 kg (Rio Itapemirim Preservado)';
          }, 3200);
        });
        break;

      case 'stacking_slider':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Grau de Compactação (Dry Stacking):</span>
            <strong class="w-val" id="wCompVal">98% Proctor</strong>
          </div>
          <input type="range" class="w-slider" id="wCompSlider" min="85" max="102" step="1" value="98">
          <div class="w-results">
            <div>Fator de Segurança (FS): <strong id="wFsVal">1.85</strong></div>
            <div>Risco de Liquefação: <strong style="color:#00E676">NULO (Estável)</strong></div>
          </div>
        `;
        const wCompSlider = document.getElementById('wCompSlider');
        wCompSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('wCompVal').textContent = `${val}% Proctor`;
          const fs = (1.2 + (val - 85) * 0.04).toFixed(2);
          document.getElementById('wFsVal').textContent = fs;
        });
        break;

      case 'paver_mix_slider':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Substituição de Areia por Fíler de Rocha:</span>
            <strong class="w-val" id="wMixVal">30%</strong>
          </div>
          <input type="range" class="w-slider" id="wMixSlider" min="10" max="45" step="5" value="30">
          <div class="w-results">
            <div>Resistência fck: <strong id="wFckVal" style="color:var(--accent-current)">38.5 MPa (NBR 9781)</strong></div>
            <div>Redução de Custo de Matéria-Prima: <strong id="wCostCut">-22%</strong></div>
          </div>
        `;
        const wMixSlider = document.getElementById('wMixSlider');
        wMixSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('wMixVal').textContent = `${val}%`;
          let fck = 35 + (val <= 30 ? (val * 0.15) : (4.5 - (val - 30) * 0.3));
          let cost = Math.round(val * 0.73);
          document.getElementById('wFckVal').textContent = `${fck.toFixed(1)} MPa`;
          document.getElementById('wCostCut').textContent = `-${cost}%`;
        });
        break;

      case 'crusher_balance':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Processamento no Britador de Mandíbulas:</span>
            <strong class="w-val" id="wCrushVal">15 t/h</strong>
          </div>
          <input type="range" class="w-slider" id="wCrushSlider" min="5" max="30" step="5" value="15">
          <div class="w-results">
            <div>Areia Virgem Preservada: <strong id="wSandVal" style="color:var(--accent-current)">2.400 t/mês</strong></div>
            <div>Cascalho Reciclado: <strong>100%</strong></div>
          </div>
        `;
        const wCrushSlider = document.getElementById('wCrushSlider');
        wCrushSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('wCrushVal').textContent = `${val} t/h`;
          const sand = val * 8 * 20;
          document.getElementById('wSandVal').textContent = `${sand.toLocaleString('pt-BR')} t/mês`;
        });
        break;

      case 'qrcode_scan':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Certificação de Lote Digital:</span>
            <strong class="w-val" style="color:#00E676">#ES-2026-088</strong>
          </div>
          <div class="w-results" style="display:flex; flex-direction:column; gap:4px; font-size:12px;">
            <div>• Ensaio de Lixiviação: <strong>Classe II B (Inerte / NBR 10004)</strong></div>
            <div>• Origem da Rocha: <strong>Serraria Cachoeiro (Multifio Diamantado)</strong></div>
            <div>• Aplicação Homologada: <strong>Pavimentação Urbana Conforme</strong></div>
          </div>
        `;
        break;

      case 'iot_sensor_slider':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Carga Operacional da Usina:</span>
            <strong class="w-val" id="wSpeedVal">100%</strong>
          </div>
          <input type="range" class="w-slider" id="wSpeedSlider" min="50" max="150" step="10" value="100">
          <div class="w-results">
            <div>Poeira Total (PTS): <strong id="wPtsVal">38 µg/m³</strong> (Lim: 240)</div>
            <div>Ruído Perímetro: <strong id="wDbVal" style="color:var(--accent-current)">56.5 dB(A)</strong> (Lim: 70)</div>
          </div>
        `;
        const wSpeedSlider = document.getElementById('wSpeedSlider');
        wSpeedSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('wSpeedVal').textContent = `${val}%`;
          const pts = Math.round(38 * (val / 100));
          const db = (52 + (val / 100) * 4.5).toFixed(1);
          document.getElementById('wPtsVal').textContent = `${pts} µg/m³`;
          document.getElementById('wDbVal').textContent = `${db} dB(A)`;
        });
        break;

      case 'coop_social_calc':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Impacto Socioeconômico na Região:</span>
            <strong class="w-val" style="color:var(--accent-current)">38 FAMÍLIAS</strong>
          </div>
          <div class="w-results" style="display:flex; flex-direction:column; gap:4px; font-size:12px;">
            <div>• Renda Média Mensal: <strong>R$ 3.850 / cooperado</strong> (+42% vs informal)</div>
            <div>• Qualificação Técnica: <strong>Certificação IFES / CETEM</strong></div>
            <div>• Segurança Ocupacional: <strong>100% Adequado NR-6 e NR-22</strong></div>
          </div>
        `;
        break;

      case 'totem_dialog_sim':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Totem Digital da Comunidade:</span>
            <strong class="w-val" style="color:#00E676">ONLINE PNUMA/APELL</strong>
          </div>
          <div class="w-results" style="display:flex; flex-direction:column; gap:4px; font-size:12px;">
            <div>• Qualidade do Ar no Bairro: <strong style="color:#00E676">EXCELENTE (38 µg)</strong></div>
            <div>• Monitoramento do Rio: <strong style="color:#00E676">ZERO DESPEJOS</strong></div>
            <div>• Ouvidoria Comunitária: <strong>0800 Ativo (Resposta &lt; 24h)</strong></div>
          </div>
        `;
        break;

      case 'rota_a_calc':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Substituição de Argila por Pó de Granito/Mármore:</span>
            <strong class="w-val" id="wClaySubVal">15%</strong>
          </div>
          <input type="range" class="w-slider" id="wClaySlider" min="5" max="25" step="1" value="15">
          <div class="w-results" style="display:flex; flex-direction:column; gap:5px;">
            <div>Temperatura do Forno: <strong id="wKilnTemp">912°C</strong> (Queda de fundente de 950°C para 900°C)</div>
            <div>Economia de Combustível/Gás: <strong id="wFuelSave" style="color:var(--accent-amber)">-10.5%</strong></div>
            <div>Economia Operacional Direta: <strong style="color:#00E676">R$ 28,00 / tonelada</strong> (Payback: 14 meses)</div>
          </div>
        `;
        const wClaySlider = document.getElementById('wClaySlider');
        if (wClaySlider) {
          wClaySlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            document.getElementById('wClaySubVal').textContent = `${val}%`;
            const temp = Math.round(950 - (val * 2.5));
            const fuel = (val * 0.7).toFixed(1);
            document.getElementById('wKilnTemp').textContent = `${temp}°C`;
            document.getElementById('wFuelSave').textContent = `-${fuel}%`;
          });
        }
        break;

      case 'rota_b_calc':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Volume de Agregados Reciclados (CONAMA 307):</span>
            <strong class="w-val" id="wAggVol">2.000 t/mês</strong>
          </div>
          <input type="range" class="w-slider" id="wAggSlider" min="500" max="3500" step="250" value="2000">
          <div class="w-results" style="display:flex; flex-direction:column; gap:5px;">
            <div>Preço Agregado Reciclado: <strong>R$ 45,00 / ton</strong> (vs R$ 75/t brita virgem)</div>
            <div>Receita Operacional Mensal: <strong id="wAggGross" style="color:var(--accent-amber)">R$ 90.000 / mês</strong></div>
            <div>Resistência dos Pavers: <strong style="color:#00E676">fck > 38.5 MPa (NBR 9781)</strong></div>
          </div>
        `;
        const wAggSlider = document.getElementById('wAggSlider');
        if (wAggSlider) {
          wAggSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            document.getElementById('wAggVol').textContent = `${val.toLocaleString('pt-BR')} t/mês`;
            const gross = val * 45;
            document.getElementById('wAggGross').textContent = `R$ ${gross.toLocaleString('pt-BR')} / mês`;
          });
        }
        break;

      case 'rota_c_calc':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Cotação do Fíler Nobre no Mercado Regional:</span>
            <strong class="w-val" id="wFillerPrice">R$ 165,00 / ton</strong>
          </div>
          <input type="range" class="w-slider" id="wFillerSlider" min="140" max="190" step="5" value="165">
          <div class="w-results" style="display:flex; flex-direction:column; gap:5px;">
            <div>Custo Operacional de Moagem (OPEX): <strong>R$ 55,00 / ton</strong></div>
            <div>Margem Líquida Unitária: <strong id="wFillerMargin" style="color:#00E676">+R$ 110,00 / ton</strong></div>
            <div>Raio Logístico Viável: <strong style="color:var(--accent-cyan)">Até 120 km (ES / RJ)</strong></div>
          </div>
        `;
        const wFillerSlider = document.getElementById('wFillerSlider');
        if (wFillerSlider) {
          wFillerSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            document.getElementById('wFillerPrice').textContent = `R$ ${val.toFixed(2)} / ton`;
            const margin = val - 55;
            document.getElementById('wFillerMargin').textContent = `+R$ ${margin.toFixed(2)} / ton`;
          });
        }
        break;

      case 'pmi40_uns':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Barramento Unificado UNS (MQTT / ISA-95):</span>
            <strong class="w-val" style="color:#00E676">CONECTADO EM TEMPO REAL</strong>
          </div>
          <div class="w-results" style="display:flex; flex-direction:column; gap:6px; font-size:12px;">
            <div>• Tópico UNS: <code>Mineradora/Cachoeiro/Serraria01/Multifio/Telemetria</code></div>
            <div>• Balanço Hídrico & Resíduos: <strong>Transmitindo via WebSockets</strong></div>
            <div>• Plataforma Protótipo: <strong>https://pmi40.siteser.com.br/</strong></div>
          </div>
          <a href="https://pmi40.siteser.com.br/" target="_blank" rel="noopener noreferrer" class="btn-inspect-deep" style="margin-top:10px; width:100%; justify-content:center; text-decoration:none;">
            <span>Abrir Protótipo PMI 4.0 Online ↗</span>
          </a>
        `;
        break;

      case 'compliance_radar':
        drawerWidgetContainer.innerHTML = `
          <div class="widget-row">
            <span class="w-label">Status de Licenciamento:</span>
            <strong class="w-val" style="color:#00E676">32 / 32 CUMPRIDAS</strong>
          </div>
          <div class="w-results" style="display:flex; flex-direction:column; gap:4px; font-size:12px;">
            <div>• Licença de Operação (LO): <strong style="color:#00E676">Válida até 2028</strong></div>
            <div>• Relatório Anual de Lavra (RAL): <strong>Protocolado e Homologado</strong></div>
            <div>• Outorga Hídrica: <strong>Captação Reduzida em 82%</strong></div>
          </div>
        `;
        break;

      default:
        drawerWidgetContainer.innerHTML = `<div>Monitoramento operacional contínuo.</div>`;
    }
  }

  // =========================================================================
  // 6. ROUTE VALUATION ENGINE & SIMULATOR (Maquete Eletrônica v5)
  // =========================================================================
  function updateRouteValuation(routeKey, volume) {
    if (routeKey) activeRouteKey = routeKey;
    if (volume !== undefined) activeVolume = volume;

    const r = technologicalRoutes[activeRouteKey];
    if (!r) return;

    // Tabs
    document.querySelectorAll('.route-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-route') === activeRouteKey);
    });

    // Ladder steps
    const ladderHighlightText = document.getElementById('ladderHighlightText');
    if (ladderHighlightText) ladderHighlightText.textContent = r.highlightText;

    const stepA = document.getElementById('ladderStepA');
    const stepB = document.getElementById('ladderStepB');
    const stepC = document.getElementById('ladderStepC');
    if (stepA) stepA.classList.toggle('active', activeRouteKey === 'rota_a');
    if (stepB) stepB.classList.toggle('active', activeRouteKey === 'rota_b');
    if (stepC) stepC.classList.toggle('active', activeRouteKey === 'rota_c');

    // Route Details
    const routeCodeTag = document.getElementById('routeCodeTag');
    const routeNormTag = document.getElementById('routeNormTag');
    const routeLogisticsBadge = document.getElementById('routeLogisticsBadge');
    const routeDetailTitle = document.getElementById('routeDetailTitle');
    const routeDetailDesc = document.getElementById('routeDetailDesc');

    if (routeCodeTag) routeCodeTag.textContent = r.code;
    if (routeNormTag) routeNormTag.textContent = r.norma;
    if (routeLogisticsBadge) routeLogisticsBadge.textContent = r.logistics;
    if (routeDetailTitle) routeDetailTitle.textContent = r.fullName;
    if (routeDetailDesc) routeDetailDesc.textContent = r.desc;

    // KPIs
    const kpiCapex = document.getElementById('kpiCapex');
    const kpiOpex = document.getElementById('kpiOpex');
    const kpiReceita = document.getElementById('kpiReceita');
    const kpiMarginSub = document.getElementById('kpiMarginSub');
    const kpiPayback = document.getElementById('kpiPayback');

    if (kpiCapex) kpiCapex.textContent = r.capexStr;
    if (kpiOpex) kpiOpex.textContent = r.opexStr;
    if (kpiReceita) kpiReceita.textContent = r.receitaStr;
    if (kpiMarginSub) kpiMarginSub.textContent = r.marginSub;
    if (kpiPayback) kpiPayback.textContent = r.paybackStr;

    // Calculator Results
    const calcVolDisplay = document.getElementById('calcVolDisplay');
    const resGross = document.getElementById('resGross');
    const resOpex = document.getElementById('resOpex');
    const resNetAnnual = document.getElementById('resNetAnnual');

    const grossMonthly = activeVolume * r.receitaPerTon;
    const opexMonthly = activeVolume * r.opexPerTon;
    const netMonthly = grossMonthly - opexMonthly;
    const netAnnual = netMonthly * 12;

    if (calcVolDisplay) calcVolDisplay.textContent = `${activeVolume.toLocaleString('pt-BR')} t/mês`;
    if (resGross) resGross.textContent = `R$ ${grossMonthly.toLocaleString('pt-BR')} / mês`;
    if (resOpex) resOpex.textContent = `R$ ${opexMonthly.toLocaleString('pt-BR')} / mês`;
    if (resNetAnnual) resNetAnnual.textContent = `+R$ ${netAnnual.toLocaleString('pt-BR')} / ano`;

    if (calcVolumeSlider && parseInt(calcVolumeSlider.value) !== activeVolume) {
      calcVolumeSlider.value = activeVolume;
    }

    document.querySelectorAll('.btn-vol-chip').forEach(chip => {
      chip.classList.toggle('active', parseInt(chip.getAttribute('data-vol')) === activeVolume);
    });
  }

  // =========================================================================
  // 7. AUTHOR MODAL & CITATION MANAGEMENT
  // =========================================================================
  function openAuthorModal() {
    if (!authorModal) return;
    authorModal.classList.add('active');
    authorModal.setAttribute('aria-hidden', 'false');
    playUiSound('switch');
  }

  function closeAuthorModal() {
    if (!authorModal) return;
    authorModal.classList.remove('active');
    authorModal.setAttribute('aria-hidden', 'true');
    playUiSound('click');
  }

  function copyFormalCitation(feedbackElem, defaultLabel = 'Copiar Citação ABNT') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(formalCitationString).then(() => {
        triggerCopyFeedback(feedbackElem, defaultLabel);
      }).catch(() => {
        fallbackCopyText(formalCitationString, feedbackElem, defaultLabel);
      });
    } else {
      fallbackCopyText(formalCitationString, feedbackElem, defaultLabel);
    }
  }

  function fallbackCopyText(text, feedbackElem, defaultLabel) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      triggerCopyFeedback(feedbackElem, defaultLabel);
    } catch (e) {
      console.warn('Erro ao copiar citação:', e);
    }
    document.body.removeChild(ta);
  }

  function triggerCopyFeedback(feedbackElem, defaultLabel) {
    playUiSound('click');
    if (citationToast) {
      citationToast.classList.add('show');
      setTimeout(() => citationToast.classList.remove('show'), 3000);
    }
    if (feedbackElem) {
      const prev = feedbackElem.textContent;
      feedbackElem.textContent = '✓ Citação Copiada!';
      setTimeout(() => {
        feedbackElem.textContent = defaultLabel || prev;
      }, 2500);
    }
  }

  // =========================================================================
  // 8. EVENT LISTENERS & MODALS
  // =========================================================================

  // Nav Tab clicks
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = parseInt(tab.getAttribute('data-scenario'));
      renderScenario(id);
    });
  });

  // Stage View Tabs (Segmented Switcher)
  if (btnTabSpotlight) {
    btnTabSpotlight.addEventListener('click', () => {
      setStageView('spotlight');
      playUiSound('switch');
    });
  }

  if (btnTabRoutes) {
    btnTabRoutes.addEventListener('click', () => {
      setStageView('routes');
      playUiSound('switch');
    });
  }

  // Quick Access Button in Header (Instant 1-tap jump on mobile/desktop)
  if (btnQuickHeaderRoutes) {
    btnQuickHeaderRoutes.addEventListener('click', () => {
      if (currentScenarioId !== 2) {
        renderScenario(2);
      }
      setStageView('routes', true);
      playUiSound('switch');
    });
  }

  // Quick Link in Spotlight Card
  if (btnQuickToRoutes) {
    btnQuickToRoutes.addEventListener('click', () => {
      setStageView('routes', true);
      playUiSound('switch');
    });
  }

  // Switch back button inside Routes Card
  if (btnSwitchBackToSpotlight) {
    btnSwitchBackToSpotlight.addEventListener('click', () => {
      setStageView('spotlight');
      playUiSound('switch');
    });
  }

  // Route selector tabs in the diorama stage
  routeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const routeKey = btn.getAttribute('data-route');
      updateRouteValuation(routeKey, activeVolume);
      playUiSound('switch');

      // If in Scenario 2, also sync active hotspot to corresponding route
      if (currentScenarioId === 2) {
        if (routeKey === 'rota_a') selectHotspot(1);
        else if (routeKey === 'rota_b') selectHotspot(2);
        else if (routeKey === 'rota_c') selectHotspot(3);
      }
    });
  });

  // Volume 1-Tap Presets (500t, 1.000t, 2.000t, 4.000t - Perfect for Smartphones)
  volPresetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const vol = parseInt(chip.getAttribute('data-vol'));
      updateRouteValuation(activeRouteKey, vol);
      playUiSound('click');
    });
  });

  // Clickable Ladder Steps
  if (ladderStepA) {
    ladderStepA.addEventListener('click', () => {
      updateRouteValuation('rota_a', activeVolume);
      playUiSound('switch');
      if (currentScenarioId === 2) selectHotspot(1);
    });
  }
  if (ladderStepB) {
    ladderStepB.addEventListener('click', () => {
      updateRouteValuation('rota_b', activeVolume);
      playUiSound('switch');
      if (currentScenarioId === 2) selectHotspot(2);
    });
  }
  if (ladderStepC) {
    ladderStepC.addEventListener('click', () => {
      updateRouteValuation('rota_c', activeVolume);
      playUiSound('switch');
      if (currentScenarioId === 2) selectHotspot(3);
    });
  }

  // Volume slider in routes valuation card
  if (calcVolumeSlider) {
    calcVolumeSlider.addEventListener('input', (e) => {
      const vol = parseInt(e.target.value);
      updateRouteValuation(activeRouteKey, vol);
    });
  }

  // Spotlight inspect deep button
  btnOpenDeepInspect.addEventListener('click', () => {
    openTechnicalDrawer(activeHotspotIndex);
  });

  // Drawer Close
  btnCloseDrawer.addEventListener('click', closeTechnicalDrawer);
  drawerBackdrop.addEventListener('click', closeTechnicalDrawer);

  // Drawer Next Point
  btnNextPoint.addEventListener('click', () => {
    const cur = scenarios[currentScenarioId];
    let nxt = activeHotspotIndex + 1;
    if (nxt >= cur.hotspots.length) nxt = 0;
    selectHotspot(nxt);
    openTechnicalDrawer(nxt);
  });

  // Executive ROI Modal
  btnOpenExecutive.addEventListener('click', () => {
    executiveModal.classList.add('active');
    executiveModal.setAttribute('aria-hidden', 'false');
    playUiSound('switch');
  });

  btnCloseExecutive.addEventListener('click', () => {
    executiveModal.classList.remove('active');
    executiveModal.setAttribute('aria-hidden', 'true');
    playUiSound('click');
  });

  executiveBackdrop.addEventListener('click', () => {
    executiveModal.classList.remove('active');
    executiveModal.setAttribute('aria-hidden', 'true');
    playUiSound('click');
  });

  // Academic Dossier Modal
  btnOpenDossier.addEventListener('click', () => {
    dossierModal.classList.add('active');
    dossierModal.setAttribute('aria-hidden', 'false');
    playUiSound('switch');
  });

  btnCloseDossier.addEventListener('click', () => {
    dossierModal.classList.remove('active');
    dossierModal.setAttribute('aria-hidden', 'true');
    playUiSound('click');
  });

  dossierBackdrop.addEventListener('click', () => {
    dossierModal.classList.remove('active');
    dossierModal.setAttribute('aria-hidden', 'true');
    playUiSound('click');
  });

  btnPrintDossier.addEventListener('click', () => {
    window.print();
  });

  // Author & Prototype Modal Events (Everton Santos Rocha - IFES)
  if (btnOpenAuthorModalHeader) {
    btnOpenAuthorModalHeader.addEventListener('click', openAuthorModal);
  }
  if (btnOpenAuthorModalFooter) {
    btnOpenAuthorModalFooter.addEventListener('click', openAuthorModal);
  }
  if (btnCloseAuthor) {
    btnCloseAuthor.addEventListener('click', closeAuthorModal);
  }
  if (authorBackdrop) {
    authorBackdrop.addEventListener('click', closeAuthorModal);
  }

  // Copy Citation buttons
  if (btnCopyAuthorCitation) {
    btnCopyAuthorCitation.addEventListener('click', () => {
      copyFormalCitation(copyAuthorCitationLabel, 'Copiar Citação ABNT');
    });
  }
  if (btnCopyFooterCitation) {
    btnCopyFooterCitation.addEventListener('click', () => {
      copyFormalCitation(footerCopyLabel, 'Copiar Citação ABNT');
    });
  }

  // Audio Toggle
  btnToggleAudio.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    btnToggleAudio.classList.toggle('active', isAudioEnabled);
    if (isAudioEnabled) {
      initAudio();
      playUiSound('switch');
    }
  });

  // Keyboard navigation: 1, 2, 3 to switch; Esc to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTechnicalDrawer();
      executiveModal.classList.remove('active');
      dossierModal.classList.remove('active');
      closeAuthorModal();
    } else if (e.key === '1') {
      renderScenario(1);
    } else if (e.key === '2') {
      renderScenario(2);
    } else if (e.key === '3') {
      renderScenario(3);
    }
  });

  // Initialize
  renderScenario(1);
  updateRouteValuation('rota_a', 2000);
  console.log('Eco-Mineração 4.0 Engine v5 initialized. Author: Everton Santos Rocha (IFES).');

});
