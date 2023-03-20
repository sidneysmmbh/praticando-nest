import { Injectable } from '@nestjs/common';

let listUsers: { id: number; name: string; age: number }[] = [
  { id: 1, name: 'João', age: 45 },
];

@Injectable()
export class UserService {
  getUsers() {
    return listUsers;
  }

  postUser(user: { id: number; name: string; age: number }) {
    listUsers.push(user);
    return { mensagem: 'O usuário foi criado com sucesso.', user };
  }

  getUser(id: number) {
    const user = listUsers.find((item) => item.id == id);
    return user;
  }

  putUser(id: number, user: { id: number; name: string; age: number }) {
    const index: number = listUsers.findIndex((item) => item.id == id);
    listUsers[index] = user;
    return user;
  }

  delete(id: number) {
    listUsers = listUsers.filter((item) => item.id != id);
    return 'O usuário foi deletado com sucesso.';
  }
}
