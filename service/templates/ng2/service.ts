interface IService {
  doStuff():number;
}

export class MyService implements IService {
  doStuff():number {
    return 1;
  }
}
