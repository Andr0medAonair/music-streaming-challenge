import { Artist } from "src/artists/entities/artist.entity";
import { Song } from "src/songs/entities/song.entity";

export class Album {
  id: string;
  name: string;
  artistId: string;
  artist: Artist;
  songs: Song[];
  coverUrl?: string;
  releaseDate: Date;
  genre?: string;
  createdAt: Date;
  updatedAt: Date;
}
