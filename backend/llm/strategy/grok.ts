import Llm_strategy from "./llm_strategy";
import OpenAI from 'openai';
import { getSystemPromptFast, getUserPromptFast } from "../prompts.ts";
import api_keys from "../../../api_keys.json"

class Grok_strategy extends Llm_strategy {
    private api_key: string;
    private model: string;
    private client: OpenAI;
    private temperature: number;
        private maxOutputTokens: number;

    constructor(api_key: string) {
        super();

        // Standard-Einstellungen
        this.model = "grok-4";
        this.temperature = 0.1;
        this.maxOutputTokens = 10000;
        this.api_key = api_keys["grok_key"];
    
        this.client = new OpenAI({
            apiKey: this.api_key,
            baseURL: "https://api.x.ai/v1",
            timeout: 360000,
        });
    }

    async pick_stocks(): Promise<string> {
        var system_prompt = getSystemPromptFast();
        var user_prompt = getUserPromptFast();

        const completion = await this.client.chat.completions.create({
            model: this.model,
            messages: [
                {
                    role: "system",
                    content: system_prompt,
                },
                {
                    role: "user",
                    content: user_prompt,
                },
            ],
            temperature: this.temperature, // Temperatur für eher deterministische Ausgaben.
        });

        var text = completion.choices[0].message.content ?? "";
        return text;
    }
}

export default Grok_strategy;