import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:Zopach12!@cluster0.mlnn9yz.mongodb.net/music-platform?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({ rootPath: resolve(__dirname, 'static') }),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
