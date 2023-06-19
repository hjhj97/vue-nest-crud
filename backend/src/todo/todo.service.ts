import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dts';
import { User } from 'src/user/user.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async getMyTodos(user: User) {
    const query = this.todoRepository
      .createQueryBuilder('todo')
      .where('todo.userId= :userId', { userId: user.id });
    const todos = await query.getMany();
    return todos;
  }

  async createTodo(createTodoDto: CreateTodoDto, user: User) {
    const { title } = createTodoDto;

    const newTodo = await this.todoRepository.save({
      title,
      isCompleted: false,
      user,
    });

    await this.todoRepository.save(newTodo);
    return newTodo;
  }

  async deleteTodo(id: number) {
    const result = await this.todoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('해당 게시물이 존재하지 않습니다.');
    } else
      return {
        message: '삭제 성공',
      };
  }
}
