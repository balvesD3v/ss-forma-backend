import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from '../../dtos/workout-dto/create-workout.dto';
import { UpdateWorkoutDto } from '../../dtos/workout-dto/update-workout.dto';
import { PrismaService } from 'src/app/database/prisma.service';
import { Workout } from '@prisma/client';
import { WorkoutRepository } from 'src/app/repositories/workout/Workout.repository';

@Injectable()
export class WorkoutService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly workoutRepository: WorkoutRepository,
  ) {}

  async create(data: CreateWorkoutDto): Promise<Workout | null> {
    return await this.workoutRepository.create(data);
  }

  async remove(id: string) {
    return await this.workoutRepository.remove(id);
  }

  findAll() {
    return `This action returns all workout`;
  }

  findOne(id: string) {
    return `This action returns a #${id} workout`;
  }

  update(id: string, data: UpdateWorkoutDto) {
    return this.workoutRepository.update(id, data);
  }
}
