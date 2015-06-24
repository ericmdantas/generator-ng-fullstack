/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
  selector: '<%= name %>'
})
@View({
  templateUrl: 'components/<%= name %>/<%= name %>.html'
})

export class <%= name %> {
  name: string = 'something';
}
