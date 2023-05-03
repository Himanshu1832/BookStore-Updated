import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BooksService } from './books.service';
import { Book as BookEntity } from './books.entity';
import { BookDto } from './dto/book.dto';

@Controller('addbook')
export class BooksController {

    constructor(private readonly BookService: BooksService) { }

    @Get()
    async findAll() {
        // get all Books in the db
        console.log("get all books")
        return await this.BookService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<BookEntity> {
        // find the Book with this id
        const Book = await this.BookService.findOne(id);

        // if the Book doesn't exit in the db, throw a 404 error
        if (!Book) {
            throw new NotFoundException('This Book doesn\'t exist');
        }

        // if Book exist, return the Book
        return Book;
    }

    // @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() Book: BookDto, @Request() req): Promise<BookEntity> {
        console.log(Book)
        // create a new Book and return the newly created Book
        return await this.BookService.create(Book);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() Book: BookDto, @Request() req): Promise<BookEntity> {
        // get the number of row affected and the updated Book
        const { numberOfAffectedRows, updatedBook } = await this.BookService.update(id, Book, req.user.id);

        // if the number of row affected is zero, 
        // it means the Book doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Book doesn\'t exist');
        }

        // return the updated Book
        return updatedBook;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        // delete the Book with this id
        const deleted = await this.BookService.delete(id, req.user.id);

        // if the number of row affected is zero, 
        // then the Book doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Book doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
}