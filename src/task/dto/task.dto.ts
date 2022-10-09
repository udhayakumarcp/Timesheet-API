import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { WorkFrom } from '../entities/task.entity';

//   @ApiProperty({
//     type: Number,
//   })
export class CreateTaskDto {
  @IsNumber()
  @IsPositive()
  taskId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  date: string;

  @ApiProperty()
  @IsNotEmpty()
  workingFrom: WorkFrom;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  project: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phase: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  task: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  duration: string;
}
