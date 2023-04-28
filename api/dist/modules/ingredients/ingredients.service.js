"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientsService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/user.entity");
const constants_1 = require("../../core/constants");
let IngredientsService = class IngredientsService {
    constructor(ingredientsRepository) {
        this.ingredientsRepository = ingredientsRepository;
    }
    async create(ingredients) {
        console.log(ingredients);
        return await this.ingredientsRepository.create(Object.assign({}, ingredients));
    }
    async findAll() {
        return await this.ingredientsRepository.findAll({});
    }
    async findOne(id) {
        return await this.ingredientsRepository.findOne({
            where: { id },
            include: [{ model: user_entity_1.User, attributes: { exclude: ['password'] } }],
        });
    }
    async delete(id) {
        return await this.ingredientsRepository.destroy({ where: { id } });
    }
    async update(id, data) {
        const [numberOfAffectedRows, [updatedIngredients]] = await this.ingredientsRepository.update(Object.assign({}, data), { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedIngredients };
    }
};
IngredientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.INGREDIENTS_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], IngredientsService);
exports.IngredientsService = IngredientsService;
//# sourceMappingURL=ingredients.service.js.map