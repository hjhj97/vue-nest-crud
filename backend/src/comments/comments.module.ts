import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comments.entity';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), TodoModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
