import { Injectable, Inject } from '@nestjs/common';
import { Cart } from './cart.entity';
import { CartDto } from './dto/cart.dto';
import { User } from '../users/user.entity';
import { CART_REPOSITORY } from '../../core/constants';

@Injectable()
export class CartService {
    constructor(@Inject(CART_REPOSITORY) private readonly cartRepository: typeof Cart) { }

    async create(cart: CartDto, userId): Promise<Cart> {
        return await this.cartRepository.create<Cart>({ ...cart, userId });
    }

    async findAll(): Promise<Cart[]> {
      return await this.cartRepository.findAll<Cart>({
        // include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

    async delete(id, userId) {
        return await this.cartRepository.destroy({ where: { id, userId } });
    }

    
}