import {NodeFactory} from './node';
import {GoFactory} from './go';

export class ServerFactory {
  static tokens = {
    NODE: 'node',
    GO: 'go'
  }

  static create(token, gen) {
    switch(token) {
      case ServerFactory.tokens.NODE: return NodeFactory.build(gen);
      case ServerFactory.tokens.GO: return GoFactory.build(gen);
    }
  }
}
