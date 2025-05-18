export class Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  releaseDate: Date;
  genre?: string;
  coverImageUrl?: string;
  audioUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
