import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// refer to bookmark model in prisma/schema.prisma
export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsNotEmpty()
  link: string;
}
