import { Injectable, Inject } from '@nestjs/common';
import { Order } from './order.entity';
import { OrderDto } from './dto/order.dto';
import { User } from '../users/user.entity';
import { ORDER_REPOSITORY } from '../../core/constants';

@Injectable()
export class OrderService {
    constructor(@Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order) { }

    async create(order: any[]): Promise<Order[]> {
        
        console.log(order)
        
        return await this.orderRepository.bulkCreate<Order>(order);

    }

    async findAll(): Promise<Order[]> {
        return await this.orderRepository.findAll<Order>({
        	include: [{ model: User, attributes: { exclude: ['password'] } }],
    	});
    }

   

    async delete(id, userId) {
        return await this.orderRepository.destroy({ where: { id, userId } });
    }

    
}
