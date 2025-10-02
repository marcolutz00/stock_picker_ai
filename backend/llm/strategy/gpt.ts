import Llm_strategy from "./llm_strategy";
import OpenAI from 'openai';
import { getSystemPromptIndepth, getUserPromptIndepth } from "../prompts.ts";
import api_keys from "../../../api_keys.json"

class Gpt_strategy extends Llm_strategy {
    private api_key: string;
        private model: string;
        private client: OpenAI;
        private temperature: number;
        private maxOutputTokens: number;

    constructor() {
        super();

        // Standard-Einstellungen
        this.model = "o3-deep-research";
        this.temperature = 0.5; // höhere Temp, für mehr Spielraum
        this.maxOutputTokens = 10000;
        this.api_key = api_keys["gpt_key"];
        
        this.client = new OpenAI({ apiKey: this.api_key });
    }

    async pick_stocks(): Promise<string> {
        var system_prompt = getSystemPromptIndepth();
        var user_prompt = getUserPromptIndepth();

        const completion = await this.client.responses.create({
            model: this.model,
            input: [
                { role: "developer", content: [{ type: "input_text", text: system_prompt }] },
                { role: "user", content: [{ type: "input_text", text: user_prompt }] },
            ],
            temperature: this.temperature,
            max_output_tokens: this.maxOutputTokens,
            reasoning: { summary: "auto" },
            tools: [{ type: "web_search_preview" }]
        });

        var text = ""
        for (const item of completion.output ?? []) {
            if (item.type === "message") {
                for (const c of item.content ?? []) {
                    if (c.type === "output_text" && c.text) {
                        text += c.text + "\n";
                    }
                }
            }
        }

        return text.trim();
    }
}

export default Gpt_strategy;