import { CreateWorkoutRoutineDTO } from 'src/app/dtos/workoutRoutine-dto/create-workoutRoutine.dto';
import { UpdateWorkoutRoutineDto } from 'src/app/dtos/workoutRoutine-dto/update-workoutRoutine.dto';
import { WorkoutRoutineEntity } from 'src/app/entity/workoutRoutine/workoutRoutine.entity';

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
}
