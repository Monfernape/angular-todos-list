import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: []
})
export class TodoForm {
  title = "";
  @Output() addTodo = new EventEmitter();

  handleAddTodo() {
    this.addTodo.emit(this.title);
    this.title = "";
  }
}
