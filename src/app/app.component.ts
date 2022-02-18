import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todos: string[] = [];

  addTodo(title: string) {
    this.todos.push(title);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
