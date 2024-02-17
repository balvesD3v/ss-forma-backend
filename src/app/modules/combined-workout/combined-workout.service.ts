import { Injectable } from '@nestjs/common';
import { CreateCombinedWorkoutDto } from '../../dtos/combined-workout-dto/create-combined-workout.dto';
import { UpdateCombinedWorkoutDto } from '../../dtos/combined-workout-dto/update-combined-workout.dto';
import { PrismaService } from 'src/app/database/prisma.service';
import { CombinedRoutineRepository } from 'src/app/repositories/combined-routine/Combined-routine.repository';

@Injectable()
export class CombinedWorkoutService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly combinedWorkoutRepository: CombinedRoutineRepository,
  ) {}

  async create(data: CreateCombinedWorkoutDto) {
    return this.combinedWorkoutRepository.create(data);
  }

  findAll() {
    return `This action returns all combinedWorkout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} combinedWorkout`;
  }

  async update(id: string, updateCombinedWorkoutDto: UpdateCombinedWorkoutDto) {
    return await this.combinedWorkoutRepository.update(
      id,
      updateCombinedWorkoutDto,
    );
  }

  remove(id: string) {
    return this.combinedWorkoutRepository.delete(id);
  }
}
