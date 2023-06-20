import { Todo } from 'src/todo/todo.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Todo, (todo) => todo.id)
  todo: Todo;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
