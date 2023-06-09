import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '../auth/auth.guard';
import { ReqUser } from '../common/helper/user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAll(): Promise<any> {
    return this.userService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:userId')
  async getById(
    @ReqUser() user: User,
    @Param('userId') id: string
  ): Promise<User> {
    return this.userService.findById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/:userId')
  async update(
    @ReqUser() user: User,
    @Param('userId') id: string,
    @Body() updateDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.update(user, id, updateDto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('/:userId')
  async delete(
    @ReqUser() user: User,
    @Param('userId') id: string
  ): Promise<void> {
    return this.userService.delete(user, id);
  }
}
