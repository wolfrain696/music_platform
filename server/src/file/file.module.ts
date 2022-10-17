import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from './file.service';

@Module({
  providers: [FileService],
})
export class FileModule {}
