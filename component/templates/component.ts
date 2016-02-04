import {Component, Inject} from 'angular2/angular2';

@Component({
  selector: '<%= name %>',
  templateUrl: 'components/<%= name %>/<%= name %>.html',
  styleUrls: ['components/<%= name %>/<%= name %>.css']
})
export class <%= name %> {
  name: string = `yo, I'm your component :D`;
}
