import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsNumber,
} from 'class-validator';
import { Album } from 'src/albums/entities/album.entity';
import { Artist } from 'src/artists/entities/artist.entity';

export class CreateSongDto {
  @IsString({ message: 'Song title must be a string' })
  @IsNotEmpty({ message: 'Song title cannot be empty' })
  @ApiProperty()
  title: string;

  @IsString({ message: 'Artist id must be a string' })
  @IsNotEmpty({ message: 'Artist id cannot be empty' })
  @ApiProperty()
  artist: Artist;

  @IsString({ message: 'Cover URL must be a string' })
  @IsNotEmpty({ message: 'Album cannot be empty' })
  @ApiProperty()
  album: Album;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  duration?: number;

  @IsOptional()
  @IsDate({ message: 'Genre must be a date' })
  @ApiPropertyOptional()
  releaseDate?: Date;

  @IsOptional()
  @IsString({ message: 'Genre must be a string' })
  @ApiPropertyOptional()
  genre?: string;

  @IsOptional()
  @IsString({ message: 'Cover image url must be a string' })
  @ApiPropertyOptional()
  coverImageUrl?: string;

  @IsOptional()
  @IsString({ message: 'Audio url must be a string' })
  @ApiPropertyOptional()
  audioUrl?: string;
}
