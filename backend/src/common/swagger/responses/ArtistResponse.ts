import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SongResponse } from './SongResponse';
import { AlbumResponse } from './AlbumResponse';

export class ArtistResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  albums: AlbumResponse[];

  @ApiProperty()
  songs: SongResponse[];

  @ApiPropertyOptional()
  photoUrl?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
