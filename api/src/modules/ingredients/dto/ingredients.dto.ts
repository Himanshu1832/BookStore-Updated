import { IsNotEmpty, MinLength } from 'class-validator';

export class IngredientsDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly ingName: string;

    @IsNotEmpty()
    readonly price: number;
}

// import { IsNotEmpty, MinLength } from 'class-validator';

// export class IngredientsDto {
//     @IsNotEmpty()
//     @MinLength(4)
//     readonly ingName: string;

//     @IsNotEmpty()
//     readonly price: number;
// }