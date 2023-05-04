import { Cart } from './cart.entity';
export declare class CartService {
    private readonly cartRepository;
    constructor(cartRepository: typeof Cart);
    create(cart: any[]): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findOne(id: any): Promise<Cart>;
    delete(bookId: any): Promise<number>;
}
