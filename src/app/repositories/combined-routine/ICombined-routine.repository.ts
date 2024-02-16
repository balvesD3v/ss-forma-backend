import { CreateCombinedWorkoutDto } from 'src/app/dtos/combined-workout-dto/create-combined-workout.dto';
import { CombinedWorkoutEntity } from 'src/app/entity/combined-workout/combined-workout.entity';

export interface ICombinedRoutine {
  create(data: CreateCombinedWorkoutDto): Promise<CombinedWorkoutEntity | null>;
  delete(id: string): Promise<CombinedWorkoutEntity | null>;
}
