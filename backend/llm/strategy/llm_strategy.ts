
abstract class Llm_strategy {

    abstract pick_stocks(): Promise<string>
}

export default Llm_strategy;