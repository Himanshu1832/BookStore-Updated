import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IngredientsService } from './ingredients.service';
import { Ingredients as IngredientsEntity } from './ingredients.entity';
import { IngredientsDto } from './dto/ingredients.dto';

@Controller('ingredients')
export class IngredientsController {
    constructor(private readonly ingredientsService: IngredientsService) { }

    @Get()
    async findAll() {
        // get all posts in the db
        return await this.ingredientsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<IngredientsEntity> {
        // find the post with this id
        const post = await this.ingredientsService.findOne(id);

        // if the post doesn't exit in the db, throw a 404 error
        if (!post) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // if post exist, return the post
        return post;
    }

    // @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() ingredients: IngredientsDto): Promise<IngredientsEntity> {
        console.log(ingredients)
        // create a new post and return the newly created post
        return await this.ingredientsService.create(ingredients);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() ingredients: IngredientsDto): Promise<IngredientsEntity> {
        // get the number of row affected and the updated post
        const { numberOfAffectedRows, updatedIngredients} = await this.ingredientsService.update(id, ingredients);

        // if the number of row affected is zero, 
        // it means the post doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return the updated post
        return updatedIngredients;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number) {
        // delete the post with this id
        const deleted = await this.ingredientsService.delete(id);

        // if the number of row affected is zero, 
        // then the post doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
}