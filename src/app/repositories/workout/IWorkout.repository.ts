import { UpdateCombinedWorkoutDto } from 'src/app/dtos/combined-workout-dto/update-combined-workout.dto';
import { CreateWorkoutDto } from 'src/app/dtos/workout-dto/create-workout.dto';
import { WorkoutEntity } from 'src/app/entity/workout/workout.entity';

export interface IWorkout {
  create(data: CreateWorkoutDto): Promise<WorkoutEntity | null>;
  remove(id: string): Promise<WorkoutEntity | null>;
  update(
    id: string,
    data: UpdateCombinedWorkoutDto,
  ): Promise<WorkoutEntity | null>;
}
