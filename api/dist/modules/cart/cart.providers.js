"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartProviders = void 0;
const cart_entity_1 = require("./cart.entity");
const constants_1 = require("../../core/constants");
exports.cartProviders = [{
        provide: constants_1.CART_REPOSITORY,
        useValue: cart_entity_1.Cart,
    }];
//# sourceMappingURL=cart.providers.js.map