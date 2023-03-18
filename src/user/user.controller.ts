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

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return body;
  }

  @Get()
  async read() {
    return [
      { name: 'Pedro', age: 36 },
      { name: 'Andre', age: 25 },
    ];
  }

  @Get(':id')
  async readOne(@Param() param) {
    return { user: { name: 'Pedro', age: 36 }, param };
  }

  @Put(':id')
  async update(@Param() params, @Body() body) {
    return {
      method: 'put',
      body,
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
    const id = param.id;
    return `O usuário ${id} foi apagado.`;
  }
}
