import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutRoutineDTO } from './create-workout-routine.dto';

export class UpdateWorkoutRoutineDto extends PartialType(
  CreateWorkoutRoutineDTO,
) {}
