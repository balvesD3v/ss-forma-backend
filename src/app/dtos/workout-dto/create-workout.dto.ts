import { Workout } from '@prisma/client';

export class CreateWorkoutDto implements Workout {
  id: string;
  instructions: string;
  routineId: string;
  series: string;
  userId: string;
  weight: string;
  workout_name: string;
  workout_type: string;
}
