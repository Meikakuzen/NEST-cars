import { IsString, MinLength } from "class-validator";

export class createCarDto {
    @IsString({ message: "This brand is not valid"})
   readonly brand: string;

   @IsString()
   @MinLength(3)
   readonly model: string

}

