import {
  Directive,
  OnInit
} from 'angular2/core';

@Directive({
  selector: '[directive]',
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
