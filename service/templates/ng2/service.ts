import {Injectable} from '@angular/core';

interface IService {
  doStuff(): number;
}

@Injectable()
export class MyService implements IService {
  doStuff(): number {
    return 1;
  }
}
