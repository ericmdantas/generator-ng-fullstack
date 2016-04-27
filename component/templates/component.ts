import {
  Component,
  Inject
} from 'angular2/core';

@Component({
  selector: '<%= name %>',
  templateUrl: 'client/dev/<%= feature %>/templates/<%= name %>.html',
  styleUrls: ['client/dev/<%= feature %>/styles/<%= name %>.css']
})
export class <%= nameCapitalized %> {
  name: string = `yo, I'm your component :D`;
}
