import { Controller, Get, Param, Res } from '@nestjs/common';
import type {Response} from 'express';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
    constructor(private readonly pageService: PageService) {}

    @Get('/html')
getHTML(@Res() res: Response) {
  res.sendFile('index.html',  {root: 'public'});
}

@Get('/:param')
getPage(@Param('param') param: string) {
  return this.pageService.getPage(param);
  }
}
