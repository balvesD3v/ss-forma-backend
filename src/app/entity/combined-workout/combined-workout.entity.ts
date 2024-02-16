import { CombinedWorkout } from '@prisma/client';

export class CombinedWorkoutEntity implements CombinedWorkout {
  id: string;
  instructions: string;
  routineId: string;
  series: string;
  userId: string;
  weight: string;
  workout_name: string;
  workout_type: string;
}
