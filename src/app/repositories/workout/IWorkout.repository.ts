import { CreateWorkoutDto } from 'src/app/dtos/workout-dto/create-workout.dto';
import { UpdateWorkoutDto } from 'src/app/dtos/workout-dto/update-workout.dto';
import { WorkoutEntity } from 'src/app/entity/workout/workout.entity';

export interface IWorkout {
  findByWorkoutName(workout_name: string): Promise<WorkoutEntity | null>;
  findByWorkoutId(id: string): Promise<WorkoutEntity | null>;
  create(data: CreateWorkoutDto): Promise<WorkoutEntity | null>;
  remove(id: string): Promise<WorkoutEntity | null>;
  update(id: string, data: UpdateWorkoutDto): Promise<WorkoutEntity | null>;
}
