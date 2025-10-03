import { Stock } from "../database/models/stock.ts"

class StockRepository {
     async saveInDb(objStock: any) {
        try {
            Stock.upsert({
                name: objStock.stock_name,
                ticker: objStock.ticker
            })
        } catch (error) {
            console.error("Error beim Speichern von Stock in Datenbank:", error);
        }
     }

     async findAllStock() {
        Stock.findAll();
     }

     async findStockbyValue(value: string, ticker: boolean) {
        Stock.findAll({
            where: {
                [ticker ? "ticker" : "name"]: value
            }
        });
     }

     async findStockbyId(id: number) {
        Stock.findAll({
            where: {
                id: id
            }
        });
     }
}

export default new StockRepository();