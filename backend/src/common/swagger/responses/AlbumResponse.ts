import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AlbumResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  artistId: string;

  @ApiPropertyOptional()
  artistName?: string;

  @ApiPropertyOptional()
  coverUrl?: string;

  @ApiPropertyOptional()
  releaseDate?: string;

  @ApiPropertyOptional()
  genre?: string;
}
