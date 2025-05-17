import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './albums/albums.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [AlbumsModule, SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
