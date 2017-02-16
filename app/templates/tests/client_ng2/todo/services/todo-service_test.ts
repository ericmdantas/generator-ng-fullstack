/// <reference path="../../../../typings/index.d.ts" />

<% if (testsSeparated) { %>
  import {TodoService} from "../../../../client/dev/todo/services/todo-service";
<% } else { %>
  import {TodoService} from "./todo-service";
<% } %>

describe("todo_service", () => {
  describe("creation", () => {
    it("should create the service correctly", () => {
		expect(true).toBe(true);
    });
  });
});
