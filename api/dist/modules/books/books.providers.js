"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksProviders = void 0;
const books_entity_1 = require("./books.entity");
const constants_1 = require("../../core/constants");
exports.booksProviders = [{
        provide: constants_1.BOOK_REPOSITORY,
        useValue: books_entity_1.Book,
    }];
//# sourceMappingURL=books.providers.js.map