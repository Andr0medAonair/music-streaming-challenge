export class Album {
  id: string;
  name: string;
  artistId: string;
  artistName?: string;
  coverUrl?: string;
  releaseDate?: Date;
  genre?: string;
  createdAt: Date;
  updatedAt: Date;
}
