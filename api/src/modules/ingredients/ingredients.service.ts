import { Injectable, Inject } from '@nestjs/common';
import { Ingredients } from './ingredients.entity';
import { IngredientsDto } from './dto/ingredients.dto';
import { User } from '../users/user.entity';
import { INGREDIENTS_REPOSITORY } from '../../core/constants';

@Injectable()
export class IngredientsService {
    constructor(@Inject(INGREDIENTS_REPOSITORY) private readonly ingredientsRepository: typeof Ingredients) { }

    async create(ingredients: IngredientsDto): Promise<Ingredients> {
        console.log(ingredients)

        return await this.ingredientsRepository.create<Ingredients>({ ...ingredients});
    }

    async findAll(): Promise<Ingredients[]> {
        return await this.ingredientsRepository.findAll<Ingredients>({
        	
    	});
    }

    async findOne(id): Promise<Ingredients> {
        return await this.ingredientsRepository.findOne({
        	where: { id },
        	include: [{ model: User, attributes: { exclude: ['password'] } }],
    	});
    }

    async delete(id) {
        return await this.ingredientsRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedIngredients]] = await this.ingredientsRepository.update({ ...data }, { where: { id }, returning: true });

        return { numberOfAffectedRows, updatedIngredients };
    }
}