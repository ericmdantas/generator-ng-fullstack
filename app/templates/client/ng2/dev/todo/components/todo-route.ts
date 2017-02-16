import {
	Routes,
	RouterModule
} from "@angular/router";

import {
	TodoCmp
} from "../components/todo-cmp";

const todoRoutes:Routes = [
	{
		path: "",
		component: TodoCmp,
		pathMatch: "full"
	}
]

export const todoRouting = RouterModule.forRoot(todoRoutes);
