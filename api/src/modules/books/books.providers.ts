import { Book } from './books.entity';
import { BOOK_REPOSITORY } from '../../core/constants';

export const booksProviders = [{
    provide: BOOK_REPOSITORY,
    useValue: Book,
}];