import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsNumber,
  IsObject,
} from 'class-validator';
import { CreateAlbumDto } from 'src/albums/dto/create-album.dto';
import { Album } from 'src/albums/entities/album.entity';
import { CreateArtistDto } from 'src/artists/dto/create-artist.dto';
import { Artist } from 'src/artists/entities/artist.entity';

export class CreateSongDto {
  @IsString({ message: 'Song title must be a string' })
  @IsNotEmpty({ message: 'Song title cannot be empty' })
  @ApiProperty()
  title: string;

  @ApiProperty({ type: CreateArtistDto })
  @IsObject()
  @IsNotEmpty({ message: 'Artist cannot be empty' })
  artist: Artist;

  @ApiProperty({ type: CreateAlbumDto })
  @IsObject()
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

  @IsNotEmpty({ message: 'Artist cannot be empty' })
  @IsString({ message: 'Audio url must be a string' })
  @ApiProperty()
  audioUrl: string;
}
