import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';
import { Ingredients } from '../../modules/ingredients/ingredients.entity';
import { Book } from '../../modules/books/books.entity';

import { Cart } from '../../modules/cart/cart.entity';
import { Order } from '../../modules/order/order.entity';




export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
            case DEVELOPMENT:
                config = databaseConfig.development;
                break;
           
            default:
                config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        // sequelize.addModels([User]);
        sequelize.addModels([User,Book]);
        await sequelize.sync();
        return sequelize;
    },
}];