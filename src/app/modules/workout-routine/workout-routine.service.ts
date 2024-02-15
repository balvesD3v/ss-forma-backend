import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWorkoutRoutineDTO } from '../../dtos/workoutRoutine-dto/create-workoutRoutine.dto';
import { UpdateWorkoutRoutineDto } from '../../dtos/workoutRoutine-dto/update-workoutRoutine.dto';
import { PrismaService } from 'src/app/database/prisma.service';
import { WorkoutRoutineRepository } from 'src/app/repositories/workoutRoutine/WorkoutRoutine.repository';

@Injectable()
export class WorkoutRoutineService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly workoutRoutineRepository: WorkoutRoutineRepository,
  ) {}

  async create(data: CreateWorkoutRoutineDTO) {
    const checkWorkoutExists =
      await this.workoutRoutineRepository.findByWorkoutRoutineName(
        data.workoutRoutine_title,
      );

    if (checkWorkoutExists) {
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

  async findAll() {
    return await this.prismaService.workoutRoutine.findMany();
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
