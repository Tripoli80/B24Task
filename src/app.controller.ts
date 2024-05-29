import { Body, Controller, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { IB24HookIncome } from './b24.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async taskCreate(@Body() body: IB24HookIncome, @Res() res: any) {
    if (process.env.B24_AUTH_TOKEN !== body.auth.application_token) return;
    if (!body?.data?.FIELDS_AFTER?.ID) {
      return res.sendStatus(400);
    }
    return this.appService.task(+body.data.FIELDS_AFTER.ID);
  }
}
