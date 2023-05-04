import { CartService } from './cart.service';
import { Cart as CartEntity } from './cart.entity';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(): Promise<CartEntity[]>;
    findOne(id: number): Promise<CartEntity>;
    create(cart: any[], req: any): Promise<CartEntity>;
    remove(req: any): Promise<string>;
    remove1(bookId: number): Promise<string>;
}
