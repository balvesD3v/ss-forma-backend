import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IWorkoutRoutine } from './IWorkoutRoutine.repository';
import { WorkoutRoutineEntity } from 'src/app/entity/workoutRoutine/workoutRoutine.entity';
import { PrismaService } from 'src/app/database/prisma.service';
import { CreateWorkoutRoutineDTO } from 'src/app/dtos/workoutRoutine-dto/create-workoutRoutine.dto';
import { UpdateWorkoutRoutineDto } from 'src/app/dtos/workoutRoutine-dto/update-workoutRoutine.dto';

@Injectable()
export class WorkoutRoutineRepository implements IWorkoutRoutine {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateWorkoutRoutineDTO): Promise<WorkoutRoutineEntity> {
    const checkWorkoutExist = await this.findByWorkoutRoutineName(
      data.workoutRoutine_title,
    );

    if (checkWorkoutExist) {
      throw new HttpException(
        'Já existe um treino com esse nome',
        HttpStatus.CONFLICT,
      );
    }

    const createRoutine = await this.prismaService.workoutRoutine.create({
      data,
    });

    return createRoutine;
  }

  async delete(id: string): Promise<WorkoutRoutineEntity> {
    const checkWorkoutExist = await this.findById(id);

    if (!checkWorkoutExist) {
      throw new HttpException('Esse treino não existe!', HttpStatus.CONFLICT);
    }

    return this.prismaService.workoutRoutine.delete({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    data: UpdateWorkoutRoutineDto,
  ): Promise<WorkoutRoutineEntity> {
    const checkWorkoutExists = await this.findById(id);
    const nameWorkoutInUse = await this.findByWorkoutRoutineName(
      data.workoutRoutine_name,
    );

    if (!checkWorkoutExists) {
      throw new HttpException('Esse treino não existe', HttpStatus.CONFLICT);
    }

    if (nameWorkoutInUse) {
      throw new HttpException(
        'O nome desse treino já existe',
        HttpStatus.CONFLICT,
      );
    }

    return this.prismaService.workoutRoutine.update({
      data: {
        ...data,
      },
      where: {
        id,
      },
    });
  }

  async findById(id: string) {
    return await this.prismaService.workoutRoutine.findFirst({
      where: { id },
    });
  }

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
