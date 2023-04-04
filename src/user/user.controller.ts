import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreatUserDto } from './creatUser.dto';
import { User } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreatUserDto) {
    return this.userService.postUser(body);
  }

  @Get()
  async read() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    const user: User = this.userService.getUser(id);
    return { user, id };
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CreatUserDto,
  ) {
    const user = this.userService.putUser(id, body);
    return {
      method: 'put',
      user,
      id,
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
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
