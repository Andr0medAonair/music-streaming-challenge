import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { CreateAlbumDto } from 'src/albums/dto/create-album.dto';
import { Album } from 'src/albums/entities/album.entity';
import { CreateSongDto } from 'src/songs/dto/create-song.dto';
import { Song } from 'src/songs/entities/song.entity';

export class CreateArtistDto {
  @IsString({ message: 'Song title must be a string' })
  @IsNotEmpty({ message: 'Song title cannot be empty' })
  @ApiProperty()
  name: string;

  @ApiProperty({ isArray: true, type: CreateSongDto })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSongDto)
  songs: Song[];

  @ApiProperty({ isArray: true, type: CreateAlbumDto })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAlbumDto)
  albums: Album[];

  @IsOptional()
  @IsString({ message: 'Photo url must be a string' })
  @ApiPropertyOptional()
  photoUrl?: string;
}
