import {
  Component,
  Inject
} from 'angular2/core';

@Component({
  selector: '<%= name %>',
  templateUrl: '<%= feature %>/templates/<%= name %>.html',
  styleUrls: ['<%= feature %>/styles/<%= name %>.css']
})
export class <%= nameCapitalized %> {
  name: string = `yo, I'm your component :D`;
}
