import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsObject,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { CreateArtistDto } from 'src/artists/dto/create-artist.dto';
import { Artist } from 'src/artists/entities/artist.entity';
import { CreateSongDto } from 'src/songs/dto/create-song.dto';
import { Song } from 'src/songs/entities/song.entity';

export class CreateAlbumDto {
  @IsString({ message: 'Album name must be a string' })
  @IsNotEmpty({ message: 'Album name cannot be empty' })
  @ApiProperty()
  name: string;

  @ApiProperty({ type: CreateArtistDto })
  @IsObject()
  @IsNotEmpty({ message: 'Artist cannot be empty' })
  artist: Artist;

  @ApiProperty({ isArray: true, type: CreateSongDto })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSongDto)
  songs: Song[];

  @IsOptional()
  @IsString({ message: 'Cover URL must be a string' })
  @ApiProperty()
  coverUrl?: string;

  @IsNotEmpty({ message: 'Release date cannot be empty' })
  @IsDate({ message: 'Release date must be a date' })
  @ApiProperty()
  releaseDate: Date;

  @IsOptional()
  @IsString({ message: 'Genre must be a string' })
  @ApiPropertyOptional()
  genre?: string;
}
