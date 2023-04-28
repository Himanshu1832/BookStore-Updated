import { Order } from './order.entity';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: typeof Order);
    create(order: any[]): Promise<Order[]>;
    findAll(): Promise<Order[]>;
    delete(id: any, userId: any): Promise<number>;
}
