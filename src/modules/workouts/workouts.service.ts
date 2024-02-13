import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from '../../dtos/workout-dto/create-workout.dto';
import { UpdateWorkoutDto } from '../../dtos/workout-dto/update-workout.dto';

@Injectable()
export class WorkoutsService {
  create(createWorkoutDto: CreateWorkoutDto) {
    return 'This action adds a new workout';
  }

  findAll() {
    return `This action returns all workouts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workout`;
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
