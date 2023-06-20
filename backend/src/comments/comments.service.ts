import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comments.entity';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { TodoService } from 'src/todo/todo.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly todoService: TodoService,
  ) {}

  async createComment(
    createCommentDto: CreateCommentDto,
    user: User,
    id: number,
  ) {
    const { content } = createCommentDto;
    const todo = await this.todoService.getTodoById(id);
    if (!todo) {
      throw new NotFoundException('No Such Todo!');
    }
    const newComment = this.commentRepository.create({ content, user, todo });
    await this.commentRepository.save(newComment);
    return newComment;
  }

  async getAllCommentsByTodoId(id: number) {
    const todo = await this.todoService.getTodoById(id);
    const found = await this.commentRepository.findBy({ todo });
    return found;
  }
}
