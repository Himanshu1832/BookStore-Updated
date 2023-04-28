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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/user.entity");
const constants_1 = require("../../core/constants");
let OrderService = class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(order) {
        console.log(order);
        return await this.orderRepository.bulkCreate(order);
    }
    async findAll() {
        return await this.orderRepository.findAll({
            include: [{ model: user_entity_1.User, attributes: { exclude: ['password'] } }],
        });
    }
    async delete(id, userId) {
        return await this.orderRepository.destroy({ where: { id, userId } });
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.ORDER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map