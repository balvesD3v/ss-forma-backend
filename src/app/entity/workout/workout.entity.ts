import { Workout } from '@prisma/client';

export class WorkoutEntity implements Workout {
  id: string;
  userId: string;
  series: string;
  weight: string;
  routineId: string;
  instructions: string;
  workout_name: string;
  workout_type: string;
}
