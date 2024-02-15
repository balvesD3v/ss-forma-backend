-- DropForeignKey
ALTER TABLE "workouts" DROP CONSTRAINT "workouts_routineId_fkey";

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "workoutsRoutine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
