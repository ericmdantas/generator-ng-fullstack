export class Angular1 {
  constructor(gen) {
    this.generator = gen;
  }


}

export class Angular2 {
  constructor(gen) {
    this.generator = gen;
  }

  
}

export class AngularFactory {
  static tokens = {
    NG1: 'ng1',
    NG2: 'ng2'
  }

  static build(token, gen) {
    switch(token) {
      case AngularFactory.tokens.NG1: return new Angular1(gen);
      case AngularFactory.tokens.NG2: return new Angular2(gen);
      default: throw new Error(`Invalid Angular token: ${token}.`);
    }
  }
}
