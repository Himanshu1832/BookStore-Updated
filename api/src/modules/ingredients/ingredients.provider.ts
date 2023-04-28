import { Ingredients } from './ingredients.entity';
import { INGREDIENTS_REPOSITORY } from '../../core/constants';

export const ingredientsProvider = [{
    provide: INGREDIENTS_REPOSITORY,
    useValue: Ingredients,
}];