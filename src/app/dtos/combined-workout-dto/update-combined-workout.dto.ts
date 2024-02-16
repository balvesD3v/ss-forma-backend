import { PartialType } from '@nestjs/mapped-types';
import { CreateCombinedWorkoutDto } from './create-combined-workout.dto';

export class UpdateCombinedWorkoutDto extends PartialType(CreateCombinedWorkoutDto) {}
