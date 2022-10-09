import { ApiProperty } from '@nestjs/swagger';
import { NotFoundException } from '@nestjs/common';
export class NotFoundError extends NotFoundException {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: string;
}
