import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import sequelize from "../config/config.ts";

export class Stock extends Model<InferAttributes<Stock>, InferCreationAttributes<Stock>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare ticker: string;
}

Stock.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ticker: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }, {
    sequelize,
    tableName: "stock",
    timestamps: true,
});

