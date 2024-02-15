import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/database/prisma.service';
import { IWorkout } from './IWorkout.repository';
import { CreateWorkoutDto } from 'src/app/dtos/workout-dto/create-workout.dto';
import { WorkoutEntity } from 'src/app/entity/workout/workout.entity';

@Injectable()
export class WorkoutRepository implements IWorkout {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateWorkoutDto): Promise<WorkoutEntity> {
    const workout = await this.prismaService.workout.create({
      data,
    });

    return workout;
  }

  async remove(id: string): Promise<WorkoutEntity> {
    const workout = await this.prismaService.workout.delete({
      where: {
        id,
      },
    });

    return workout;
  }
}
