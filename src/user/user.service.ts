import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

let listUsers: User[] = [{ id: 1, name: 'João', age: 45 }];

@Injectable()
export class UserService {
  getUsers() {
    return listUsers;
  }

  postUser(user: User) {
    listUsers.push(user);
    return { mensagem: 'O usuário foi criado com sucesso.', user };
  }

  getUser(id: number) {
    const user: User = listUsers.find((item) => item.id == id);
    return user;
  }

  putUser(id: number, user: User) {
    const index: number = listUsers.findIndex((item) => item.id == id);
    listUsers[index] = user;
    return user;
  }

  delete(id: number) {
    listUsers = listUsers.filter((item) => item.id != id);
    return 'O usuário foi deletado com sucesso.';
  }
}
