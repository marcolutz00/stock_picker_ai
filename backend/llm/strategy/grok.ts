import Llm_strategy from "./llm_strategy";

class Grok_strategy extends Llm_strategy {
    private api_key: string;

    constructor(api_key: string) {
        super();
        this.api_key = api_key;
    }

    pick_stocks(): string {
        return "";
    }
}

export default Grok_strategy;