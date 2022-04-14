import { IsNotEmpty } from 'class-validator';

export class CreateCrudCapteurDto {
    @IsNotEmpty()
    temperature:string;

    @IsNotEmpty()
    humidite:string;
}
