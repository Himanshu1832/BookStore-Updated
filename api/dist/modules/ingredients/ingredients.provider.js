"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientsProvider = void 0;
const ingredients_entity_1 = require("./ingredients.entity");
const constants_1 = require("../../core/constants");
exports.ingredientsProvider = [{
        provide: constants_1.INGREDIENTS_REPOSITORY,
        useValue: ingredients_entity_1.Ingredients,
    }];
//# sourceMappingURL=ingredients.provider.js.map