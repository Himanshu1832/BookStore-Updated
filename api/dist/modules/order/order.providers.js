"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProviders = void 0;
const order_entity_1 = require("./order.entity");
const constants_1 = require("../../core/constants");
exports.orderProviders = [{
        provide: constants_1.ORDER_REPOSITORY,
        useValue: order_entity_1.Order,
    }];
//# sourceMappingURL=order.providers.js.map