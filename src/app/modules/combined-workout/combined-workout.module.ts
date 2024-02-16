import { Module } from '@nestjs/common';
import { CombinedWorkoutService } from './combined-workout.service';
import { CombinedWorkoutController } from './combined-workout.controller';
import { CombinedRoutineRepository } from 'src/app/repositories/combined-routine/Combined-routine.repository';
import { PrismaService } from 'src/app/database/prisma.service';

@Module({
  controllers: [CombinedWorkoutController],
  providers: [CombinedWorkoutService, CombinedRoutineRepository, PrismaService],
})
export class CombinedWorkoutModule {}
