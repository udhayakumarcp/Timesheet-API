import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { UsersModule } from './users/users.module';
import { IsUniqueConstraint } from './validators/unique.validator';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService, IsUniqueConstraint],
})
export class AppModule {}
