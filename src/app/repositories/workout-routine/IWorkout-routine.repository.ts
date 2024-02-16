import { CreateWorkoutRoutineDTO } from 'src/app/dtos/workout-routine-dto/create-workout-routine.dto';
import { UpdateWorkoutRoutineDto } from 'src/app/dtos/workout-routine-dto/update-workout-routine.dto';
import { WorkoutRoutineEntity } from 'src/app/entity/workout-routine/workout-routine.entity';

export interface IWorkoutRoutine {
  create(data: CreateWorkoutRoutineDTO): Promise<WorkoutRoutineEntity | null>;
  delete(id: string): Promise<WorkoutRoutineEntity | null>;
  update(
    id: string,
    data: UpdateWorkoutRoutineDto,
  ): Promise<WorkoutRoutineEntity | null>;
  findByWorkoutRoutineName(
    workoutRoutine_title: string,
  ): Promise<WorkoutRoutineEntity | null>;
  findAll(): Promise<WorkoutRoutineEntity[] | null>;
}
