import { Ingredients } from './ingredients.entity';
import { IngredientsDto } from './dto/ingredients.dto';
export declare class IngredientsService {
    private readonly ingredientsRepository;
    constructor(ingredientsRepository: typeof Ingredients);
    create(ingredients: IngredientsDto): Promise<Ingredients>;
    findAll(): Promise<Ingredients[]>;
    findOne(id: any): Promise<Ingredients>;
    delete(id: any): Promise<number>;
    update(id: any, data: any): Promise<{
        numberOfAffectedRows: number;
        updatedIngredients: Ingredients;
    }>;
}
