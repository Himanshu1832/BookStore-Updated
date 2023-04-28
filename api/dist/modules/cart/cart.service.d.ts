import { Cart } from './cart.entity';
export declare class CartService {
    private readonly cartRepository;
    constructor(cartRepository: typeof Cart);
    create(cart: any[]): Promise<Cart[]>;
    findAll(): Promise<Cart[]>;
    delete(userId: any): Promise<number>;
    delete1(cartcode: any): Promise<number>;
}
