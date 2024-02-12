import { BadRequestException, Controller, Get, Param, Query } from "@nestjs/common";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FibonacciService } from './fibonacci.service';

@Controller('fibonacci')
export class FibonacciController {
  constructor(private readonly FibonacciService: FibonacciService) {}

  @Get()
  getFibonacci(@Query('length') length: number, @Query('offset') offset: number) {
    if (!Number(length) || Array.isArray(length) || !Number(offset) || Array.isArray(offset)){
      throw new BadRequestException("nuh uh");
    }
    return this.FibonacciService.calculateFibonacci(length, offset);
  }

  @Get('/:param')
  getFibonacciByIndex(@Param('param') param: number) {
    if(!Number(param) || Array.isArray(param)){
      throw new BadRequestException("nuh uh");
    }
    else{
      return this.FibonacciService.calculateFibonacciWithId(param);
    }
  }
}
