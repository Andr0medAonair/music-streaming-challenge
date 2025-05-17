// import { Song } from "src/songs/entities/song.entity";

export class Album {
  id: string;
  name: string;
  artist: string;
  // songs: Song[];
  coverUrl?: string;
  releaseDate?: Date;
  genre?: string;
  createdAt: Date;
  updatedAt: Date;
}
