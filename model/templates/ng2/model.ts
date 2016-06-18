import {Injectable} from '@angular/core';

interface IModel {
  doStuff():number;
}

@Injectable()
export class MyModel implements IModel {
  doStuff():number {
    return 1;
  }
}
