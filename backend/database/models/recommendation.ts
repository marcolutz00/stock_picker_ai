import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelize from "../config/config.ts";

export class Recommendation extends Model<InferAttributes<Recommendation>, InferCreationAttributes<Recommendation>> {
    declare id: CreationOptional<number>;
    declare stock_id: number;
    declare recommendation: boolean; // 0 - SELL, 1 - BUY
    declare reason: string;
}

Recommendation.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    stock_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    recommendation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }, {
    sequelize,
    tableName: "recommendation",
    timestamps: true,
});