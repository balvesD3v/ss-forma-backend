import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWorkoutRoutineDTO } from '../../dtos/workout-routine-dto/create-workoutRoutine.dto';
import { UpdateWorkoutRoutineDto } from '../../dtos/workout-routine-dto/update-workoutRoutine.dto';
import { PrismaService } from 'src/app/database/prisma.service';
import { WorkoutRoutineRepository } from 'src/app/repositories/workoutRoutine/WorkoutRoutine.repository';

@Injectable()
export class WorkoutRoutineService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly workoutRoutineRepository: WorkoutRoutineRepository,
  ) {}

  async create(data: CreateWorkoutRoutineDTO) {
    return this.workoutRoutineRepository.create(data);
  }

  async findAll() {
    return await this.prismaService.workoutRoutine.findMany({
      include: {
        workout: true,
      },
    });
  }

  async update(id: string, data: UpdateWorkoutRoutineDto) {
    return this.workoutRoutineRepository.update(id, data);
  }

  async remove(id: string) {
    return this.workoutRoutineRepository.delete(id);
  }
}
