
const mockStocks = [
  {
    id: 1,
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    description:
      "Führender KI-Chip-Hersteller mit starkem Wachstum im Rechenzentrumsgeschäft",
    recommendation: "Buy",
    category: "Trendaktien",
    price: 482.5,
    change: "+2.8%",
    analysis: {
      summary:
        "NVIDIA bleibt der dominierende Anbieter für KI-Beschleuniger und profitiert massiv vom KI-Boom.",
      fundamentals:
        "KGV: 45.2, KUV: 18.5, Eigenkapitalrendite: 89.3%. Starke Bilanz mit 26 Mrd. USD Cash.",
      trends:
        "Cloud-Computing und KI-Training treiben die Nachfrage. Neue H200- und B200-Chips zeigen starke Vorbestellungen.",
      risks:
        "Hohe Bewertung, potenzielle Konkurrenz durch AMD und eigene Chips der Hyperscaler.",
      reasoning:
        "Trotz hoher Bewertung rechtfertigt das außergewöhnliche Wachstum und die Marktposition einen Kauf. Die KI-Revolution steht noch am Anfang.",
    },
  },
  {
    id: 2,
    name: "Volkswagen AG",
    ticker: "VOW3",
    description:
      "Traditioneller Automobilhersteller mit günstiger Bewertung trotz E-Mobilitäts-Transformation",
    recommendation: "Buy",
    category: "Unterbewertete Aktien",
    price: 98.24,
    change: "-1.2%",
    analysis: {
      summary:
        "VW wird trotz erfolgreicher E-Auto-Strategie unter Wert gehandelt und bietet Value-Investoren Potenzial.",
      fundamentals:
        "KGV: 3.8, KBV: 0.42, Dividendenrendite: 8.1%. Stark unterbewertet im Branchenvergleich.",
      trends:
        "Erfolgreiche E-Auto-Plattform (MEB), steigender Marktanteil in China, Partnerschaft mit Rivian.",
      risks:
        "Konjunkturabhängigkeit, Kostendruck durch Transformation, geopolitische Risiken in China.",
      reasoning:
        "Die extreme Unterbewertung bietet ein asymmetrisches Chance-Risiko-Verhältnis. Bei erfolgreicher Transformation ist eine Neubewertung sehr wahrscheinlich.",
    },
  },
  {
    id: 3,
    name: "Palantir Technologies",
    ticker: "PLTR",
    description:
      "Big-Data-Analysesoftware für Regierungen und Unternehmen mit starkem KI-Fokus",
    recommendation: "Buy",
    category: "Trendaktien",
    price: 38.67,
    change: "+5.4%",
    analysis: {
      summary:
        "Palantir profitiert von steigender Nachfrage nach KI-Lösungen im Enterprise-Bereich.",
      fundamentals:
        "KUV: 28.4, Bruttomarge: 81%, erstmals profitabel. Starkes Umsatzwachstum von 27% YoY.",
      trends:
        "AIP (Artificial Intelligence Platform) gewinnt Traktion, wachsende kommerzielle Kundenbasis.",
      risks:
        "Hohe Bewertung, Abhängigkeit von Regierungsaufträgen, komplexe Verkaufszyklen.",
      reasoning:
        "Die AIP-Plattform könnte zum Standard für Enterprise-KI werden. Das Wachstum rechtfertigt die Premium-Bewertung.",
    },
  },
  {
    id: 4,
    name: "BioNTech SE",
    ticker: "BNTX",
    description:
      "Biotech-Unternehmen mit mRNA-Plattform und Pipeline für Krebstherapien",
    recommendation: "Sell",
    category: "Besondere Ereignisse",
    price: 112.8,
    change: "-3.1%",
    analysis: {
      summary:
        "Nach COVID-Boom fehlen kurzfristige Katalysatoren, Krebs-Pipeline braucht noch Jahre.",
      fundamentals:
        "Hohe Cash-Position, aber sinkende Umsätze. COVID-Geschäft normalisiert sich.",
      trends:
        "Rückgang der COVID-Impfnachfrage, Fokus auf Krebsimmuntherapie zeigt erste Erfolge.",
      risks:
        "Langwierige Entwicklungszyklen, unsichere Zulassung neuer Medikamente, starker Wettbewerb.",
      reasoning:
        "Ohne klare Katalysatoren bleibt die Aktie unter Druck. Bessere Einstiegschancen könnten sich ergeben.",
    },
  },
  {
    id: 5,
    name: "MicroStrategy Inc",
    ticker: "MSTR",
    description: "Software-Unternehmen, das massiv in Bitcoin investiert hat",
    recommendation: "Buy",
    category: "Besondere Ereignisse",
    price: 185.4,
    change: "+8.2%",
    analysis: {
      summary:
        "MicroStrategy fungiert als Bitcoin-Proxy mit Hebel und profitiert von institutioneller BTC-Adoption.",
      fundamentals:
        "Besitzt über 190.000 BTC, Softwaregeschäft profitabel, aggressive Akquisitionsstrategie.",
      trends:
        "Bitcoin-ETF-Zulassungen, institutionelle Adoption, halving-getriebene Knappheit.",
      risks:
        "Extreme Volatilität, Abhängigkeit von Bitcoin-Preis, hohe Verschuldung für BTC-Käufe.",
      reasoning:
        "Als leveraged Bitcoin-Play mit operativem Geschäft bietet MSTR überproportionale Partizipation an BTC-Rallyes.",
    },
  },
  {
    id: 6,
    name: "Intel Corporation",
    ticker: "INTC",
    description:
      "Chip-Hersteller unter Druck durch verlorene Marktanteile an AMD und ARM",
    recommendation: "Sell",
    category: "Unterbewertete Aktien",
    price: 23.15,
    change: "-0.8%",
    analysis: {
      summary:
        "Intel kämpft mit Fertigungsproblemen und Marktanteilsverlusten. Die Turnaround-Story ist risikobehaftet.",
      fundamentals:
        "Fallende Margen, hohe Investitionen für neue Fabs, schwindende Marktanteile.",
      trends:
        "Verlust der Prozessführerschaft, ARM-Chips gewinnen Marktanteile, Foundry-Geschäft noch unprofitabel.",
      risks:
        "Langwierige Turnaround-Phase, starker Wettbewerb, hoher Kapitalbedarf.",
      reasoning:
        "Trotz günstiger Bewertung gibt es bessere Opportunitäten. Der Turnaround könnte Jahre dauern und ist keineswegs sicher.",
    },
  },
];

export default mockStocks;