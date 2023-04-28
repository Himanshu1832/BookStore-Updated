import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { ingredientsProvider } from './ingredients.provider';

@Module({
    providers: [IngredientsService, ...ingredientsProvider],
    controllers: [IngredientsController],
    exports: [IngredientsService],
})
export class IngredientsModule { }