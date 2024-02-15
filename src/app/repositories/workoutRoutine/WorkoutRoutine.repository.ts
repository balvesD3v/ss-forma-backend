import { Injectable } from '@nestjs/common';
import { IWorkoutRoutine } from './IWorkoutRoutine.repository';
import { WorkoutRoutineEntity } from 'src/app/entity/workoutRoutine/workoutRoutine.entity';
import { PrismaService } from 'src/app/database/prisma.service';

@Injectable()
export class WorkoutRoutineRepository implements IWorkoutRoutine {
  constructor(private readonly prismaService: PrismaService) {}

  async findByWorkoutRoutineName(
    workoutRoutine_title: string,
  ): Promise<WorkoutRoutineEntity | null> {
    const routineName = await this.prismaService.workoutRoutine.findFirst({
      where: {
        workoutRoutine_title,
      },
    });
    return routineName;
  }
}
