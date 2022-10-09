import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BadRequestError } from '../exceptions/badRequest.exception';
import { NotFoundError } from '../exceptions/notFound.exception';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity, description: 'Success response' })
  @ApiBadRequestResponse({
    type: BadRequestError,
    description: 'Validation error',
  })
  create(@Body() userDto: UserDto) {
    return this.usersService.create(userDto);
  }

  @Get()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity, description: 'Success response' })
  @ApiNotFoundResponse({
    type: NotFoundError,
    description: 'User not found error',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({ type: UserEntity, description: 'Success response' })
  @ApiBadRequestResponse({
    type: BadRequestError,
    description: 'Validation error',
  })
  @ApiNotFoundResponse({
    type: NotFoundError,
    description: 'User not found error',
  })
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.usersService.update(id, userDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity, description: 'Success response' })
  @ApiNotFoundResponse({
    type: NotFoundError,
    description: 'User not found error',
  })
  remove(@Param('id') id: string) {
    return this.usersService.markUserAsRelived(id);
  }
}
