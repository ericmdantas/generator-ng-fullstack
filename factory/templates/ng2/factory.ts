import {Injectable} from '@angular/core';

interface ISomething {
  doSomething(): void;
}

@Injectable()
export class MyFactory implements ISomething {
  doSomething(): void {

  }
}
