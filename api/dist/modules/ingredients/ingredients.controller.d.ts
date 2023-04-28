import { IngredientsService } from './ingredients.service';
import { Ingredients as IngredientsEntity } from './ingredients.entity';
import { IngredientsDto } from './dto/ingredients.dto';
export declare class IngredientsController {
    private readonly ingredientsService;
    constructor(ingredientsService: IngredientsService);
    findAll(): Promise<IngredientsEntity[]>;
    findOne(id: number): Promise<IngredientsEntity>;
    create(ingredients: IngredientsDto): Promise<IngredientsEntity>;
    update(id: number, ingredients: IngredientsDto): Promise<IngredientsEntity>;
    remove(id: number): Promise<string>;
}
