import { Module } from '@nestjs/common';
import { WorkoutRoutineService } from './workout-routine.service';
import { WorkoutRoutineController } from './workout-routine.controller';
import { PrismaService } from 'src/app/database/prisma.service';
import { WorkoutRoutineRepository } from 'src/app/repositories/workoutRoutine/WorkoutRoutine.repository';

@Module({
  controllers: [WorkoutRoutineController],
  providers: [WorkoutRoutineService, WorkoutRoutineRepository, PrismaService],
})
export class WorkoutRoutineModule {}
