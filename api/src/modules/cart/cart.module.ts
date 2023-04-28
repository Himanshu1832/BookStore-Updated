import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { cartProviders } from './cart.providers';

@Module({
    providers: [CartService, ...cartProviders],
    controllers: [CartController],
})
export class CartModule { }