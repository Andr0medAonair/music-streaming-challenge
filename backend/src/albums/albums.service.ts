import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    return {
      id: '1',
      name: 'Midnight Melodies',
      artistId: '101',
      artistName: 'Luna Ray',
      coverUrl: 'https://example.com/covers/midnight-melodies.jpg',
      releaseDate: new Date('2023-11-10'),
      genre: 'Ambient',
      createdAt: new Date('2023-11-10'),
      updatedAt: new Date('2023-11-10'),
    };
  }

  async findAll(): Promise<Album[]> {
    return [
      {
        id: '1',
        name: 'Midnight Melodies',
        artistId: '101',
        artistName: 'Luna Ray',
        coverUrl: 'https://example.com/covers/midnight-melodies.jpg',
        releaseDate: new Date('2023-11-10'),
        genre: 'Ambient',
        createdAt: new Date('2023-11-10'),
        updatedAt: new Date('2023-11-10'),
      },
      {
        id: '2',
        name: 'Echoes of Summer',
        artistId: '102',
        artistName: 'The Sunshades',
        coverUrl: 'https://example.com/covers/echoes-of-summer.jpg',
        releaseDate: new Date('2022-06-15'),
        genre: 'Indie Rock',
        createdAt: new Date('2023-11-10'),
        updatedAt: new Date('2023-11-10'),
      },
      {
        id: '3',
        name: 'Digital Dreams',
        artistId: '103',
        artistName: 'SynthNova',
        coverUrl: 'https://example.com/covers/digital-dreams.jpg',
        releaseDate: new Date('2024-03-01'),
        genre: 'Synthwave',
        createdAt: new Date('2023-11-10'),
        updatedAt: new Date('2023-11-10'),
      },
    ];
  }

  async findOne(id: number): Promise<Album> {
    return {
      id: '1',
      name: 'Midnight Melodies',
      artistId: '101',
      artistName: 'Luna Ray',
      coverUrl: 'https://example.com/covers/midnight-melodies.jpg',
      releaseDate: new Date('2023-11-10'),
      genre: 'Ambient',
      createdAt: new Date('2023-11-10'),
      updatedAt: new Date('2023-11-10'),
    };
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    return {
      id: '1',
      name: 'Melodies',
      artistId: '101',
      artistName: 'Luna Ray',
      coverUrl: 'https://example.com/covers/midnight-melodies.jpg',
      releaseDate: new Date('2023-11-10'),
      genre: 'Ambient',
      createdAt: new Date('2023-11-10'),
      updatedAt: new Date('2023-11-10'),
    };
  }

  async remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
