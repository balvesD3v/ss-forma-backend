import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CombinedWorkoutService } from './combined-workout.service';
import { CreateCombinedWorkoutDto } from '../../dtos/combined-workout-dto/create-combined-workout.dto';
import { UpdateCombinedWorkoutDto } from '../../dtos/combined-workout-dto/update-combined-workout.dto';

@Controller('combined-workout')
export class CombinedWorkoutController {
  constructor(
    private readonly combinedWorkoutService: CombinedWorkoutService,
  ) {}

  @Post()
  create(@Body() createCombinedWorkoutDto: CreateCombinedWorkoutDto) {
    return this.combinedWorkoutService.create(createCombinedWorkoutDto);
  }

  @Get()
  findAll() {
    return this.combinedWorkoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.combinedWorkoutService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCombinedWorkoutDto: UpdateCombinedWorkoutDto,
  ) {
    return this.combinedWorkoutService.update(id, updateCombinedWorkoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.combinedWorkoutService.remove(id);
  }
}
