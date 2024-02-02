import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
    getPage(param: string): string {
        if(Number(param)){
            return `This is page number ${param}`;
        }
      }
}
