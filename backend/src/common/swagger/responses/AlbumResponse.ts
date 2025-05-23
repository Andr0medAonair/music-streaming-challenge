import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SongResponse } from './SongResponse';
import { ArtistResponse } from './ArtistResponse';

export class AlbumResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  artistId: string;

  @ApiProperty()
  artist: ArtistResponse;

  @ApiProperty()
  songs: SongResponse[];

  @ApiPropertyOptional()
  coverUrl?: string;

  @ApiProperty()
  releaseDate: Date;

  @ApiPropertyOptional()
  genre?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
