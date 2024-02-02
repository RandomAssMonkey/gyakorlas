import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly AdminService: AdminService) {}

    @Get('/titkos')
  getSecret(): string {
    return 'jelszó: 1234';
  }
}
