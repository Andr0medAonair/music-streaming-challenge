import { Album } from 'src/albums/entities/album.entity';
import { Song } from 'src/songs/entities/song.entity';

export class Artist {
  id: string;
  name: string;
  albums: Album[];
  songs: Song[];
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
