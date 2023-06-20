import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/user/user.entity';
import { CommentsService } from './comments.service';

@Controller('comments')
@UseGuards(JwtAuthGuard)
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  @Post('/:id')
  createComment(
    @Body() createCommentDto: CreateCommentDto,
    @GetUser() user: User,
    @Param('id') id: number,
  ) {
    return this.commentService.createComment(createCommentDto, user, id);
  }
}
