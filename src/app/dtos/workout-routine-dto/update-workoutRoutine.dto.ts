import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutRoutineDTO } from './create-workoutRoutine.dto';

export class UpdateWorkoutRoutineDto extends PartialType(
  CreateWorkoutRoutineDTO,
) {}
