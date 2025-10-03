import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  ArrowLeft,
  Calendar,
  BarChart3,
} from "lucide-react";
import type { Stock } from "../interface/iStock";


// für Tests
import mockStocks from "../example/stock_examples";


const StockTable = ({
  stocks,
  onRowClick,
}: {
  stocks: Stock[];
  onRowClick: (stock: Stock) => void;
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur">
      <table className="w-full">
        <thead className="bg-gray-900/80 border-b border-gray-700">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
              Ticker
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 hidden md:table-cell">
              Beschreibung
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
              Empfehlung
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {stocks.map((stock) => (
            <tr
              key={stock.id}
              onClick={() => onRowClick(stock)}
              className="hover:bg-gray-700/50 cursor-pointer transition-all duration-200"
            >
              <td className="px-6 py-4">
                <div className="font-medium text-white">{stock.name}</div>
                <div className="text-sm text-gray-400">{stock.category}</div>
              </td>
              <td className="px-6 py-4">
                <div className="font-mono text-white font-semibold">
                  {stock.ticker}
                </div>
                <div
                  className={`text-sm font-medium ${
                    stock.change.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {stock.change}
                </div>
              </td>
              <td className="px-6 py-4 text-gray-300 text-sm max-w-md hidden md:table-cell">
                {stock.description}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${
                    stock.recommendation === "Buy"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}
                >
                  {stock.recommendation === "Buy" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {stock.recommendation}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StockDetail = ({
  stock,
  onBack,
}: {
  stock: Stock;
  onBack: () => void;
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Zurück zur Übersicht
        </button>

        <div className="bg-gray-800/50 backdrop-blur rounded-2xl border border-gray-700 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {stock.name}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-mono text-blue-100">
                    {stock.ticker}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm text-white">
                    {stock.category}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  ${stock.price}
                </div>
                <div
                  className={`text-lg font-semibold ${
                    stock.change.startsWith("+")
                      ? "text-green-300"
                      : "text-red-300"
                  }`}
                >
                  {stock.change}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-lg font-semibold mb-8 ${
                stock.recommendation === "Buy"
                  ? "bg-green-500/20 text-green-400 border-2 border-green-500/30"
                  : "bg-red-500/20 text-red-400 border-2 border-red-500/30"
              }`}
            >
              {stock.recommendation === "Buy" ? (
                <TrendingUp className="w-6 h-6" />
              ) : (
                <TrendingDown className="w-6 h-6" />
              )}
              Empfehlung: {stock.recommendation}
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                  Zusammenfassung
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {stock.analysis.summary}
                </p>
              </section>

              <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">
                  📊 Fundamentaldaten
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {stock.analysis.fundamentals}
                </p>
              </section>

              <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">
                  📈 Trends & Katalysatoren
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {stock.analysis.trends}
                </p>
              </section>

              <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">
                  ⚠️ Risiken
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {stock.analysis.risks}
                </p>
              </section>

              <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">
                  💡 Begründung
                </h3>
                <p className="text-gray-200 leading-relaxed font-medium">
                  {stock.analysis.reasoning}
                </p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Analyse generiert: {new Date().toLocaleDateString("de-DE")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function AiStockPicker() {
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

  if (selectedStock) {
    return (
      <div className="min-h-dvh bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <main className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
          <StockDetail
            stock={selectedStock}
            onBack={() => setSelectedStock(null)}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <main className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stock-Picker
              </h1>
              <p className="text-gray-400 text-lg">
                KI-gestützte Aktienanalyse mit Grok 4.0 & GPT-4o Deep Research.<br />Developed by Lutz & Partners.
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                Wöchentliches Update · KW{" "}
                {Math.ceil(
                  (new Date().getTime() -
                    new Date(new Date().getFullYear(), 0, 1).getTime()) /
                    604800000
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-600/5 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-blue-400 font-semibold mb-2">
                  Trendaktien
                </h3>
                <p className="text-gray-300 text-sm">
                  Aktien mit starkem Momentum (z.B. basierend auf Social Media)
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-green-600/5 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-green-400 font-semibold mb-2">
                  Unterbewertete Aktien
                </h3>
                <p className="text-gray-300 text-sm">
                  Value-Opportunities im Markt
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-600/5 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-purple-400 font-semibold mb-2">
                  Besondere Ereignisse
                </h3>
                <p className="text-gray-300 text-sm">
                  Event-getriebene Chancen (z.B. starker Kursrückgang, Aktiensplit)
                </p>
              </div>
            </div>

            <StockTable stocks={mockStocks} onRowClick={setSelectedStock} />

            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>⚠️ The trend is your friend. Until its end...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
