import { WorkoutRoutine } from '@prisma/client';

export class WorkoutRoutineEntity implements WorkoutRoutine {
  id: string;
  userId: string;
  workoutRoutine_title: string;
  workoutRoutine_name: string;
}
