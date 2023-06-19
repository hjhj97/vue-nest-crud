import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dts';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/user/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@Controller('todo')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/')
  getMyTodos(@GetUser() user: User) {
    return this.todoService.getMyTodos(user);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createTodo(@Body() createTodoDto: CreateTodoDto, @GetUser() user: User) {
    return this.todoService.createTodo(createTodoDto, user);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
