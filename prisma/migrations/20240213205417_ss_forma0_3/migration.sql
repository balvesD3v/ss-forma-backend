/*
  Warnings:

  - Added the required column `workoutRoutine_title` to the `workoutsRoutine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "workoutsRoutine" ADD COLUMN     "workoutRoutine_title" TEXT NOT NULL;
