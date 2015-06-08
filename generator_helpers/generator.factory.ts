"use strict";

import {Node} from 'node/node';
import {Go} from 'go/go';

export class GeneratorFactory {
  constructor(info:string) {
    switch (info) {
        case "node": return new Node();
        case "go": return new Go();
    }
  }
}

