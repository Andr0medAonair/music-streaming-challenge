import { Album } from "src/albums/entities/album.entity";
import { Artist } from "src/artists/entities/artist.entity";

export class Song {
  id: string;
  title: string;
  artistId: string;
  artist: Artist;
  albumId: string;
  album: Album;
  duration: number;
  releaseDate: Date;
  genre?: string;
  coverImageUrl?: string;
  audioUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
