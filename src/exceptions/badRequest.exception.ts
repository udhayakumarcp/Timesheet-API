import { ApiProperty } from '@nestjs/swagger';
import { BadRequestException } from '@nestjs/common';

export class BadRequestError extends BadRequestException {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: string;
}
