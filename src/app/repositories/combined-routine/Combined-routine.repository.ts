import { Injectable } from '@nestjs/common';
import { ICombinedRoutine } from './ICombined-routine.repository';
import { CreateCombinedWorkoutDto } from 'src/app/dtos/combined-workout-dto/create-combined-workout.dto';
import { CombinedWorkoutEntity } from 'src/app/entity/combined-workout/combined-workout.entity';
import { PrismaService } from 'src/app/database/prisma.service';

@Injectable()
export class CombinedRoutineRepository implements ICombinedRoutine {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCombinedWorkoutDto): Promise<CombinedWorkoutEntity> {
    const createCombinedWorkout =
      await this.prismaService.combinedWorkout.create({
        data,
      });

    return createCombinedWorkout;
  }

  async delete(id: string): Promise<CombinedWorkoutEntity> {
    return await this.prismaService.combinedWorkout.delete({
      where: { id },
    });
  }
}