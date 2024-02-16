import { Injectable } from '@nestjs/common';
import { CreateWorkoutRoutineDTO } from '../../dtos/workout-routine-dto/create-workout-routine.dto';
import { UpdateWorkoutRoutineDto } from '../../dtos/workout-routine-dto/update-workout-routine.dto';
import { WorkoutRoutineRepository } from 'src/app/repositories/workout-routine/Workout-routine.repository';

@Injectable()
export class WorkoutRoutineService {
  constructor(
    private readonly workoutRoutineRepository: WorkoutRoutineRepository,
  ) {}

  async create(data: CreateWorkoutRoutineDTO) {
    return this.workoutRoutineRepository.create(data);
  }

  async findAll() {
    return this.workoutRoutineRepository.findAll();
  }

  async update(id: string, data: UpdateWorkoutRoutineDto) {
    return this.workoutRoutineRepository.update(id, data);
  }

  async remove(id: string) {
    return this.workoutRoutineRepository.delete(id);
  }
}
