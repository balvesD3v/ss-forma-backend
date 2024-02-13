import { Injectable } from '@nestjs/common';
import { CreateWorkoutRoutineDTO } from '../../dtos/workoutRoutine-dto/create-workoutRoutine.dto';
import { UpdateWorkoutRoutineDto } from '../../dtos/workoutRoutine-dto/update-workoutRoutine.dto';
import { PrismaService } from 'src/app/database/prisma.service';

@Injectable()
export class WorkoutRoutineService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateWorkoutRoutineDTO) {
    const createRoutine = await this.prismaService.workoutRoutine.create({
      data,
    });

    return createRoutine;
  }

  findAll() {
    return `This action returns all workoutRoutine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workoutRoutine`;
  }

  update(id: number, updateWorkoutRoutineDto: UpdateWorkoutRoutineDto) {
    return `This action updates a #${id} workoutRoutine`;
  }

  remove(id: number) {
    return `This action removes a #${id} workoutRoutine`;
  }
}
