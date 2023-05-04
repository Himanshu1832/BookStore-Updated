import { Injectable, Inject } from '@nestjs/common';
import { Cart } from './cart.entity';
import { CartDto } from './dto/cart.dto';
// import { User } from '../users/user.entity';
import { Book } from '../books/books.entity';

import { CART_REPOSITORY } from '../../core/constants';

@Injectable()
export class CartService {
    constructor(@Inject(CART_REPOSITORY) private readonly cartRepository: typeof Cart) { }

    async create(cart: any[]): Promise<Cart> {
        console.log(cart);
        // const carts = { ...cart, userId }
        // console.log(carts);
        return await this.cartRepository.create<Cart>(cart);
    }

    async findAll(): Promise<Cart[]> {
      return await this.cartRepository.findAll<Cart>({
        include: [{ model: Book }],
    });
  }

  async findOne(id): Promise<Cart> {
    return await this.cartRepository.findOne({
      where: { id },
      include: [{ model: Book }],
  });
}

    async delete( bookId) {
        return await this.cartRepository.destroy({ where: {  bookId } });
    }

  //   async delete1(bookId ) {
  //     return await this.cartRepository.destroy({ where: {  bookId } });
  // } 

}