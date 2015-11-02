/// <reference path="../../typings/tsd.d.ts" />

import {
  Directive,
  OnInit
} from 'angular2/angular2';

@Directive({
  selector: 'directive',
  host: {
    '(click)': 'clickHandler()'
  }
})
export class MyDirective implements OnInit {
  onInit() {
    console.log('directive init');
  }

  clickHandler() {
    console.log('directive clicked');
  }
}
