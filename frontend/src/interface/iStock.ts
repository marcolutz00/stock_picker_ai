
export interface Stock {
  id: number;
  name: string;
  ticker: string;
  description: string;
  recommendation: string;
  category: string;
  price: number;
  change: string;
  analysis: {
    summary: string;
    fundamentals: string;
    trends: string;
    risks: string;
    reasoning: string;
  };
}

