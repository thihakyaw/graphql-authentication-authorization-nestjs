import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {

  private readonly users = [
    {
      id: 1,
      username: 'thihakyaw',
      password: 'secret'
    },
    {
      id: 2,
      username: 'johndoe',
      password: 'secret'
    },
  ]

  create(createUserInput: CreateUserInput) {
    const user = {
      id: this.users.length+ 1,
      ...createUserInput      
    };

    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
