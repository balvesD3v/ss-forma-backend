/*
  Warnings:

  - You are about to drop the column `client_name` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `description_workout` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `instructor_name` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `title_workout` on the `workouts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `workouts` table. All the data in the column will be lost.
  - Added the required column `instructions` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `routineId` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `series` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workout_name` to the `workouts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workout_type` to the `workouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "workouts" DROP COLUMN "client_name",
DROP COLUMN "created_at",
DROP COLUMN "description_workout",
DROP COLUMN "instructor_name",
DROP COLUMN "title_workout",
DROP COLUMN "updated_at",
ADD COLUMN     "instructions" TEXT NOT NULL,
ADD COLUMN     "routineId" TEXT NOT NULL,
ADD COLUMN     "series" TEXT NOT NULL,
ADD COLUMN     "weight" TEXT NOT NULL,
ADD COLUMN     "workout_name" TEXT NOT NULL,
ADD COLUMN     "workout_type" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "workoutsRoutine" (
    "id" TEXT NOT NULL,
    "workoutRoutine_name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "workoutsRoutine_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "workoutsRoutine" ADD CONSTRAINT "workoutsRoutine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "workoutsRoutine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
