import { Injectable, Inject } from '@nestjs/common';
import { Cart } from './cart.entity';
import { CartDto } from './dto/cart.dto';
import { User } from '../users/user.entity';
import { CART_REPOSITORY } from '../../core/constants';

@Injectable()
export class CartService {
    constructor(@Inject(CART_REPOSITORY) private readonly cartRepository: typeof Cart) { }

    async create(cart: any[]): Promise<Cart[]> {
        console.log(cart);
        // const carts = { ...cart, userId }
        // console.log(carts);
        
        
        return await this.cartRepository.bulkCreate<Cart>(cart);
    }

    async findAll(): Promise<Cart[]> {
      return await this.cartRepository.findAll<Cart>({
        // include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

    async delete( userId) {
        return await this.cartRepository.destroy({ where: {  userId } });
    }

    async delete1(cartcode ) {
      return await this.cartRepository.destroy({ where: {  cartcode } });
  } 
}