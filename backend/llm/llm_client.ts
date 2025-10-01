import llm_strategy from './strategy/llm_strategy';

class Llm_client {
    private strategy: llm_strategy;

    constructor(strategy: llm_strategy) {
        this.strategy = strategy;
    }

    private callApi(): string {
        return this.strategy.pick_stocks();
    }


}

export default Llm_client;