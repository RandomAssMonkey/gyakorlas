import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  getPage(param: string) {
    if (Number(param)) {
      return `This is page number ${param}`;
    } else if (String(param)) {
      return param;
    }
  }

  getColor(color: string){
    return 'Az általad kiválasztott szín ' + color;
  }
}
