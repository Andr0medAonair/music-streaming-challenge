import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';
import { AlbumResponse } from 'src/common/swagger/responses/AlbumResponse';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';
import { ErrorResponse } from 'src/common/swagger/responses/ErrorResponse';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new album' })
  @ApiCreatedResponse({ type: AlbumResponse, description: 'Created album' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  async create(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return await this.albumsService.create(createAlbumDto);
  }

  @Get()
  @ApiOperation({ summary: 'Search all albums' })
  @ApiOkResponse({ type: [AlbumResponse], description: 'Found albums' })
  async findAll(): Promise<Album[]> {
    return await this.albumsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Search for a specific album' })
  @ApiOkResponse({ type: AlbumResponse, description: 'Found album' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async findOne(@Param('id') id: string): Promise<Album> {
    return await this.albumsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an album' })
  @ApiOkResponse({ type: AlbumResponse, description: 'Updated album' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async update(
    @Param('id') id: string,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ): Promise<Album> {
    return await this.albumsService.update(+id, updateAlbumDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an album' })
  @ApiNoContentResponse({ description: 'Deleted album' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  async remove(@Param('id') id: string) {
    return await this.albumsService.remove(+id);
  }
}
