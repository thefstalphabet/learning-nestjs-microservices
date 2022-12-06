import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('MESSAGE') private readonly messageClient: ClientProxy
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  getMessage() {
    this.messageClient.emit<any>("say", new Message('Every thing is workign fine'))
  }
}
