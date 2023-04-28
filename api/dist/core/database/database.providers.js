"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("../constants");
const database_config_1 = require("./database.config");
const user_entity_1 = require("../../modules/users/user.entity");
const ingredients_entity_1 = require("../../modules/ingredients/ingredients.entity");
const cart_entity_1 = require("../../modules/cart/cart.entity");
const order_entity_1 = require("../../modules/order/order.entity");
exports.databaseProviders = [{
        provide: constants_1.SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case constants_1.DEVELOPMENT:
                    config = database_config_1.databaseConfig.development;
                    break;
                default:
                    config = database_config_1.databaseConfig.development;
            }
            const sequelize = new sequelize_typescript_1.Sequelize(config);
            sequelize.addModels([user_entity_1.User, ingredients_entity_1.Ingredients, cart_entity_1.Cart, order_entity_1.Order]);
            await sequelize.sync();
            return sequelize;
        },
    }];
//# sourceMappingURL=database.providers.js.map