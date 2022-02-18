import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todos-list",
  templateUrl: "./todos-list.component.html",
  styleUrls: []
})
export class TodosList {
  @Input() todos = [];
  @Output() deleteTodo = new EventEmitter();

  handleDeleteTodo(index: number) {
    this.deleteTodo.emit(index);
  }
}
