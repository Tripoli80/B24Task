import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { IB24Task } from './b24.interface';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async task(id: number) {
    let data = await this.getTaskData(id);
    if (data.groupId === '1') {
      const payload = {
        RESPONSIBLE_ID: '27',
      };
      data = await this.changeTask(id, payload);
    }
    return;
  }

  async getTaskData(id: number) {
    const url = `${process.env.B24URL}tasks.task.get`;

    const { data }: { data: { result: { task: IB24Task } } } =
      await firstValueFrom(
        this.httpService
          .post(url, {
            taskId: id,
          })
          .pipe(
            catchError((error: AxiosError) => {
              console.log('🚀 ~ error:', error);
              throw 'An error happened!';
            }),
          ),
      );
    return data.result.task;
  }

  async changeTask(id: number, payload: any) {
    const url = `${process.env.B24URL}tasks.task.update`;
    const { data }: { data: { result: IB24Task } } = await firstValueFrom(
      this.httpService
        .post(url, {
          taskId: id,
          fields: {
            ...payload,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log('🚀 ~ error:', error);
            throw 'An error happened!';
          }),
        ),
    );
    return data.result;
  }
}
