import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID, IsOptional, IsDate } from 'class-validator';

export class CreateAlbumDto {
  @IsString({ message: 'Album name must be a string' })
  @IsNotEmpty({ message: 'Album name cannot be empty' })
  @ApiProperty()
  name: string;

  @IsString({ message: 'Artist id must be a string' })
  @IsNotEmpty({ message: 'Artist id cannot be empty' })
  @IsUUID('4', { message: 'Artist id must be a valid UUID' })
  @ApiProperty()
  artistId: string;

  @IsOptional()
  @IsString({ message: 'Artist name must be a string' })
  @ApiPropertyOptional()
  artistName?: string;

  @IsOptional()
  @IsString({ message: 'Cover URL must be a string' })
  @ApiPropertyOptional()
  coverUrl?: string;

  @IsOptional()
  @IsDate({ message: 'Release date must be a date' })
  @ApiPropertyOptional()
  releaseDate?: string;

  @IsOptional()
  @IsString({ message: 'Genre must be a string' })
  @ApiPropertyOptional()
  genre?: string;
}
