interface IModel {
  doStuff():number;
}

export class MyModel implements IModel {
  doStuff():number {
    return 1;
  }
}
