import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkoutRoutineService } from './workout-routine.service';
import { CreateWorkoutRoutineDTO } from '../../dtos/workout-routine-dto/create-workout-routine.dto';
import { UpdateWorkoutRoutineDto } from '../../dtos/workout-routine-dto/update-workout-routine.dto';

@Controller('workout-routine')
export class WorkoutRoutineController {
  constructor(private readonly workoutRoutineService: WorkoutRoutineService) {}

  @Post()
  create(@Body() createWorkoutRoutineDto: CreateWorkoutRoutineDTO) {
    return this.workoutRoutineService.create(createWorkoutRoutineDto);
  }

  @Get()
  findAll() {
    return this.workoutRoutineService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkoutRoutineDto: UpdateWorkoutRoutineDto,
  ) {
    return this.workoutRoutineService.update(id, updateWorkoutRoutineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutRoutineService.remove(id);
  }
}
