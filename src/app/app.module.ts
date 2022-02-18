import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodosList } from "./todos-list/todos-list.component";
import { TodoForm } from "./todo-form/todo-form.component";

@NgModule({
  declarations: [AppComponent, TodosList, TodoForm],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
