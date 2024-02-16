-- DropForeignKey
ALTER TABLE "workoutsRoutine" DROP CONSTRAINT "workoutsRoutine_userId_fkey";

-- AddForeignKey
ALTER TABLE "workoutsRoutine" ADD CONSTRAINT "workoutsRoutine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
