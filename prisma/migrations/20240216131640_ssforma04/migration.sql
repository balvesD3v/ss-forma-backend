-- CreateTable
CREATE TABLE "CombinedWorkout" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "workout_name" TEXT NOT NULL,
    "workout_type" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "instructions" TEXT,
    "routineId" TEXT NOT NULL,

    CONSTRAINT "CombinedWorkout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CombinedWorkout" ADD CONSTRAINT "CombinedWorkout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CombinedWorkout" ADD CONSTRAINT "CombinedWorkout_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "workoutsRoutine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
