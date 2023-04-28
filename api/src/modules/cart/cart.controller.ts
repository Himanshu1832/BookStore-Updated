import { Controller, Get, Post, Body, NotFoundException, UseGuards, Request,Delete ,Param} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CartService } from './cart.service';
import { Cart as CartEntity } from './cart.entity';
import { CartDto } from './dto/cart.dto';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Get()
    async findAll() {
        // get all posts in the db
        return await this.cartService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() cart: any[], @Request() req) {
        // console.log(req.user.id);

        // console.log(cart);

        // create a new post and return the newly created post
        return await this.cartService.create(cart);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete()
    async remove( @Request() req) {
        // delete the post with this id
        console.log(req.user.id);

        const deleted = await this.cartService.delete( req.user.id);

        // if the number of row affected is zero, 
        // then the post doesn't exist in our db
        console.log(deleted);
        if (deleted === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }


    @UseGuards(AuthGuard('jwt'))
    @Delete(':cartcode')
    async remove1(@Param('cartcode') cartcode: string) {
        // delete the post with this id
        const deleted = await this.cartService.delete1(cartcode);

        // if the number of row affected is zero, 
        // then the post doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
    

    
}