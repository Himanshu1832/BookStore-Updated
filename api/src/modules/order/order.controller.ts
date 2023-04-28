import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderService } from './order.service';
import { Order as OrderEntity } from './order.entity';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
    constructor(private readonly postService: OrderService) { }

    @Get()
    async findAll() {
        // get all posts in the db
        return await this.postService.findAll();
    }

    

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() order: any[], @Request() req) {
        // create a new post and return the newly created post
        console.log(order)
        console.log("order")


        return await this.postService.create(order);
    }

    

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        // delete the post with this id
        const deleted = await this.postService.delete(id, req.user.id);

        // if the number of row affected is zero, 
        // then the post doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Order doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
}