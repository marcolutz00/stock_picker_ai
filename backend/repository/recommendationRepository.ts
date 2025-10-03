import { Recommendation } from "../database/models/recommendation.ts"

class RecommendationRepository {
     async saveInDb(objRecommendation: any) {
        try {
            Recommendation.upsert({
                stock_id: objRecommendation.stock_id,
                recommendation: objRecommendation.recommendation === "buy" ? true: false,
                reason: objRecommendation.reason
            })
        } catch (error) {
            console.error("Error beim Speichern von Recommendation in Datenbank:", error);
        }
     }

     async findAllRecommendation() {
        Recommendation.findAll();
     }

     async findRecommendationbyValue(value: string, ticker: boolean) {
        Recommendation.findAll({
            where: {
                recommendation: [value === "buy" ? true : false]
            }
        });
     }

     async findRecommendationbyId(id: number) {
        Recommendation.findAll({
            where: {
                stock_id: id
            }
        });
     }
}

export default new RecommendationRepository();