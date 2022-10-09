import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty()
  taskId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  workingFrom: WorkFrom;

  @ApiProperty()
  project: string;

  @ApiProperty()
  phase: string;

  @ApiProperty()
  task: string;

  @ApiProperty()
  duration: string;
}

export enum WorkFrom {
  home = 'Home',
  office = 'Office',
  onSite = 'On site',
}
