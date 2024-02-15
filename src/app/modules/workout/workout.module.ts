import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { WorkoutRepository } from 'src/app/repositories/workout/Workout.repository';
import { PrismaService } from 'src/app/database/prisma.service';

@Module({
  controllers: [WorkoutController],
  providers: [WorkoutService, WorkoutRepository, PrismaService],
})
export class WorkoutModule {}
