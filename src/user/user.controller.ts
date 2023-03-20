import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body) {
    return this.userService.postUser(body);
  }

  @Get()
  async read() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async readOne(@Param() param) {
    const user = this.userService.getUser(param.id);
    return { user, param };
  }

  @Put(':id')
  async update(@Param() params, @Body() body) {
    const user = this.userService.putUser(params.id, body);
    return {
      method: 'put',
      user,
      params,
    };
  }

  @Patch(':id')
  async updatePartial(@Param() params, @Body() body) {
    return {
      method: 'Patch',
      body,
      params,
    };
  }

  @Delete(':id')
  async delete(@Param() param) {
    return this.userService.delete(param.id);
  }
}
