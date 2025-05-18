import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AlbumResponse } from './AlbumResponse';
import { ArtistResponse } from './ArtistResponse';

export class SongResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  artistId: string;

  @ApiProperty()
  artist: ArtistResponse;

  @ApiProperty()
  albumId: string;

  @ApiProperty()
  album: AlbumResponse;

  @ApiProperty()
  duration: number;

  @ApiPropertyOptional()
  releaseDate: Date;

  @ApiPropertyOptional()
  genre?: string;

  @ApiPropertyOptional()
  coverImageUrl?: string;

  @ApiProperty()
  audioUrl: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
