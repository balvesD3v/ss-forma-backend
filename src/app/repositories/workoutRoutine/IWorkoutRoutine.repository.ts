import { WorkoutRoutineEntity } from 'src/app/entity/workoutRoutine/workoutRoutine.entity';

export interface IWorkoutRoutine {
  findByWorkoutRoutineName(
    workoutRoutine_title: string,
  ): Promise<WorkoutRoutineEntity | null>;
}
