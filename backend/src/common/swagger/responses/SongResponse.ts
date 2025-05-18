import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AlbumResponse } from './AlbumResponse';

export class SongResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  artist: string;

  @ApiProperty()
  album: AlbumResponse;

  @ApiPropertyOptional()
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
