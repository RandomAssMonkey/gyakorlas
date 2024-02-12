import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciService {
  calculateFibonacci(length: number, offset: number) {
    const fibonacci: number[] = [];
    for (let i = 0; fibonacci.length < 100; i++) {
      if (i === 0 || i === 1) {
        fibonacci.push(i);
      } else {
        let nextFibonacci: number;
        nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextFibonacci);
      }
    }
    fibonacci.slice(offset, offset + length)
    return fibonacci;
  }

  calculateFibonacciWithId(param: number) {
    const fibonacci: number[] = this.calculateFibonacci(0 , 0);
    return fibonacci[param - 1];
  }
}
