import {AngularFactory} from './angular';

export class ClientFactory {
  static tokens = {
    ANGULAR: 'angular'
  }

  static create(client, token, gen) {
    switch(client) {
        case ClientFactory.tokens.ANGULAR: return AngularFactory.build(token, gen);
    }
  }
}
