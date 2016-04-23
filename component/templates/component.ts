import {
  Component,
  Inject
} from 'angular2/core';

@Component({
  selector: '<%= name %>',
  templateUrl: 'client/dev/<%= name %>/templates/<%= name %>.html',
  styleUrls: ['client/dev/<%= name %>/styles/<%= name %>.css']
})
export class <%= name %> {
  name: string = `yo, I'm your component :D`;
}
