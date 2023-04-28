import { OrderService } from './order.service';
import { Order as OrderEntity } from './order.entity';
export declare class OrderController {
    private readonly postService;
    constructor(postService: OrderService);
    findAll(): Promise<OrderEntity[]>;
    create(order: any[], req: any): Promise<OrderEntity[]>;
    remove(id: number, req: any): Promise<string>;
}
