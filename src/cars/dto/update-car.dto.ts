import { IsOptional, IsString, IsUUID } from "class-validator";


export class updateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id? :  string

    @IsString()
    @IsOptional()
    readonly brand?: string

    @IsString()
    @IsOptional()
    readonly model?: string
}