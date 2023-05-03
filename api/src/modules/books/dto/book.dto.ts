import { IsNotEmpty, MinLength } from 'class-validator';

export class BookDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly title: string;

    @IsNotEmpty()
    @MinLength(4)
    readonly desc: string;

    @IsNotEmpty()
    readonly img: string;

    // @IsNotEmpty()
    readonly date: Date;

    // @IsNotEmpty()
    readonly uid: number;

    @IsNotEmpty()
    readonly mrp: number;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly college_name: string;

    @IsNotEmpty()
    readonly course: string;

    @IsNotEmpty()
    readonly branch: string;

    @IsNotEmpty()
    readonly sem: string;

    @IsNotEmpty()
    readonly edition: string;

}