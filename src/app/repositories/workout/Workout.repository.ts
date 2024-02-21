import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/database/prisma.service';
import { IWorkout } from './IWorkout.repository';
import { CreateWorkoutDto } from 'src/app/dtos/workout-dto/create-workout.dto';
import { WorkoutEntity } from 'src/app/entity/workout/workout.entity';
import { UpdateCombinedWorkoutDto } from 'src/app/dtos/combined-workout-dto/update-combined-workout.dto';
import { UpdateWorkoutDto } from 'src/app/dtos/workout-dto/update-workout.dto';

@Injectable()
export class WorkoutRepository implements IWorkout {
  constructor(private readonly prismaService: PrismaService) {}

  async findByWorkoutId(id: string): Promise<WorkoutEntity> {
    const findWorkoutName = await this.prismaService.workout.findFirst({
      where: {
        id,
      },
    });

    return findWorkoutName;
  }

  async findByWorkoutName(workout_name: string): Promise<WorkoutEntity> {
    const findWorkoutName = await this.prismaService.workout.findFirst({
      where: {
        workout_name,
      },
    });

    return findWorkoutName;
  }

  async create(data: CreateWorkoutDto): Promise<WorkoutEntity> {
    const checkNameWorkoutExist = await this.findByWorkoutName(
      data.workout_name,
    );

    if (checkNameWorkoutExist) {
      throw new HttpException('Esse treino já existe', HttpStatus.CONFLICT);
    }

    const workout = await this.prismaService.workout.create({
      data,
    });

    return workout;
  }

  async remove(id: string): Promise<WorkoutEntity> {
    const checkWorkoutExist = await this.findByWorkoutId(id);

    if (!checkWorkoutExist) {
      throw new HttpException('Esse treino já existe', HttpStatus.CONFLICT);
    }

    const workout = await this.prismaService.workout.delete({
      where: {
        id,
      },
    });

    return workout;
  }

  async update(id: string, data: UpdateWorkoutDto): Promise<WorkoutEntity> {
    const checkWorkoutExist = await this.findByWorkoutId(id);
    const checkNameWorkoutExist = await this.findByWorkoutName(
      data.workout_name,
    );

    if (!checkWorkoutExist) {
      throw new HttpException(
        'Esse treino não já existe!',
        HttpStatus.CONFLICT,
      );
    }

    if (checkNameWorkoutExist) {
      throw new HttpException('Esse treino já existe', HttpStatus.CONFLICT);
    }

    const workout = await this.prismaService.workout.update({
      data: {
        ...data,
      },
      where: {
        id,
      },
    });

    return workout;
  }
}
