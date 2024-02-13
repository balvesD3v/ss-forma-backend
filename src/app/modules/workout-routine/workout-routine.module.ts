import { Module } from '@nestjs/common';
import { WorkoutRoutineService } from './workout-routine.service';
import { WorkoutRoutineController } from './workout-routine.controller';
import { PrismaService } from 'src/app/database/prisma.service';

@Module({
  controllers: [WorkoutRoutineController],
  providers: [WorkoutRoutineService, PrismaService],
})
export class WorkoutRoutineModule {}
