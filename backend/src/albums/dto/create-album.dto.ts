export class CreateAlbumDto {
  id: string;
  name: string;
  artistId: string;
  artistName?: string;
  coverUrl?: string;
  releaseDate?: string;
  genre?: string;
}
