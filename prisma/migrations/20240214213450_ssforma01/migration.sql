-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'INSTRUCTOR', 'MANAGER');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "roles" "Role"[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workoutsRoutine" (
    "id" TEXT NOT NULL,
    "workoutRoutine_title" TEXT NOT NULL,
    "workoutRoutine_name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "workoutsRoutine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workouts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "workout_name" TEXT NOT NULL,
    "workout_type" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "routineId" TEXT NOT NULL,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "workoutsRoutine" ADD CONSTRAINT "workoutsRoutine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "workoutsRoutine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
