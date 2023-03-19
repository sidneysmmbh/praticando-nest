import { Injectable } from '@nestjs/common';

const listUsers: { name: string; age: number }[] = [{ name: 'João', age: 45 }];

@Injectable()
export class UserService {
  getUsers() {
    return listUsers;
  }
  postUser(user: { name: string; age: number }) {
    listUsers.push(user);
    return { mensagem: 'O usuário foi criado com sucesso.', user };
  }
}
