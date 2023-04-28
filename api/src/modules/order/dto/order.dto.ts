import { IsNotEmpty, MinLength } from 'class-validator';

export class OrderDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly ingName: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly code: string;
    @IsNotEmpty()
    readonly cartcode: string;
}