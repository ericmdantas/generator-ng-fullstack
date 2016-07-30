import {
	RouterConfig,
	provideRouter
} from '@angular/router';

import {
	TodoCmp
} from '../components/todo-cmp';

const routes:RouterConfig = [
	{
		path: '',
		component: TodoCmp,
		pathMatch: 'full'
	}
]

export const TODO_ROUTES_PROVIDER = [
	provideRouter(routes)
];
