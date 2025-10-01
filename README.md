# AiStockPicker
AiStockPicker nutzt LLMs, um Aktien basierend auf Trends, Bewertungen und Finanzdaten zu analysieren und auszuwählen.

## Idee
LLMs haben genügend Informationen/Wissen, um Aktien und deren Trends zu analysieren und auszuwählen. AiStockPicker nutzt diese Fähigkeit, um wöchentlich drei Top-Aktien aus verschiedenen Kategorien zu identifizieren und zu präsentieren.
Grok wird dabei für eine erste, schnelle Auswahl, basierend auf dem eigenen Wissen und X-Daten genutzt. Anschließend wird GPT-3o Deep Research für eine tiefere Analyse und Bewertung der ausgewählten Aktien verwendet.

## Kernfunktionen
- **Verschiedene Aktientypen**: Jede Woche Top-3 Aktien aus den Bereichen: Unterbewertete Aktien, Trendaktien und besondere Börsenereignisse.
- **LLM API-Calls**: Integration von verschiedenen LLMs - Grok 4.0 wird für die erste Analyse genutzt, gefolgt von GPT-3o Deep-Research für eine detaillierte Bewertung.
- **Datenquellen**: Vollständig von LLMs generierte Analysen basierend auf ihrem umfangreichen Wissen.
- **Wöchentliche Updates**: Automatisierte wöchentliche Generierung und Veröffentlichung der Aktienauswahl.
- **UI**: Einfaches UI zur Anzeige der ausgewählten Aktien und deren Analysen.

## Technologie-Stack
- **Backend**: Typescript, Node.js
- **Frontend**: React, TailwindCSS
- **LLM Integration**: Grok 4.0, GPT-3o Deep Research
- **Datenbank**: PostgreSQL