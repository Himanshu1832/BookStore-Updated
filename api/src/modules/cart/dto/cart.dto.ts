import { IsNotEmpty, MinLength } from 'class-validator';

export class CartDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly ingName: string;

    @IsNotEmpty()
    readonly price: number;
    @IsNotEmpty()
    readonly cartcode: string;
}