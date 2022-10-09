import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { BadRequestError } from '../exceptions/badRequest.exception';
import { NotFoundError } from '../exceptions/notFound.exception';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(userDto: UserDto) {
    const duplicate = await this.prisma.user.findUnique({
      where: { email: userDto.email },
    });
    if (duplicate) {
      return new BadRequestError(`Email ${userDto.email} is already exists`);
    } else {
      return await this.prisma.user.create({ data: userDto });
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (user) {
      return user;
    }
    return new NotFoundError([`No user found for the id ${id}`]);
  }

  async update(id: string, userDto: UserDto) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: userDto,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        switch (e.code) {
          case 'P2002':
            return new BadRequestError(
              `Email ${userDto.email} is already exists`,
            );
          case 'P2025':
            return new NotFoundError([`No user found for the id ${id}`]);
        }
      }
    }
  }

  async markUserAsRelived(id: string) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: { relieved: true },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2025') {
          return new NotFoundError([`No user found for the id ${id}`]);
        }
      }
    }
  }
}
