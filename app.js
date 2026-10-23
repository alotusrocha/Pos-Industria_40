/**
 * ECO-MINERAÇÃO 4.0 & ECONOMIA CIRCULAR
 * Interactivity & Application Engine (Planton-Style Diorama Stage)
 * APL de Rochas Ornamentais de Cachoeiro de Itapemirim (ES)
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA MODEL: SCENARIOS, HOTSPOTS, KPIS & PROCESS ENGINEERING
  // =========================================================================
  const scenariosData = {
    1: {
      number: "01",
      tag: "CIRCUITO FECHADO DE RECIRCULAÇÃO",
      title: "Gestão Hídrica & Recirculação",
      subtitle: "Eficiência hídrica e descarga zero de efluentes.",
      copy: "O beneficiamento sustentável de rochas apoia-se em sistemas de clarificação e desidratação mecânica que viabilizam taxas de recirculação hídrica superiores a 90%, eliminando o descarte em corpos hídricos e minimizando a captação de água nova.",
      accent: "#00E5FF",
      accentGlow: "rgba(0, 229, 255, 0.35)",
      image: "diorama_situacao_1.jpg",
      kpis: [
        { val: "94.2%", lbl: "Taxa de Recirculação Hídrica" },
        { val: "-82%", lbl: "Captação de Água Nova" },
        { val: "0.0 NTU", lbl: "Descarte no Rio Itapemirim" }
      ],
      hotspots: [
        {
          id: "h1_1",
          code: "01.1",
          title: "Clarificação & Floculação",
          subtitle: "Tanques decantadores aceleram a sedimentação dos finos de rocha com polímeros.",
          coords: { top: "62%", left: "45%" },
          norma: "CONAMA 357 / NBR 9898",
          specs: [
            { label: "Taxa de Sedimentação", val: "1.8 m/h" },
            { label: "Dosagem Floculante", val: "1.2 ppm (Aniônico)" },
            { label: "Turbidez de Entrada", val: "8.500 NTU" },
            { label: "Turbidez Clarificada", val: "< 12 NTU" }
          ],
          widgetType: "flocculation_slider",
          regText: "Atendimento rigoroso aos limites de sólidos suspensos totais para viabilizar descarga zero e reaproveitamento contínuo na serraria."
        },
        {
          id: "h1_2",
          code: "01.2",
          title: "Filtros-Prensa de Alta Pressão",
          subtitle: "Desidratação mecânica da polpa abrasiva, recuperando água límpida e gerando tortas sólidas.",
          coords: { top: "59%", left: "67%" },
          norma: "ABNT NBR 10004 / NR-12",
          specs: [
            { label: "Pressão de Prensagem", val: "16 bar" },
            { label: "Duração do Ciclo", val: "42 min" },
            { label: "Umidade Residual", val: "16.8%" },
            { label: "Recuperação Hídrica", val: "94.5%" }
          ],
          widgetType: "press_slider",
          regText: "Classificação como resíduo sólido desidratado estável, apto para empilhamento a seco e fabricação de blocos cimentícios."
        },
        {
          id: "h1_3",
          code: "01.3",
          title: "Telemetria SCADA de Balanço Hídrico",
          subtitle: "Sensores de vazão e nível conectados em tempo real registram o volume recirculado (IoT).",
          coords: { top: "44%", left: "47%" },
          norma: "Protocolo MQTT / ISA-95",
          specs: [
            { label: "Vazão Recirculada", val: "145 m³/h" },
            { label: "Captação Água Nova", val: "8.2 m³/h" },
            { label: "Precisão dos Sensores", val: "±0.2% (Eletromagnético)" },
            { label: "Atualização Cloud", val: "A cada 5 seg" }
          ],
          widgetType: "scada_flow",
          regText: "Monitoramento contínuo em conformidade com as outorgas da AGERH / ANA e condicionantes de operação do IEMA."
        },
        {
          id: "h1_4",
          code: "01.4",
          title: "Monitoramento de Turbidez (Descarga Zero)",
          subtitle: "Sondas automáticas de pH e turbidez no canal pluvial garantem a preservação do Rio Itapemirim.",
          coords: { top: "86%", left: "22%" },
          norma: "Resolução CONAMA 357 / Rio Classe 2",
          specs: [
            { label: "Turbidez Medida", val: "3.8 NTU (Normal)" },
            { label: "pH Monitorado", val: "7.35 (Faixa 6-9)" },
            { label: "Tempo de Bloqueio", val: "< 1.2s (Válvula Atuadora)" },
            { label: "Volume de Efluente Bruto", val: "0.00 m³" }
          ],
          widgetType: "outfall_test",
          regText: "Garantia física e digital de descarga zero na calha do Rio Itapemirim, eliminando riscos de assoreamento ou contaminação."
        }
      ]
    },

    2: {
      number: "02",
      tag: "ECONOMIA CIRCULAR & VALORIZAÇÃO",
      title: "Economia Circular & Subprodutos",
      subtitle: "Transformação de passivos minerais em insumos para a construção civil.",
      copy: "A transição do modelo linear para a economia circular converte fragmentos de rocha e lamas desidratadas em agregados reciclados e artefatos cimentícios certificados, substituindo matérias-primas virgens e extinguindo bacias de contenção.",
      accent: "#FFB300",
      accentGlow: "rgba(255, 179, 0, 0.35)",
      image: "diorama_situacao_2.jpg",
      kpis: [
        { val: "48.5 t/d", lbl: "Reaproveitamento de Lamas" },
        { val: "2.400 un", lbl: "Pavers NBR / Turno" },
        { val: "0 m³", lbl: "Volume em Barragens" }
      ],
      hotspots: [
        {
          id: "h2_1",
          code: "02.1",
          title: "Empilhamento a Seco (Dry Stacking)",
          subtitle: "Disposição controlada e compactada de tortas de filtro-prensa em pilhas drenadas e estáveis.",
          coords: { top: "18%", left: "69%" },
          norma: "NBR 10004 (Classe II B) / IEMA",
          specs: [
            { label: "Fator de Segurança (FS)", val: "1.85 (Estável)" },
            { label: "Umidade Residual", val: "< 18%" },
            { label: "Ângulo de Atrito", val: "34°" },
            { label: "Risco de Liquefação", val: "NULO" }
          ],
          widgetType: "stacking_slider",
          regText: "Elimina de forma permanente o uso de bacias de decantação a céu aberto ou barragens de rejeitos na bacia hidrográfica."
        },
        {
          id: "h2_2",
          code: "02.2",
          title: "Fábrica de Artefatos Cimentícios",
          subtitle: "Linha de prensagem que incorpora finos de mármore e granito em blocos intertravados e pavers.",
          coords: { top: "37%", left: "86%" },
          norma: "ABNT NBR 9781 / NBR 6136",
          specs: [
            { label: "Resistência (fck)", val: "38.5 MPa (Tráfego Pesado)" },
            { label: "Substituição de Areia", val: "30% (Finos de Rocha)" },
            { label: "Absorção de Água", val: "4.6% (Limite < 6%)" },
            { label: "Capacidade Produtiva", val: "2.400 pavers/turno" }
          ],
          widgetType: "paver_mix_slider",
          regText: "Conformidade integral com normas da ABNT para pavimentação urbana de alto tráfego e certificação de laudo de lixiviação."
        },
        {
          id: "h2_3",
          code: "02.3",
          title: "Britagem de Agregados Reciclados",
          subtitle: "Trituração mecânica de cascalhos e chapas quebradas para substituição de brita e areia natural.",
          coords: { top: "27%", left: "66%" },
          norma: "Resolução CONAMA 307 / NBR 15116",
          specs: [
            { label: "Capacidade Britador", val: "15 t/h" },
            { label: "Produtos Gerados", val: "Brita 0, 1 e Pedrisco" },
            { label: "Abrasão Los Angeles", val: "22% (Alta Dureza)" },
            { label: "Areia Virgem Poupada", val: "100% equivalente" }
          ],
          widgetType: "crusher_balance",
          regText: "Adequação às diretrizes federais do CONAMA 307 para valorização de resíduos rochosos na infraestrutura viária municipal."
        },
        {
          id: "h2_4",
          code: "02.4",
          title: "Rastreabilidade por QR Code / ERP",
          subtitle: "Identificação de lote, ensaios de lixiviação/solubilização e destino final dos agregados gerados.",
          coords: { top: "73%", left: "55%" },
          norma: "ISO 14001 / NBR 10004",
          specs: [
            { label: "Lotes Rastreados", val: "100% em Banco Digital" },
            { label: "Laudos Anexados", val: "PDF Criptografado" },
            { label: "Origem dos Blocos", val: "Serraria / Multifio" },
            { label: "Destinação Homologada", val: "Pavimentação Pública" }
          ],
          widgetType: "qrcode_scan",
          regText: "Garantia de auditoria digital transparente para construtoras e prefeituras que utilizam os materiais secundários certificados."
        }
      ]
    },

    3: {
      number: "03",
      tag: "MINERAÇÃO 4.0 & GOVERNANÇA",
      title: "Mineração 4.0 & Licença Social",
      subtitle: "Gestão integrada de impactos, transparência comunitária e governança ativa.",
      copy: "A Mineração 4.0 integra sensoriamento contínuo em perímetro fabril com canais abertos de transparência, assegurando conformidade com condicionantes legais e fortalecendo a relação de confiança com a comunidade vizinha.",
      accent: "#00E676",
      accentGlow: "rgba(0, 230, 118, 0.35)",
      image: "diorama_situacao_3.jpg",
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
          subtitle: "Estações perimétricas autônomas medindo particulados totais e níveis sonoros (NR-15 e NR-22).",
          coords: { top: "42%", left: "8%" },
          norma: "NR-15 / NR-22 / NHO-01",
          specs: [
            { label: "Partículas Totais (PTS)", val: "38 µg/m³ (Limite 240)" },
            { label: "Ruído Perimétrico", val: "56.5 dB(A) (Conforme)" },
            { label: "Comunicação", val: "LoRaWAN Solar" },
            { label: "Acionamento Spray", val: "Automático se > 120 µg" }
          ],
          widgetType: "iot_sensor_slider",
          regText: "Conformidade contínua com as normas de higiene ocupacional e proteção às habitações no entorno da planta industrial."
        },
        {
          id: "h3_2",
          code: "03.2",
          title: "Cooperativismo e Renda Local",
          subtitle: "Pátio de triagem e beneficiamento secundário operado em parceria com cooperativas da região.",
          coords: { top: "40%", left: "41%" },
          norma: "ODS 8 (Trabalho Decente) / ODS 12",
          specs: [
            { label: "Postos Diretos", val: "38 cooperados formais" },
            { label: "Aumento de Renda", val: "+42% vs informalidade" },
            { label: "Capacitação Técnica", val: "Parceria IFES / CETEM" },
            { label: "Segurança do Trabalho", val: "100% Treinados NR-6" }
          ],
          widgetType: "coop_social_calc",
          regText: "Geração de valor compartilhado, formalização do trabalho e inclusão socioeconômica no APL de Cachoeiro de Itapemirim."
        },
        {
          id: "h3_3",
          code: "03.3",
          title: "Portal de Transparência Socioambiental",
          subtitle: "Painel público digital com indicadores ambientais, emissões e canal aberto de diálogo comunitário.",
          coords: { top: "68%", left: "80%" },
          norma: "Metodologia PNUMA / APELL / ESG",
          specs: [
            { label: "Acesso Comunitário", val: "Totem Público 24/7" },
            { label: "Tempo de Resposta", val: "< 24 horas" },
            { label: "Índice de Confiança (SLO)", val: "88.5% Aprovação" },
            { label: "Visitas Escolares", val: "24 turmas/ano" }
          ],
          widgetType: "totem_dialog_sim",
          regText: "Práticas consagradas de Licença Social para Operar (Social License to Operate - SLO), mitigando litígios e construindo legitimidade."
        },
        {
          id: "h3_4",
          code: "03.4",
          title: "Gestão Digital de Licenças (IEMA / ANM)",
          subtitle: "Sistema automatizado no ERP acompanhando cronograma e evidências de cumprimento das condicionantes.",
          coords: { top: "82%", left: "52%" },
          norma: "Legislação ANM / Resoluções IEMA",
          specs: [
            { label: "Condicionantes Ativas", val: "32 itens monitorados" },
            { label: "Cumprimento no Prazo", val: "100% das obrigações" },
            { label: "Alerta Preditivo", val: "180 dias de antecedência" },
            { label: "Repositório de Provas", val: "Nuvem com assinatura ICP" }
          ],
          widgetType: "compliance_radar",
          regText: "Segurança jurídica preventiva para empreendedores e governança sólida perante o IEMA e a Agência Nacional de Mineração."
        }
      ]
    }
  };

  // =========================================================================
  // 2. STATE MANAGEMENT & DOM ELEMENTS
  // =========================================================================
  let currentScenarioId = 1;
  let activeHotspotIndex = 0;
  let isAudioEnabled = false;
  let isLayersMode = true; // true = shows scenario image, false = shows clean base maquette

  // DOM Elements
  const tabScenario1 = document.getElementById('tabScenario1');
  const tabScenario2 = document.getElementById('tabScenario2');
  const tabScenario3 = document.getElementById('tabScenario3');
  const navTabs = [tabScenario1, tabScenario2, tabScenario3];

  const scenarioNumber = document.getElementById('scenarioNumber');
  const scenarioTag = document.getElementById('scenarioTag');
  const scenarioTitle = document.getElementById('scenarioTitle');
  const scenarioSubtitle = document.getElementById('scenarioSubtitle');
  const scenarioCopy = document.getElementById('scenarioCopy');

  const hotspotsList = document.getElementById('hotspotsList');
  const hotspotsOverlay = document.getElementById('hotspotsOverlay');
  const kpiGrid = document.getElementById('kpiGrid');

  const prevStepBtn = document.getElementById('prevStepBtn');
  const nextStepBtn = document.getElementById('nextStepBtn');
  const stepDots = document.querySelectorAll('.step-dot');

  const imgBase = document.getElementById('imgBase');
  const imgScenario1 = document.getElementById('imgScenario1');
  const imgScenario2 = document.getElementById('imgScenario2');
  const imgScenario3 = document.getElementById('imgScenario3');
  const scenarioImages = {
    1: imgScenario1,
    2: imgScenario2,
    3: imgScenario3
  };

  // Inspector Drawer Elements
  const inspectorDrawer = document.getElementById('inspectorDrawer');
  const inspectorBackdrop = document.getElementById('inspectorBackdrop');
  const btnCloseInspector = document.getElementById('btnCloseInspector');
  const inspectNum = document.getElementById('inspectNum');
  const inspectNorma = document.getElementById('inspectNorma');
  const inspectTitle = document.getElementById('inspectTitle');
  const inspectDesc = document.getElementById('inspectDesc');
  const inspectSpecs = document.getElementById('inspectSpecs');
  const inspectWidget = document.getElementById('inspectWidget');
  const inspectRegText = document.getElementById('inspectRegText');
  const btnNextHotspot = document.getElementById('btnNextHotspot');

  // Dossier Modal Elements
  const dossierModal = document.getElementById('dossierModal');
  const dossierBackdrop = document.getElementById('dossierBackdrop');
  const btnOpenDossier = document.getElementById('btnOpenDossier');
  const btnCloseDossier = document.getElementById('btnCloseDossier');
  const btnPrintDossier = document.getElementById('btnPrintDossier');

  // HUD & Extra Buttons
  const btnToggleLayers = document.getElementById('btnToggleLayers');
  const btnResetView = document.getElementById('btnResetView');
  const btnToggleAudio = document.getElementById('btnToggleAudio');
  const btnToggleFullscreen = document.getElementById('btnToggleFullscreen');
  const stageWrapper = document.getElementById('stageWrapper');

  // =========================================================================
  // 3. WEB AUDIO SYNTHESIZER (Subtle UI Feedback)
  // =========================================================================
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

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
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'switch') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.16);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'open') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.06);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    }
  }

  // =========================================================================
  // 4. RENDER SCENARIO & TRANSITIONS
  // =========================================================================
  function renderScenario(scenarioId) {
    currentScenarioId = scenarioId;
    const data = scenariosData[scenarioId];
    if (!data) return;

    // Apply Dynamic Theme Colors
    document.documentElement.style.setProperty('--accent-current', data.accent);
    document.documentElement.style.setProperty('--accent-glow-current', data.accentGlow);

    // Update Navigation Tabs
    navTabs.forEach((tab, idx) => {
      if (idx + 1 === scenarioId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update Stepper Dots
    stepDots.forEach((dot, idx) => {
      if (idx + 1 === scenarioId) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update Editorial Panel Content
    scenarioNumber.textContent = data.number;
    scenarioTag.textContent = data.tag;
    scenarioTitle.textContent = data.title;
    scenarioSubtitle.textContent = data.subtitle;
    scenarioCopy.textContent = `"${data.copy}"`;

    // Render Lateral Hotspots List
    renderHotspotsList(data.hotspots);

    // Render Diorama Hotspot Pins
    renderHotspotPins(data.hotspots);

    // Render Telemetry Mini-Deck KPIs
    renderKpis(data.kpis);

    // Update Diorama Image Cross-fade
    if (isLayersMode) {
      Object.keys(scenarioImages).forEach(key => {
        if (parseInt(key) === scenarioId) {
          scenarioImages[key].classList.add('active');
        } else {
          scenarioImages[key].classList.remove('active');
        }
      });
    }

    playUiSound('switch');
  }

  // Render Lateral List
  function renderHotspotsList(hotspots) {
    hotspotsList.innerHTML = '';
    hotspots.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.className = `hotspot-item-btn ${index === activeHotspotIndex ? 'active' : ''}`;
      btn.setAttribute('data-index', index);
      btn.innerHTML = `
        <span class="item-pin">${item.code}</span>
        <div class="item-content">
          <div class="item-title">${item.title}</div>
          <div class="item-sub">${item.subtitle}</div>
        </div>
        <svg class="item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      `;

      btn.addEventListener('click', () => {
        openInspector(index);
      });

      hotspotsList.appendChild(btn);
    });
  }

  // Render Diorama Hotspot Pins
  function renderHotspotPins(hotspots) {
    hotspotsOverlay.innerHTML = '';
    hotspots.forEach((item, index) => {
      const beacon = document.createElement('button');
      beacon.className = `hotspot-beacon ${index === activeHotspotIndex ? 'active' : ''}`;
      beacon.style.top = item.coords.top;
      beacon.style.left = item.coords.left;
      beacon.setAttribute('data-index', index);
      beacon.setAttribute('aria-label', item.title);

      beacon.innerHTML = `
        <span class="beacon-pulse"></span>
        <span class="beacon-pulse"></span>
        <span class="beacon-core">${item.code}</span>
        <div class="beacon-tooltip">
          <span class="tooltip-title">${item.title}</span>
          <span class="tooltip-norm">${item.norma}</span>
        </div>
      `;

      beacon.addEventListener('click', () => {
        openInspector(index);
      });

      hotspotsOverlay.appendChild(beacon);
    });
  }

  // Render KPIs
  function renderKpis(kpis) {
    kpiGrid.innerHTML = '';
    kpis.forEach(kpi => {
      const card = document.createElement('div');
      card.className = 'kpi-card';
      card.innerHTML = `
        <div class="kpi-val">${kpi.val}</div>
        <div class="kpi-lbl">${kpi.lbl}</div>
      `;
      kpiGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 5. INSPECTOR DRAWER & INTERACTIVE MICRO-WIDGETS
  // =========================================================================
  function openInspector(hotspotIndex) {
    activeHotspotIndex = hotspotIndex;
    const currentScenario = scenariosData[currentScenarioId];
    const item = currentScenario.hotspots[hotspotIndex];
    if (!item) return;

    // Update highlights in list and beacons
    document.querySelectorAll('.hotspot-item-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === hotspotIndex);
    });
    document.querySelectorAll('.hotspot-beacon').forEach((pin, idx) => {
      pin.classList.toggle('active', idx === hotspotIndex);
    });

    // Populate Inspector Fields
    inspectNum.textContent = item.code;
    inspectNorma.textContent = item.norma;
    inspectTitle.textContent = item.title;
    inspectDesc.textContent = item.subtitle;
    inspectRegText.textContent = item.regText;

    // Render Technical Specs Grid
    inspectSpecs.innerHTML = '';
    item.specs.forEach(spec => {
      const cell = document.createElement('div');
      cell.className = 'spec-cell';
      cell.innerHTML = `
        <div class="spec-cell-label">${spec.label}</div>
        <div class="spec-cell-val">${spec.val}</div>
      `;
      inspectSpecs.appendChild(cell);
    });

    // Render Custom Micro-Widget
    renderInspectorWidget(item.widgetType);

    // Open Drawer
    inspectorDrawer.classList.add('active');
    inspectorDrawer.setAttribute('aria-hidden', 'false');

    playUiSound('open');
  }

  function closeInspector() {
    inspectorDrawer.classList.remove('active');
    inspectorDrawer.setAttribute('aria-hidden', 'true');
    playUiSound('click');
  }

  // Custom simulation widgets for each hotspot type
  function renderInspectorWidget(type) {
    inspectWidget.innerHTML = '';

    switch(type) {
      case 'flocculation_slider':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Simulador de Dosagem de Floculante (Polímero)</span>
            <span class="widget-readout" id="polyDoseVal">1.2 ppm</span>
          </div>
          <input type="range" class="widget-slider-track" id="polySlider" min="0.4" max="3.0" step="0.1" value="1.2">
          <div class="widget-result-box">
            <span>Tempo de Decantação: <strong id="settleTimeVal">18 min</strong></span>
            <span>Clarificação: <strong id="clarifyVal" style="color:var(--accent-current)">98.5%</strong></span>
          </div>
        `;
        const polySlider = document.getElementById('polySlider');
        polySlider.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          document.getElementById('polyDoseVal').textContent = `${val.toFixed(1)} ppm`;
          const minutes = Math.max(8, Math.round(40 / (val * 1.5)));
          const clarify = Math.min(99.8, 85 + (val * 5.2));
          document.getElementById('settleTimeVal').textContent = `${minutes} min`;
          document.getElementById('clarifyVal').textContent = `${clarify.toFixed(1)}%`;
        });
        break;

      case 'press_slider':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Pressão Hidráulica do Filtro-Prensa</span>
            <span class="widget-readout" id="pressBarVal">16 bar</span>
          </div>
          <input type="range" class="widget-slider-track" id="pressSlider" min="8" max="22" step="1" value="16">
          <div class="widget-result-box">
            <span>Umidade Residual da Torta: <strong id="moistVal">16.8%</strong></span>
            <span>Água Recuperada: <strong id="waterRecVal" style="color:var(--accent-current)">94.5%</strong></span>
          </div>
        `;
        const pressSlider = document.getElementById('pressSlider');
        pressSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('pressBarVal').textContent = `${val} bar`;
          const moist = Math.max(12, 28 - (val * 0.7));
          const waterRec = Math.min(98.5, 82 + (val * 0.78));
          document.getElementById('moistVal').textContent = `${moist.toFixed(1)}%`;
          document.getElementById('waterRecVal').textContent = `${waterRec.toFixed(1)}%`;
        });
        break;

      case 'scada_flow':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Vazão do Circuito de Teares Multifio</span>
            <span class="widget-readout" id="flowVal">145 m³/h</span>
          </div>
          <input type="range" class="widget-slider-track" id="flowSlider" min="80" max="250" step="5" value="145">
          <div class="widget-result-box">
            <span>Água Poupada: <strong id="savedWaterVal">3.270 m³/mês</strong></span>
            <span>Economia Estimada: <strong id="savedCostVal" style="color:var(--accent-current)">R$ 49.050/mês</strong></span>
          </div>
        `;
        const flowSlider = document.getElementById('flowSlider');
        flowSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('flowVal').textContent = `${val} m³/h`;
          const savedVol = Math.round(val * 0.94 * 24 * 25);
          const savedR$ = Math.round(savedVol * 15);
          document.getElementById('savedWaterVal').textContent = `${savedVol.toLocaleString('pt-BR')} m³/mês`;
          document.getElementById('savedCostVal').textContent = `R$ ${savedR$.toLocaleString('pt-BR')}/mês`;
        });
        break;

      case 'outfall_test':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Simulação de Evento Pluvial / Válvula de Bloqueio</span>
            <span class="widget-readout" style="color:#00E676" id="statusValve">VÁLVULA NORMAL</span>
          </div>
          <button class="btn-action" id="btnSimulateSurge" style="width:100%; justify-content:center; margin-bottom:8px;">
            Simular Pico de Chuva na Drenagem
          </button>
          <div class="widget-result-box">
            <span>Descarga no Rio Itapemirim: <strong id="riverDischarge" style="color:#00E676">0.0 m³ (Retido)</strong></span>
          </div>
        `;
        const btnSimulateSurge = document.getElementById('btnSimulateSurge');
        btnSimulateSurge.addEventListener('click', () => {
          const statusValve = document.getElementById('statusValve');
          const riverDischarge = document.getElementById('riverDischarge');
          statusValve.textContent = 'INTERCEPTAÇÃO ATIVA (< 1.2s)';
          statusValve.style.color = '#FFB300';
          riverDischarge.textContent = '100% Efluente Desviado para Tanque Pulmão';
          playUiSound('click');
          setTimeout(() => {
            statusValve.textContent = 'VÁLVULA NORMAL (DESCARGA ZERO)';
            statusValve.style.color = '#00E676';
            riverDischarge.textContent = '0.0 m³ (Preservado)';
          }, 3500);
        });
        break;

      case 'stacking_slider':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Grau de Compactação do Dry Stacking</span>
            <span class="widget-readout" id="compVal">98% Proctor</span>
          </div>
          <input type="range" class="widget-slider-track" id="compSlider" min="85" max="102" step="1" value="98">
          <div class="widget-result-box">
            <span>Fator de Segurança (FS): <strong id="fsVal">1.85</strong></span>
            <span>Risco Geotécnico: <strong style="color:#00E676">TOTALMENTE ESTÁVEL</strong></span>
          </div>
        `;
        const compSlider = document.getElementById('compSlider');
        compSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('compVal').textContent = `${val}% Proctor`;
          const fs = (1.2 + (val - 85) * 0.04).toFixed(2);
          document.getElementById('fsVal').textContent = fs;
        });
        break;

      case 'paver_mix_slider':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Substituição de Areia Natural por Fíler/Lama de Rocha</span>
            <span class="widget-readout" id="mixSubVal">30%</span>
          </div>
          <input type="range" class="widget-slider-track" id="mixSlider" min="10" max="45" step="5" value="30">
          <div class="widget-result-box">
            <span>Resistência fck: <strong id="fckVal" style="color:var(--accent-current)">38.5 MPa (NBR 9781)</strong></span>
            <span>Redução de Custo: <strong id="costCutVal">-22%</strong></span>
          </div>
        `;
        const mixSlider = document.getElementById('mixSlider');
        mixSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('mixSubVal').textContent = `${val}%`;
          let fck = 35 + (val <= 30 ? (val * 0.15) : (4.5 - (val - 30) * 0.3));
          let costCut = Math.round(val * 0.73);
          document.getElementById('fckVal').textContent = `${fck.toFixed(1)} MPa (Conforme)`;
          document.getElementById('costCutVal').textContent = `-${costCut}%`;
        });
        break;

      case 'crusher_balance':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Balanço de Britagem de Aparas de Chapas</span>
            <span class="widget-readout" id="crushTonVal">15 t/h</span>
          </div>
          <input type="range" class="widget-slider-track" id="crushSlider" min="5" max="30" step="5" value="15">
          <div class="widget-result-box">
            <span>Areia Natural Poupada: <strong id="sandSaved" style="color:var(--accent-current)">2.400 t/mês</strong></span>
            <span>Cascalho Valorizado: <strong>100%</strong></span>
          </div>
        `;
        const crushSlider = document.getElementById('crushSlider');
        crushSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('crushTonVal').textContent = `${val} t/h`;
          const sand = val * 8 * 20;
          document.getElementById('sandSaved').textContent = `${sand.toLocaleString('pt-BR')} t/mês`;
        });
        break;

      case 'qrcode_scan':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Rastreabilidade Digital NBR 10004</span>
            <span class="widget-readout" style="color:#00E676">LOTE #ES-2026-088</span>
          </div>
          <div class="widget-result-box" style="flex-direction:column; gap:4px; font-size:11.5px;">
            <div>• Origem: <strong>Serraria Central - Multifio Diamantado</strong></div>
            <div>• Ensaio de Lixiviação: <strong>Classe II B (Não Perigoso / Inerte)</strong></div>
            <div>• Destino Homologado: <strong>Pavimentação Urbana Cachoeiro de Itapemirim</strong></div>
          </div>
        `;
        break;

      case 'iot_sensor_slider':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Simulador de Intensidade Operacional (Poeira e Ruído)</span>
            <span class="widget-readout" id="speedVal">100% Carga</span>
          </div>
          <input type="range" class="widget-slider-track" id="speedSlider" min="50" max="150" step="10" value="100">
          <div class="widget-result-box">
            <span>PTS Perímetro: <strong id="ptsVal">38 µg/m³</strong> (Lim: 240)</span>
            <span>Ruído: <strong id="dbVal" style="color:var(--accent-current)">56.5 dB(A)</strong> (Lim: 70)</span>
          </div>
        `;
        const speedSlider = document.getElementById('speedSlider');
        speedSlider.addEventListener('input', (e) => {
          const val = parseInt(e.target.value);
          document.getElementById('speedVal').textContent = `${val}% Carga`;
          const pts = Math.round(38 * (val / 100));
          const db = (52 + (val / 100) * 4.5).toFixed(1);
          document.getElementById('ptsVal').textContent = `${pts} µg/m³`;
          document.getElementById('dbVal').textContent = `${db} dB(A)`;
        });
        break;

      case 'coop_social_calc':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Simulador de Impacto Socioeconômico Local</span>
            <span class="widget-readout">COOPERATIVA REGIONAL</span>
          </div>
          <div class="widget-result-box" style="flex-direction:column; gap:6px;">
            <div>• Cooperados Ativos: <strong style="color:var(--accent-current)">38 famílias diretas</strong></div>
            <div>• Renda Média Mensal: <strong>R$ 3.850 / cooperado</strong> (+42% vs informal)</div>
            <div>• Qualificação Técnica: <strong>100% com Certificação IFES/CETEM</strong></div>
          </div>
        `;
        break;

      case 'totem_dialog_sim':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Totem de Transparência Socioambiental</span>
            <span class="widget-readout" style="color:#00E676">ONLINE PNUMA/APELL</span>
          </div>
          <div class="widget-result-box" style="flex-direction:column; gap:4px; font-size:11.5px;">
            <div>• Qualidade do Ar: <strong style="color:#00E676">BOA (38 µg/m³ PTS)</strong></div>
            <div>• Qualidade da Água do Rio: <strong style="color:#00E676">PRESERVADA (0 descartes)</strong></div>
            <div>• Canal de Ouvidoria: <strong>0800-ROCHAS-VERDE (Atendimento < 24h)</strong></div>
          </div>
        `;
        break;

      case 'compliance_radar':
        inspectWidget.innerHTML = `
          <div class="widget-title-row">
            <span class="widget-label">Radar de Licenças IEMA / ANM</span>
            <span class="widget-readout" style="color:#00E676">32 / 32 ATENDIDAS</span>
          </div>
          <div class="widget-result-box" style="flex-direction:column; gap:4px; font-size:11.5px;">
            <div>• Licença de Operação (LO): <strong style="color:#00E676">Válida até Out/2028</strong></div>
            <div>• Relatório Anual de Lavra (RAL): <strong>Protocolado e Aprovado</strong></div>
            <div>• Outorga Hídrica (AGERH): <strong>Captação Reduzida em 82%</strong></div>
          </div>
        `;
        break;

      default:
        inspectWidget.innerHTML = `<div class="widget-result-box">Monitoramento em conformidade contínua.</div>`;
    }
  }

  // Next hotspot trigger inside drawer
  btnNextHotspot.addEventListener('click', () => {
    const currentScenario = scenariosData[currentScenarioId];
    let nextIdx = activeHotspotIndex + 1;
    if (nextIdx >= currentScenario.hotspots.length) {
      nextIdx = 0;
    }
    openInspector(nextIdx);
  });

  // =========================================================================
  // 6. EVENT LISTENERS: TABS, STEPPER, MODALS & SHORTCUTS
  // =========================================================================

  // Tab Clicks
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const scenarioId = parseInt(tab.getAttribute('data-scenario'));
      renderScenario(scenarioId);
    });
  });

  // Stepper Clicks
  prevStepBtn.addEventListener('click', () => {
    let prev = currentScenarioId - 1;
    if (prev < 1) prev = 3;
    renderScenario(prev);
  });

  nextStepBtn.addEventListener('click', () => {
    let next = currentScenarioId + 1;
    if (next > 3) next = 1;
    renderScenario(next);
  });

  stepDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const step = parseInt(dot.getAttribute('data-step'));
      renderScenario(step);
    });
  });

  // Inspector Close
  btnCloseInspector.addEventListener('click', closeInspector);
  inspectorBackdrop.addEventListener('click', closeInspector);

  // Dossier Modal
  btnOpenDossier.addEventListener('click', () => {
    dossierModal.classList.add('active');
    dossierModal.setAttribute('aria-hidden', 'false');
    playUiSound('open');
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

  // Toggle Layers Mode (View active overlay vs base raw maquette)
  btnToggleLayers.addEventListener('click', () => {
    isLayersMode = !isLayersMode;
    btnToggleLayers.classList.toggle('active', isLayersMode);
    
    if (isLayersMode) {
      btnToggleLayers.querySelector('span').textContent = 'Camadas Ativas';
      // show current scenario image
      Object.keys(scenarioImages).forEach(key => {
        scenarioImages[key].classList.toggle('active', parseInt(key) === currentScenarioId);
      });
      hotspotsOverlay.style.opacity = '1';
    } else {
      btnToggleLayers.querySelector('span').textContent = 'Maquete Base';
      // hide all scenario overlay images to show raw cardboard
      Object.keys(scenarioImages).forEach(key => {
        scenarioImages[key].classList.remove('active');
      });
      hotspotsOverlay.style.opacity = '0.35';
    }
    playUiSound('click');
  });

  // Reset View Focus
  btnResetView.addEventListener('click', () => {
    stageWrapper.style.transform = 'scale(0.98)';
    setTimeout(() => {
      stageWrapper.style.transform = 'scale(1)';
    }, 250);
    playUiSound('click');
  });

  // Audio Toggle
  btnToggleAudio.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    btnToggleAudio.classList.toggle('active', isAudioEnabled);
    if (isAudioEnabled) {
      initAudio();
      playUiSound('open');
    }
  });

  // Fullscreen Presentation Mode
  btnToggleFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen error:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    playUiSound('click');
  });

  // Keyboard Shortcuts: 1, 2, 3 to switch; Esc to close; Left/Right to step
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (inspectorDrawer.classList.contains('active')) {
        closeInspector();
      } else if (dossierModal.classList.contains('active')) {
        dossierModal.classList.remove('active');
      }
    } else if (e.key === '1') {
      renderScenario(1);
    } else if (e.key === '2') {
      renderScenario(2);
    } else if (e.key === '3') {
      renderScenario(3);
    } else if (e.key === 'ArrowRight') {
      let next = currentScenarioId + 1;
      if (next > 3) next = 1;
      renderScenario(next);
    } else if (e.key === 'ArrowLeft') {
      let prev = currentScenarioId - 1;
      if (prev < 1) prev = 3;
      renderScenario(prev);
    }
  });

  // =========================================================================
  // 7. INITIALIZE DEFAULT VIEW
  // =========================================================================
  renderScenario(1);
  console.log('Eco-Mineração 4.0 Application initialized successfully.');

});
