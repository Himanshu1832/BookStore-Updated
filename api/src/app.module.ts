import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { IngredientsModule } from './modules/ingredients/ingredients.module';
// import { IngredientsController } from './modules/ingredients/ingredients.controller';
import { IngredientsController } from './modules/ingredients/ingredients.controller';
import { IngredientsService } from './modules/ingredients/ingredients.service';
import { CartModule } from './modules/cart/cart.module';
import { CartService } from './modules/cart/cart.service';
import { CartController } from './modules/cart/cart.controller';
import { OrderModule } from './modules/order/order.module';
@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        UsersModule,
        AuthModule,
        // IngredientsModule,
        // CartModule,
        // OrderModule,
    ],
    // providers: [CartService],
    // controllers: [CartController],
    // controllers: [ IngredientsController]
    
    
})
export class AppModule { }