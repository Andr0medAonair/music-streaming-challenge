import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { Album } from 'src/albums/entities/album.entity';
import { Song } from 'src/songs/entities/song.entity';

export class CreateArtistDto {
  @IsString({ message: 'Song title must be a string' })
  @IsNotEmpty({ message: 'Song title cannot be empty' })
  @ApiProperty()
  name: string;

  @IsString({ message: 'Artist id must be a string' })
  @IsNotEmpty({ message: 'Artist id cannot be empty' })
  @ApiProperty()
  songs: Song[];

  @IsString({ message: 'Cover URL must be a string' })
  @IsNotEmpty({ message: 'Album cannot be empty' })
  @ApiProperty()
  albums: Album[];

  @IsOptional()
  @IsString({ message: 'Photo url must be a string' })
  @ApiPropertyOptional()
  photoUrl?: string;
}
